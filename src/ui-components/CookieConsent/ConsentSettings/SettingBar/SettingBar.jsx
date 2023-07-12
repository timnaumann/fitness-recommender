import React from 'react'
import SettingsButton from '@ui-components/Buttons/SettingsButton'
import PropTypes from 'prop-types'

import * as S from './SettingBar.style'

const SettingBar = (props) => {
  return (
    <S.SettingBar>
      <S.Heading>
        {props.heading}
      </S.Heading>
      <S.Description>
        {props.description}
      </S.Description>
      <SettingsButton
        onClick={props.onClick}
        currentValue={props.disabled ? true : props.currentValue }
        disabled={props.disabled}
      />
    </S.SettingBar>
  )
}

SettingBar.propTypes = {
  onClick: PropTypes.func,
  heading: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  currentValue: PropTypes.bool
}

SettingBar.defaultProps = {
  onClick: () => {},
  heading: '',
  description: '',
  disabled: false,
  currentValue: true,
}

export default SettingBar
