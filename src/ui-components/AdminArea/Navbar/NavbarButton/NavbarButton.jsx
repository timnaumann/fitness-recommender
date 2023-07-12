import React from 'react'
import PropTypes from 'prop-types'

import * as S from './NavbarButton.style'

const NavbarButton = (props) => (
  <S.Button onClick={props.onClick}>
    <S.NavTitle>{props.name}</S.NavTitle>
  </S.Button>
)

NavbarButton.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
}
NavbarButton.defaultProps = {
  onClick: () => {},
  name: 'Name undefined',
}

export default NavbarButton
