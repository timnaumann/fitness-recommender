import React from 'react'
import CookieActions from './CookieActions'

export const CookiesContext = React.createContext()

const cookiesReducer = (state, action) => {
  switch (action.type) {
    case CookieActions.getSetCookieConsentConfigAction(): {
      return {
        ...state,
        cookieConsentConfig: action.cookieConsentConfig,
      }
    }
    case CookieActions.getSetCookieConsentValueAction(): {
      return {
        ...state,
        cookieConsentConfig: {
          [action.cookieName]: action.cookieValue,
        },
      }
    }
    case CookieActions.getSetConsentSettingsToOpen(): {
      return {
        ...state,
        shouldOpenConsentSettings: action.shouldOpenConsentSettings,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

export const CookiesProvider = (props) => {
  const [state, dispatch] = React.useReducer(cookiesReducer, { shouldOpenConsentSettings: false })
  const value = React.useMemo(() => [state, dispatch], [state])
  return <CookiesContext.Provider value={value} {...props} />
}
