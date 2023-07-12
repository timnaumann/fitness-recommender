import React, { useEffect, useState } from 'react'
import * as S from './Navbar.style'
import { NavbarWrapper } from './Navbar.style'
import NavbarButton from '@ui-components/AdminArea/Navbar/NavbarButton/NavbarButton'
import * as Components from '@ui-components/EntityManagment'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  const [scrolled, setScrolled] = useState(false)
  let navbarStyle = 'normalNavbar'

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  if (scrolled) {
    navbarStyle = 'scrolledNavbar'
  }

  const createButtons = () => {
    return Object.values(Components)
      .map((componentPerButton) => {
        const ComponentToRender = componentPerButton.Component
        return (
          <NavbarButton
            key={componentPerButton.name}
            name={componentPerButton.name}
            git
            p
            onClick={() => props.setEntityComponent(<ComponentToRender/>)}
          />
        )
      })
  }

  return (
    <S.MainNavbar>
      <S.Icon className={navbarStyle} onClick={scrollTop}>
        <FontAwesomeIcon icon="guitar" size="2x" spin/>
      </S.Icon>
      <NavbarWrapper>{createButtons()}</NavbarWrapper>
    </S.MainNavbar>
  )
}

Navbar.propTypes = {
  setEntityComponent: PropTypes.func,
}
Navbar.defaultProps = {
  setEntityComponent: null,
}

export default Navbar
