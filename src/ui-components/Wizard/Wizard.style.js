import styled from 'styled-components'
import * as bp from '@breakpoints'

const baseClass = 'wizard'
export const Wizard = styled.div.attrs({ className: baseClass })`
  height: 100vh;
  position: relative;
  overflow: hidden;
`

export const WizardWrapper = styled.div.attrs({
  className: `${baseClass}__wrapper`,
})`
  height: 100%;
  width: 100%;
  padding: 0 20px 0 20px;

  @media ${bp.mediumUp} {
    padding: 20px 0 0 0;
    box-sizing: border-box;
  }

  @media ${bp.landscape(bp.mediumLow)} {
    padding: 15px 0 0 0;
  }
`

export const ContentWrapper = styled.div.attrs({
  className: `${baseClass}__content-wrapper`,
})`
  height: 100%;
  position: relative;
  border-left: ${props => props.theme.borderSpecs.default};
  border-right: 3px solid ${props => props.theme.colors.white};
  
  @media ${bp.mediumUp}, ${bp.landscape(bp.mediumLow)} {
    border: none;
  }
`

export const BrightnessWrapper = styled.div.attrs({
  className: `${baseClass}__brightness-wrapper`,
})`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -2;
  top: 0;
  background-color: rgba(10, 10, 10, 0.5);
`

export const WizardScrollableContent = styled.div.attrs({
  className: `${baseClass}__srollable-content`,
})`
  display: flex;
  flex-direction: column;

  padding: 0 50px 20px 50px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;

  @media ${bp.mediumUp} {
    padding: 0 180px 50px 220px;
    height: auto;
    overflow-y: unset;
  }
`

export const BodyBackGround = styled.div`
  position: absolute;
  height: 100%;
  width: auto;
  z-index: -2;
  filter: brightness(250%);
  margin: 0;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${props => props.theme.mobilePicturesMediaQuery} {
    width: 100%;
    object-position: 100%;
  }
`
