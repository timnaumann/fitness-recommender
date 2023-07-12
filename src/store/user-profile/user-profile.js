import React from 'react'
import UserProfileActions from './UserProfileActions'

export const UserProfileContext = React.createContext()

const userProfilesReducer = (state, action) => {
  switch (action.type) {
    case UserProfileActions.getSetUserProfileSummaryAction(): {
      return {
        ...state,
        summary: action.userProfile,
      }
    }
    case UserProfileActions.getSetUserProfileRecommendationsAction(): {
      return {
        ...state,
        recommendations: action.recommendations,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}
export const UserProfilesProvider = (props) => {
  const [state, dispatch] = React.useReducer(userProfilesReducer, [])
  const value = React.useMemo(() => [state, dispatch], [state])
  return <UserProfileContext.Provider value={value} {...props} />
}
