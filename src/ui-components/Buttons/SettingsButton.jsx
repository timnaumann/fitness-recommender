import React from 'react'
import * as S from './SettingsButton.style'
import PropTypes from 'prop-types'

const SettingsButton = (props) => (
  <S.SettingsButton
    onClick={props.onClick}
    disabled={props.disabled}
  >
    <S.Background
      clicked={props.currentValue}
      disabled={props.disabled}
    />

    <S.Dot
      clicked={props.currentValue}
      disabled={props.disabled}
    />
  </S.SettingsButton>

)

SettingsButton.propTypes = {
  onClick: PropTypes.func,
  currentValue: PropTypes.bool,
  disabled: PropTypes.bool,
}

SettingsButton.defaultProps = {
  onClick: () => {},
  currentValue: true,
  disabled: false
}

export default SettingsButton
