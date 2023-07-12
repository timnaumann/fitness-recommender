import React, { useEffect } from 'react'
import { useI18n } from '@store/store-hooks'
import RecommendationStage from '@ui-components/Pages/RecommendationStage/RecommendationStage'
import { useGetUserProfileRecommendations } from '@container-components/container-hooks'
import { useGetStateWithoutSetter } from '@store/store-helper'
import { UserProfileContext } from '@store/user-profile'

const RecommendationStageContainer = () => {
  const retrieveUserRecommendationsFromApi = useGetUserProfileRecommendations()
  const recommendations = useGetStateWithoutSetter(
    UserProfileContext,
    'recommendations',
  )

  useEffect(() => {
    !recommendations && retrieveUserRecommendationsFromApi()
  }, [recommendations])

  const i18n = useI18n()

  return (
    <RecommendationStage
      heading={i18n?.generic?.recommendationPhaseHeading}
      recommendations={recommendations}
    />
  )
}

RecommendationStageContainer.propTypes = {}

RecommendationStageContainer.defaultProps = {}

export default RecommendationStageContainer
