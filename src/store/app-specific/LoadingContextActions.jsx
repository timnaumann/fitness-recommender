const Actions = {

  LOADING: 'LOADING',
  LOADING_DONE: 'LOADING_DONE',

}

const LoadingActions = {
  createLoadingAction: (displayName) => ({
    type: Actions.LOADING,
    isLoading: true,
    triggeredBy: displayName
  }),
  createLoadingDoneAction: () => ({
    type: Actions.LOADING_DONE,
    isLoading: false
  }),

  getLoadingAction: () => Actions.LOADING,
  getLoadingDoneAction: () => Actions.LOADING_DONE

}

export default LoadingActions
