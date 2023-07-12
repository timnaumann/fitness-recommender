import React, { useContext, useState } from 'react'
import {
  useInitAuthStrategy,
  useRecommenderProfileOnComponentMount,
} from '@container-components/container-hooks'
import { LocaleContext } from '@store/locale'
import AdminArea from '@ui-components/AdminArea/AdminArea'
import {
  SETTING_KEYS,
  useRecommenderEnabled,
  useRecommenderShouldBeTracked
} from '@globals/Settings'
import { useToggleSettingProperty } from '@container-components/container-helper'

const AdminAreaContainer = () => {
  const [ready, setReady] = useState(false)
  const [locale] = useContext(LocaleContext)

  const recommenderEnabled = useRecommenderEnabled()
  const trackingEnabled = useRecommenderShouldBeTracked()

  useRecommenderProfileOnComponentMount(locale)

  useInitAuthStrategy(() => {
    setReady(true)
  })

  const toggleRecommenderAccess = useToggleSettingProperty(SETTING_KEYS.RECOMMENDER_ENABLED, recommenderEnabled)
  const toggleRecommenderTracking = useToggleSettingProperty(SETTING_KEYS.TRACKING_ENABLED, trackingEnabled)

  return ready && (<AdminArea
    recommenderEnabled={recommenderEnabled}
    toggleRecommenderAccess={toggleRecommenderAccess}

    trackingEnabled={trackingEnabled}
    toggleRecommenderTracking={toggleRecommenderTracking}
  />)
}

export default AdminAreaContainer
