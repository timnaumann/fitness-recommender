import React from 'react'
import PropTypes from 'prop-types'
import * as S from './StandardButtonWithBackgroundDecoration.style'

const StandardButtonWithBackgroundDecoration = (props) => (
  <S.StandardButtonWithBackgroundDecoration onClick={props.onClick} className={props.className} href={props.href}>
    {props.label}
    <S.Background/>
  </S.StandardButtonWithBackgroundDecoration>
)

StandardButtonWithBackgroundDecoration.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  href: PropTypes.string
}

StandardButtonWithBackgroundDecoration.defaultProps = {
  onClick: () => {},
  label: '',
  href: ''
}

export default StandardButtonWithBackgroundDecoration
