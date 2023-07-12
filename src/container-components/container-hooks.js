import { useCallback, useContext, useEffect, useMemo } from 'react'
import { RecommenderProfileActions } from '@store/recommender-profile'
import {
  getRecommenderProfile,
  getUserProfileRecommendations,
  getUserProfileSummary,
  initSecureLayer,
  setSelectedUserCategory,
  setUserProfile,
} from '@api/api-service'
import { RecommenderProfileContext } from '@store/recommender-profile/recommender-profile'
import {
  useAnswers,
  useCategories,
  useQuestions,
  useSelectedCategoryId,
  useUserId,
  useUserProfileSummary
} from '@store/store-hooks'
import { UserProfileContext } from '@store/user-profile/user-profile'
import UserProfileActions from '@store/user-profile/UserProfileActions'
import CategoriesActions from '../store/categories/CategoriesActions'
import { CategoriesContext } from '@store/categories'
import { trackAnswerSelection, trackSelectedCategory } from '@ga-tracking/googleanalytics-helper'
import { useMoveToNextSlide, useMoveToNextSlideLoading } from '@store/app-specific/CarouselContext'

export const useRecommenderProfileOnComponentMount = (locale) => {
  const getSummary = useRetrieveUserProfileSummary()
  const [, dispatchRecommenderProfileAction] = useContext(
    RecommenderProfileContext,
  )

  useEffect(() => {
    const fetch = async () => {
      const profile = await getRecommenderProfile(locale)
      dispatchRecommenderProfileAction(
        RecommenderProfileActions.setRecommenderProfile(profile),
      )
      dispatchRecommenderProfileAction(
        RecommenderProfileActions.setRecommenderProfileLoaded(true),
      )

      // hacky, we retrieve the summary initially (to restore it if already present for the user)
      const userId = profile?.sessionData?.userId
      userId && await getSummary(userId)
    }
    fetch()
  }, [dispatchRecommenderProfileAction, locale])
}

export const useRecommenderLoaded = () => {
  const [recommenderState] = useContext(RecommenderProfileContext)
  return recommenderState.loaded
}

export const useSetUserProfile = () => {
  const userId = useUserId()
  const answers = useAnswers()
  const questions = useQuestions()
  const [, dispatchRecommenderProfileAction] = useContext(RecommenderProfileContext)

  return useCallback(async (answerId, value) => {
    const sideEffects = await setUserProfile(userId, answerId, value)
    dispatchRecommenderProfileAction(
      RecommenderProfileActions.createSetRecommenderSideEffectAction(sideEffects)
    )

    const answer = answers.find(a => a.id === answerId)
    const question = questions.find(q => q.id === answer.questionId)
    trackAnswerSelection(question.name, answer.name, answer.label, value)
  }, [userId])
}

export const useSetSelectedUserCategory = () => {
  const moveToNextSlide = useMoveToNextSlide()
  const userId = useUserId()
  const [, dispatchCategoryAction] = useContext(CategoriesContext)
  const categories = useCategories()
  const [, dispatchRecommenderProfileAction] = useContext(RecommenderProfileContext)

  return useCallback(async (categoryId) => {
    const sideEffects = await setSelectedUserCategory(userId, categoryId)
    dispatchRecommenderProfileAction(
      RecommenderProfileActions.createSetRecommenderSideEffectAction(sideEffects)
    )
    dispatchCategoryAction(CategoriesActions.setSelectedCategory(categoryId))

    const category = categories.find(c => c.id === categoryId)
    trackSelectedCategory(category.name)

    // move carousel if possible
    moveToNextSlide()
  }, [userId])
}

export const useGetUserProfileRecommendations = () => {
  const [, dispatchUserProfileAction] = useContext(UserProfileContext)
  const userId = useUserId()
  return useCallback(async () => {
    const recommendations = await getUserProfileRecommendations(userId)
    dispatchUserProfileAction(
      UserProfileActions.createSetUserProfileRecommendationsAction(
        recommendations,
      ),
    )
  }, [userId, dispatchUserProfileAction])
}

export const useInitAuthStrategy = (callback) => {
  useEffect(() => {
    const init = async () => {
      // load keycloak script dynamically
      const loadScript = () => new Promise((resolve) => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://lemur-1.cloud-iam.com/auth/js/keycloak.js'
        script.onload = () => {
          window.Keycloak = Keycloak
          resolve()
        }
        document.head.appendChild(script)
      })
      await loadScript()
      await initSecureLayer()
      callback()
    }
    init()
  }, [])
}

export const useGetSummaryOfCategorySelection = () => {
  const summary = useUserProfileSummary()
  const answers = useAnswers()
  const questions = useQuestions()
  const selectedCategoryId = useSelectedCategoryId()

  return useMemo(() => summary?.filter(({ id }) => {
    const answer = answers.find((a) => a.id === id)
    const question = questions.find((q) => q.id === answer.questionId)
    return question.categories.find(c => c.id === selectedCategoryId)
  }), [summary, answers, questions, selectedCategoryId])
}

export const useRetrieveUserProfileSummary = () => {
  const userId = useUserId()
  const [, dispatchUserProfileAction] = useContext(UserProfileContext)

  return useMemo(() => async (givenUserId) => {
    const resultId = givenUserId ?? userId
    const userProfile = await getUserProfileSummary(resultId)
    dispatchUserProfileAction(
      UserProfileActions.createSetUserProfileSummaryAction(userProfile)
    )
  }, [userId, dispatchUserProfileAction])
}
