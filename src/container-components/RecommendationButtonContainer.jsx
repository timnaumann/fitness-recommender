import React, { useCallback } from 'react'

import RecommendationButton from '@ui-components/Buttons/RecommendationButton'
import { useGetUserProfileRecommendations } from '@container-components/container-hooks'
import { useI18n } from '@store/store-hooks'
import { useHistory } from 'react-router-dom'
import { startPageChangeAnimation } from '@container-components/container-helper'
import { useLoading } from '@store/app-specific/LoadingContext'
import { PATHS } from '../routes'

const RecommendationButtonContainer = React.memo((props) => {
  const [, dispatch] = useLoading()
  const history = useHistory()
  const genericI18n = useI18n().generic
  const retrieveUserRecommendationsFromApi = useGetUserProfileRecommendations()

  const recommendationPhase = PATHS.RECOMMENDATIONS

  const recommendationButtonLabel = genericI18n?.recommendationPhaseButton

  const onClick = useCallback(async () => {
    startPageChangeAnimation(dispatch, RecommendationButtonContainer.displayName)
    await retrieveUserRecommendationsFromApi()

    history.push(recommendationPhase)
  }, [
    history,
    recommendationPhase,
    retrieveUserRecommendationsFromApi,
  ])

  return (<RecommendationButton
    label={recommendationButtonLabel}
    onClick={onClick}
  />)
})

RecommendationButtonContainer.displayName = 'RecommendationButtonContainer'

export default RecommendationButtonContainer
