import React from 'react'
import {
  useRecommenderLoaded,
  useRecommenderProfileOnComponentMount
} from '@container-components/container-hooks'
import ConsentSettingsContainer from '@container-components/ConsentSettingsContainer'
import { LoadingAnimationContainer } from '@container-components/LoadingAnimationContainer'

const AppInitialiserContainer = (props) => {
  useRecommenderProfileOnComponentMount()
  const recommenderDataLoaded = useRecommenderLoaded()

  return recommenderDataLoaded ? (
    <>
      {props.children}
      <LoadingAnimationContainer/>
      <ConsentSettingsContainer/>
    </>
  ) : null
}

export default AppInitialiserContainer
