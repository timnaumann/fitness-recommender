import React from 'react'
import PropTypes from 'prop-types'
import logo from '@images/logo_next-level.svg'

import * as S from './Logo.style'

const Logo = (props) => (
  <S.Logo className={props.className}>
    <S.LogoImage src={logo}/>
  </S.Logo>
)

Logo.propTypes = {
  className: PropTypes.string,
}

Logo.defaultProps = {
  className: '',
}

export default Logo
