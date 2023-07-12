import React, { useState } from 'react'
import LocaleSelect from '@ui-components/EntityManagment/Selects/LocaleSelect/LocaleSelect'
import * as S from './AdminArea.style'
import Navbar from './Navbar/Navbar'
import SettingBar from '@ui-components/CookieConsent/ConsentSettings/SettingBar/SettingBar'
import PropTypes from 'prop-types'

const AdminArea = (props) => {
  const [entityComp, setEntityComp] = useState(null)
  return (
    <S.AdminAreaWrapper>
      <S.AdminTitle>
        Posture - Administration
      </S.AdminTitle>

      <S.Header>
        <S.LanguageSelection>
          <div className="lang">Select a language:</div>
          <LocaleSelect/>
        </S.LanguageSelection>

        <SettingBar
          heading="Enable the Recommender"
          onClick={props.toggleRecommenderAccess}
          description={'Be really sure, everybody can access it'}
          disabled={false}
          currentValue={props.recommenderEnabled}
        />
        <SettingBar
          heading="Enable Tracking"
          onClick={props.toggleRecommenderTracking}
          description={'Enable after everything is setup'}
          disabled={false}
          currentValue={props.trackingEnabled}
        />
      </S.Header>

      <Navbar setEntityComponent={setEntityComp}/>
      <S.EntityComp>{entityComp}</S.EntityComp>
    </S.AdminAreaWrapper>
  )
}

AdminArea.propTypes = {
  recommenderEnabled: PropTypes.bool,
  toggleRecommenderAccess: PropTypes.func,

  trackingEnabled: PropTypes.bool,
  toggleRecommenderTracking: PropTypes.func,
}

AdminArea.defaultProps = {
  recommenderEnabled: false,
  toggleRecommenderAccess: null,

  trackingEnabled: false,
  toggleRecommenderTracking: null
}

export default AdminArea
