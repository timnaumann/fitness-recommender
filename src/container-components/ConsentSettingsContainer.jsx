import React, { useCallback, useContext, useEffect, useState } from 'react'
import { CookieActions, CookiesContext } from '@store/cookies'
import {
  getBrowserCookieName,
  getCookieByName,
  getStoredCookieConsentValueFromBrowser,
  setCookie
} from '@container-components/container-helper'
import ConsentSettings from '@ui-components/CookieConsent/ConsentSettings/ConsentSettings'
import { useI18n } from '@store/store-hooks'
import CookieConsent from '@ui-components/CookieConsent/CookieConsent'

const ConsentSettingsContainer = () => {
  const i18n = useI18n()
  const [cookieState, dispatchCookieAction] = useContext(CookiesContext)

  const [cookieSettings, setCookieSettings] = useState([])

  const cookies = i18n?.generic?.cookieConsent?.cookies

  useEffect(() => {
    const settings = cookies && Object.entries(cookies)
      .map((([key, value]) => ({
        cookieName: key,
        description: value.description,
        heading: value.heading,
        selectable: value.hasOwnProperty('selectable') ? value.selectable : true,
        value: getStoredCookieConsentValueFromBrowser(key),
      })))
    setCookieSettings(settings)
    settings && dispatchCookieAction(CookieActions.createSetCookieConsentConfigAction(settings.reduce((acc, cookie) => ({
      ...acc,
      [cookie.cookieName]: cookie.value
    }), {})))
  }, [cookies, setCookieSettings])

  const closeConsentSettings = useCallback(() => {
    dispatchCookieAction(CookieActions.createSetConsentSettingsToOpenAction(false))
  }, [dispatchCookieAction])

  const storeCookieConsentConfig = useCallback((settings) => {
    setCookieSettings(settings)

    settings.forEach(cookie => {
      storeCookieConsentValue(cookie.cookieName, cookie.value)
    })
    dispatchCookieAction(CookieActions.createSetCookieConsentConfigAction(settings.reduce((acc, cookie) => ({
      ...acc,
      [cookie.cookieName]: cookie.value
    }), {})))
  }, [dispatchCookieAction, setCookieSettings])

  const onAcceptAll = useCallback(() => {
    const updatedCookieSettings = cookieSettings?.map(cookie => ({
      ...cookie,
      value: cookie.selectable ? true : cookie.value,
    }))
    storeCookieConsentConfig(updatedCookieSettings)

    closeConsentSettings()
  }, [storeCookieConsentConfig, cookieSettings, closeConsentSettings])

  const onDenyAll = useCallback(() => {
    const updatedCookieSettings = cookieSettings?.map(cookie => ({
      ...cookie,
      value: cookie.selectable ? false : cookie.value,
    }))
    storeCookieConsentConfig(updatedCookieSettings)

    closeConsentSettings()
  }, [storeCookieConsentConfig, cookieSettings, closeConsentSettings])

  const onCookieSelection = useCallback((cookieName) => {
    const updatedCookieSettings = cookieSettings?.map(cookie => {
      if (cookie.cookieName === cookieName && cookie.selectable) {
        return {
          ...cookie,
          value: !cookie.value
        }
      }
      return cookie
    })
    storeCookieConsentConfig(updatedCookieSettings)
  }, [cookieSettings, storeCookieConsentConfig])

  const onStore = useCallback(() => {
    closeConsentSettings()
  }, [closeConsentSettings])

  const handleAdjustSettings = useCallback(() => {
    dispatchCookieAction(CookieActions.createSetConsentSettingsToOpenAction(true))
  }, [dispatchCookieAction])

  if (cookieState.shouldOpenConsentSettings) {
    return (
      <ConsentSettings
        cookieSettings={cookieSettings}
        onAcceptAll={onAcceptAll}
        onDenyAll={onDenyAll}
        onStore={onStore}
        onCookieSelection={onCookieSelection}
      >
      </ConsentSettings>
    )
  }

  return !userCookiesAlreadySet(cookies) && <CookieConsent
    onAcceptAll={onAcceptAll}
    onDeny={onDenyAll}
    onAdjust={handleAdjustSettings}
  />
}

const storeCookieConsentValue = (cookieName, cookieValue) => {
  const browserCookieName = getBrowserCookieName(cookieName)
  setCookie(browserCookieName, cookieValue, 1000 * 60 * 60 * 24 * 365)
}

const userCookiesAlreadySet = (cookies) => cookies && !!Object.keys(cookies)
  .find(key => getCookieByName(getBrowserCookieName(key)) !== null)

ConsentSettingsContainer.propTypes = {}

ConsentSettingsContainer.defaultProps = {}

export default ConsentSettingsContainer
