import React from 'react'
import RecommenderProfileActions from './RecommenderProfileActions'

export const RecommenderProfileContext = React.createContext()

const recommenderProfileReducer = (state, action) => {
  switch (action.type) {
    case RecommenderProfileActions.getSetRecommenderProfileAction(): {
      return {
        ...state,
        recommenderProfile: action.recommenderProfile,
      }
    }
    case RecommenderProfileActions.getSetRecommenderProfileLoadedAction(): {
      return {
        ...state,
        loaded: action.loaded,
      }
    }
    case RecommenderProfileActions.getSetRecommenderSessionDataAction(): {
      state.recommenderProfile.sessionData = {
        ...state.recommenderProfile.sessionData,
        ...action.sessionData
      }
      return {
        ...state,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

export const RecommenderProvider = (props) => {
  const [state, dispatch] = React.useReducer(recommenderProfileReducer, [])
  const value = React.useMemo(() => [state, dispatch], [state])
  return <RecommenderProfileContext.Provider value={value} {...props} />
}
