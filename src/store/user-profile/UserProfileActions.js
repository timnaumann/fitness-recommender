const Actions = {
  SET_USER_PROFILE_SUMMARY: 'SET_USER_PROFILE_SUMMARY',
  SET_USER_PROFILE_RECOMMENDATIONS: 'SET_USER_PROFILE_RECOMMENDATIONS',
}

const UserProfileActions = {
  createSetUserProfileSummaryAction: (userProfile) => ({
    type: Actions.SET_USER_PROFILE_SUMMARY,
    userProfile,
  }),
  createSetUserProfileRecommendationsAction: (recommendations) => ({
    type: Actions.SET_USER_PROFILE_RECOMMENDATIONS,
    recommendations,
  }),
  getSetUserProfileSummaryAction: () => Actions.SET_USER_PROFILE_SUMMARY,
  getSetUserProfileRecommendationsAction: () => Actions.SET_USER_PROFILE_RECOMMENDATIONS,
}

export default UserProfileActions
