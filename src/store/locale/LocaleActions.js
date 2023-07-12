const Actions = {
  SET_SELECTED_LOCALE: 'SET_SELECTED_LOCALE',
}

const LocaleActions = {
  setSelectedLocale: (locale) => ({
    type: Actions.SET_SELECTED_LOCALE,
    locale,
  }),

  getSetSelectedLocale: () => Actions.SET_SELECTED_LOCALE,
}

export default LocaleActions
