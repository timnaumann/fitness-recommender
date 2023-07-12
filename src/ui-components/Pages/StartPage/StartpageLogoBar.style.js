import styled from 'styled-components'
import * as bp from '@breakpoints'
import { BackgroundDecoration } from '@ui-components/Basics/BackgroundDecoration.style'

const baseClass = 'logo-bar'
export const StartPageLogoBar = styled.div.attrs({ className: `${baseClass}` })`

  display: grid;
  justify-items: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;

  padding: 0 10px 10px 10px;
  box-sizing: border-box;

  @media ${bp.mediumUp} {
    padding: 0;
  }

  @media ${bp.landscape(bp.mediumLow)} {
    padding: 10px 10px 10px 0;
  }
`

export const Wrapper = styled.div.attrs({
  className: `${baseClass}__wrapper`,
})`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Background = styled(BackgroundDecoration).attrs({
  className: `${baseClass}__wrapper`,
})`
  backdrop-filter: brightness(175%); 
`

export const LogoWrapper = styled.div.attrs({
  className: `${baseClass}__logo-wrapper`,
})`
  position: relative;
  width: 120px;
  height: 120px;

  @media ${bp.smallUp}, ${bp.landscape(bp.mediumLow)} {
    width: 140px;
    height: 140px;
  }

  @media ${bp.mediumUp} {
    width: 230px;
    height: 230px;
  }
`

export const Logo = styled.div.attrs({
  className: `${baseClass}__logo`,
})`
`
