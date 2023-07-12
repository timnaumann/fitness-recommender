import React from 'react'
import PropTypes from 'prop-types'
import * as S from './StandardButton.style'

const StandardButton = (props) => (
  <S.StandardButton onClick={props.onClick} className={props.className}>
    {props.label}
  </S.StandardButton>
)

StandardButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
}

StandardButton.defaultProps = {
  onClick: () => {},
  label: '',
}

export default StandardButton
