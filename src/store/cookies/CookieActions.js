const Actions = {
  SET_COOKIE_CONSENT_CONFIG: 'SET_COOKIE_CONSENT_CONFIG',
  SET_COOKIE_CONSENT_VALUE: 'SET_COOKIE_CONSENT_VALUE',
  SET_CONSENT_SETTINGS_TO_OPEN: 'SET_CONSENT_SETTINGS_TO_OPEN',
}

const CookieActions = {
  createSetCookieConsentConfigAction: (cookieConsentConfig) => ({
    type: Actions.SET_COOKIE_CONSENT_CONFIG,
    cookieConsentConfig,
  }),

  createSetCookieConsentValueAction: (cookieName, cookieValue) => ({
    type: Actions.SET_COOKIE_CONSENT_VALUE,
    cookieName,
    cookieValue,
  }),

  createSetConsentSettingsToOpenAction: (shouldOpenConsentSettings) => ({
    type: Actions.SET_CONSENT_SETTINGS_TO_OPEN,
    shouldOpenConsentSettings,
  }),

  getSetConsentSettingsToOpen: () => Actions.SET_CONSENT_SETTINGS_TO_OPEN,
  getSetCookieConsentValueAction: () => Actions.SET_COOKIE_CONSENT_VALUE,
  getSetCookieConsentConfigAction: () => Actions.SET_COOKIE_CONSENT_CONFIG,
}

export default CookieActions
