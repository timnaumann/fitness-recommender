import { useCookieConsentSettings, useMetaData } from '@store/store-hooks'

export const SETTING_KEYS = {
  RECOMMENDER_ENABLED: 'recommenderEnabled',
  TRACKING_ENABLED: 'trackingEnabled',
}

export const useRecommenderEnabled = () => {
  const { settings } = useMetaData()
  const recommenderEnabled = settings?.[SETTING_KEYS.RECOMMENDER_ENABLED]
  return recommenderEnabled === 'true'
}

const performanceCookieId = 'performance'
export const useRecommenderShouldBeTracked = () => {
  const { settings } = useMetaData()
  const cookieConsentSettings = useCookieConsentSettings()

  // check the global setting value and the cookie consent
  const trackingEnabled = settings?.[SETTING_KEYS.TRACKING_ENABLED]
  const performanceCookieConsent = cookieConsentSettings && cookieConsentSettings[performanceCookieId]
  return trackingEnabled === 'true' && performanceCookieConsent
}

