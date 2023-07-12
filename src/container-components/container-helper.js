import LoadingActions from '@store/app-specific/LoadingContextActions'
import { useCallback, useContext, useEffect } from 'react'
import { LoadingContext } from 'react-router-loading'
import { useLoading } from '@store/app-specific/LoadingContext'
import { addSetting, getRecommenderProfile } from '@api/api-service'
import RecommenderProfileActions from '../store/recommender-profile/RecommenderProfileActions'
import { LocaleContext } from '@store/locale'
import { RecommenderProfileContext } from '@store/recommender-profile'
import { useSelectedCategory, useSideEffects } from '@store/store-hooks'
import { useGetSummaryOfCategorySelection } from '@container-components/container-hooks'

export const enrichEntitiesByI18nAndSort = (entityIdentifier, entities, i18n) => (
    (entities
        && entities.map((entity) => {
            const i18nValue = i18n?.[entityIdentifier]?.[entity.id]
            return { ...entity, ...i18nValue }
        })
            .sort((a, b) => a.id > b.id ? 1 : -1))
    || []
)

export const encodeStageNameParam = (param) => btoa(param)
export const decodeStageNameParam = (param) => atob(param)

export const findElementInListById = (entityId, list) => list.find((l) => l.id === entityId)

// expirationTime is per default 30 min, unit is ms
export const setCookie = (name, value, expirationTime = 30 * 60 * 1000) => {
    const date = new Date()
    date.setTime(date.getTime() + expirationTime)
    const expires = `; expires=${date.toUTCString()}`

    document.cookie = `${name}=${value || ''}${expires}; path=/`
}

export const getCookieByName = (cName) => {
    const name = `${cName}=`
    const cDecoded = decodeURIComponent(document.cookie) // to be careful
    const cArr = cDecoded.split('; ')
    let res = null
    cArr.forEach((val) => {
        if (val.indexOf(name) === 0) res = val.substring(name.length)
    })
    return res
}

export const TRACKING_ID = 'UA-199207437-1'

export const gaOptionsWrapperObject = {
    debug: true,
    titleCase: false,
    gaOptions: {
        siteSpeedSampleRate: 100,
    },
}

export const startPageChangeAnimation = (dispatchLoadingAnimation, displayName) => {
    if (!displayName) {
        throw Error('DisplayName need to be present if you want to start an animation.')
    }
    dispatchLoadingAnimation(LoadingActions.createLoadingAction(displayName))
}

export const useToggleSettingProperty = (settingsKey, settingsProperty) => {
    const [locale] = useContext(LocaleContext)
    const [, dispatchRecommenderProfileAction] = useContext(RecommenderProfileContext)
    return useCallback(async () => {
        if (settingsProperty) {
            await addSetting(settingsKey, false)
        } else {
            await addSetting(settingsKey, true)
        }
        const profile = await getRecommenderProfile(locale)
        dispatchRecommenderProfileAction(
            RecommenderProfileActions.setRecommenderProfile(profile)
        )
    }, [settingsProperty])
}

// in ms
const syntheticTimeout = 600
export const useStopPageChangeAnimationOnMount = (displayName) => {
    const [{ triggeredBy }, dispatchLoadingAnimation] = useLoading()
    const loadingContext = useContext(LoadingContext)

    useEffect(() => {
        if (!triggeredBy) {
            loadingContext.done()
        }

        if (triggeredBy && displayName && triggeredBy !== displayName) {
            setTimeout(() => {
                loadingContext.done()
                dispatchLoadingAnimation(LoadingActions.createLoadingDoneAction())
            }, syntheticTimeout)
        }
    }, [dispatchLoadingAnimation, loadingContext, displayName, syntheticTimeout, triggeredBy])
}

export const useShouldShowSummary = () => {
    const summary = useGetSummaryOfCategorySelection()
    const selectedCategory = useSelectedCategory()
    const sideEffects = useSideEffects()

    if (!selectedCategory) {
        return false
    }

    const diagnosisTestQuestionName = getDiagnosisTestQuestionNameForCategory(selectedCategory.name)
    const questionSiteEffects = sideEffects?.questions ?? []
    return summary.length !== 0 && questionSiteEffects[diagnosisTestQuestionName]?.visible
}

export const getDiagnosisReviewQuestionNameForCategory = (categoryName) => `diagnosis-review-${categoryName}`
export const getDiagnosisTestQuestionNameForCategory = (categoryName) => `diagnosis-tests-${categoryName}`

const COOKIE_NAME_PREFIX = process.env.REACT_APP_COOKIE_NAME_PREFIX
export const getStoredCookieConsentValueFromBrowser = (cookieName) => !!getCookieByName(getBrowserCookieName(cookieName))
export const getBrowserCookieName = (cookieName) => `${COOKIE_NAME_PREFIX}_${cookieName}`
