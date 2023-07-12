const Actions = {
  SET_RECOMMENDER_PROFILE: 'SET_RECOMMENDER_PROFILE',
  SET_RECOMMENDER_PROFILE_LOADED: 'SET_RECOMMENDER_PROFILE_LOADED',
  SET_RECOMMENDER_SESSION_DATA: 'SET_RECOMMENDER_SESSION_DATA',
}

const RecommenderProfileActions = {
  createSetRecommenderSideEffectAction: (sessionData) => ({
    type: Actions.SET_RECOMMENDER_SESSION_DATA,
    sessionData,
  }),
  setRecommenderProfileLoaded: (loaded) => ({
    type: Actions.SET_RECOMMENDER_PROFILE_LOADED,
    loaded,
  }),
  setRecommenderProfile: (recommenderProfile) => ({
    type: Actions.SET_RECOMMENDER_PROFILE,
    recommenderProfile,
  }),
  getSetRecommenderProfileAction: () => Actions.SET_RECOMMENDER_PROFILE,
  getSetRecommenderProfileLoadedAction: () => Actions.SET_RECOMMENDER_PROFILE_LOADED,
  getSetRecommenderSessionDataAction: () => Actions.SET_RECOMMENDER_SESSION_DATA,
}

export default RecommenderProfileActions
