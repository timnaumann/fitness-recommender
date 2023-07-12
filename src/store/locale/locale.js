import * as React from 'react'
import LocaleActions from '@store/locale/LocaleActions'

export const LocaleContext = React.createContext()

const localeReducer = (state, action) => {
  switch (action.type) {
    case LocaleActions.getSetSelectedLocale(): {
      return action.locale
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const LocaleProvider = (props) => {
  const [state, dispatchLocaleAction] = React.useReducer(localeReducer, 'de-DE')
  const value = React.useMemo(() => [state, dispatchLocaleAction], [state])
  return <LocaleContext.Provider value={value} {...props} />
}
