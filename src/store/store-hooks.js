import React, { useContext, useMemo } from 'react'

import { useGetStateWithoutSetter } from '@store/store-helper'
import { RecommenderProfileContext } from '@store/recommender-profile'
import { ComponentContext } from '@store/registry/component-context'
import { enrichEntitiesByI18nAndSort } from '@container-components/container-helper'
import { CategoriesContext } from '@store/categories'
import { UserProfileContext } from '@store/user-profile/user-profile'
import { LocaleContext } from '@store/locale'
import { CookiesContext } from '@store/cookies'
import { getAnswerDiagnosisDetails } from '@api/api-service.js'

export const useRecommenderProfile = () => useGetStateWithoutSetter(RecommenderProfileContext, 'recommenderProfile')

export const useI18n = () => {
  const recommenderProfile = useRecommenderProfile()
  return (recommenderProfile && recommenderProfile.i18n) || {}
}

export const useCategories = () => {
  const i18n = useI18n()
  const recommenderProfile = useRecommenderProfile()
  return useMemo(
    () => enrichEntitiesByI18nAndSort('categories', recommenderProfile?.categories, i18n),
    [i18n, recommenderProfile],
  )
}

export const useRecommendations = () => {
  const i18n = useI18n()
  const recommenderProfile = useRecommenderProfile()
  return useMemo(
    () => enrichEntitiesByI18nAndSort(
      'recommendations',
      recommenderProfile?.recommendations,
      i18n,
    ),
    [i18n, recommenderProfile],
  )
}

export const useQuestions = () => {
  const i18n = useI18n()
  const recommenderProfile = useRecommenderProfile()
  const questions = recommenderProfile?.questions

  return useMemo(
    () => enrichEntitiesByI18nAndSort('questions', questions, i18n),
    [i18n, questions],
  )
}

export const useAnswers = () => {
  const i18n = useI18n()
  const recommenderProfile = useRecommenderProfile()

  return useMemo(
    () => enrichEntitiesByI18nAndSort('answers', recommenderProfile?.answers, i18n),
    [i18n, recommenderProfile],
  )
}

export const useDiagnosis = () => {
  const i18n = useI18n()
  const recommenderProfile = useRecommenderProfile()
  return useMemo(
    () => enrichEntitiesByI18nAndSort('diagnosis', recommenderProfile?.diagnosis, i18n),
    [i18n, recommenderProfile],
  )
}

export const useSortedQuestionStages = () => {
  const recommenderProfile = useRecommenderProfile()
  const i18n = useI18n()

  const questionStages = (recommenderProfile && recommenderProfile.questionStages) || []
  const sortedQuestionStage = questionStages.sort(
    (s, t) => s.questionFlowPosition - t.questionFlowPosition,
  )

  return useMemo(
    () => enrichEntitiesByI18nAndSort('questionStages', sortedQuestionStage, i18n),
    [i18n, sortedQuestionStage],
  )
}

export const useMetaData = () => {
  const recommenderProfile = useRecommenderProfile()
  return (recommenderProfile && recommenderProfile.metaData) || {}
}

export const useLocales = () => {
  const metaData = useMetaData()
  return metaData?.supportedLocales || []
}

export const useUserId = () => {
  const recommenderProfile = useRecommenderProfile()
  return recommenderProfile && recommenderProfile.sessionData?.userId
}

export const useSelectedCategoryId = () => useGetStateWithoutSetter(CategoriesContext, 'selectedCategory')
export const useSelectedCategory = () => {
  const selectedCategoryId = useSelectedCategoryId()
  const categories = useCategories()
  return categories.find(c => c.id === selectedCategoryId)
}

export const useUserProfileSummary = () => useGetStateWithoutSetter(UserProfileContext, 'summary') || []

export const useUserProfileRecommendations = () => {
  const i18n = useI18n()
  const recommendations = useGetStateWithoutSetter(
    UserProfileContext,
    'recommendations',
  )

  return useMemo(
    () => enrichEntitiesByI18nAndSort('recommendations', recommendations || [], i18n),
    [i18n, recommendations],
  )
}

export const useSelectedLocale = () => {
  const [selectedLocale] = useContext(LocaleContext)
  return selectedLocale
}

export const useSessionData = () => {
  const recommenderProfile = useRecommenderProfile()
  return recommenderProfile.sessionData
}

export const useSideEffects = () => useSessionData()?.sideEffects
/**
 * fetch a specific component from the nearest parent context
 * if type is falsey or the type is not registered, a fallback or NullComponent will be returned
 */
export const useUiComponent = (type, fallback = () => null) => {
  const context = React.useContext(ComponentContext)
  return React.useMemo(() => {
    if (!type) return fallback

    const Component = context[type]

    if (Component) {
      return Component
    }

    return fallback
  }, [type, fallback, context])
}

export const useCookieConsentSettings = () => {
  const [{ cookieConsentConfig } ] = useContext(CookiesContext)
  return cookieConsentConfig
}

