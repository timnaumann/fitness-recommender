import React from 'react'
import LoadingActions from '@store/app-specific/LoadingContextActions'

export const LoadingContext = React.createContext({})

const loadingReducer = (state, action) => {
  switch (action.type) {
    case LoadingActions.getLoadingAction():
      return {
        ...state,
        isLoading: action.isLoading,
        triggeredBy: action.triggeredBy
      }
    case LoadingActions.getLoadingDoneAction():
      return {
        ...state,
        isLoading: action.isLoading,
        triggeredBy: null
      }
    default: {
      throw new Error(`Unhandled type: ${action.type}`)
    }
  }
}

export const LoadingContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(loadingReducer, { isLoading: false, })
  const value = React.useMemo(() => [state, dispatch], [state])
  return (<LoadingContext.Provider value={value} {...props}/>)
}

export const useLoading = () => {
  const context = React.useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}
