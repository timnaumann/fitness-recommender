import styled from 'styled-components'
import * as bp from '@breakpoints'
import { BackgroundDecoration } from '@ui-components/Basics/BackgroundDecoration.style'

const headerStyles = {
  default: {
    dim: '120px',
    padding: '0',
  },
  tablet: {
    dim: '120px',
    padding: '10px',
  },
  desktop: {
    dim: '190px',
    padding: '13px',
  },

  logo: {
    default: {
      dim: '110px',
      padding: '10px',
    },
    tablet: {
      dim: '130px',
      padding: '10px',
    },
    desktop: {
      dim: '160px',
      padding: '13px',
    }
  }
}

const baseClass = 'stage-heading'
export const StageHeading = styled.div.attrs({ className: baseClass })`
  width: 100%;
  transition: all .2s ease-in-out;

  @media ${bp.mediumUp} {
    border-top: ${props => props.theme.borderSpecs.desktop};
    border-bottom: ${props => props.theme.borderSpecs.desktop};

  }

  @media ${bp.landscape(bp.mediumLow)} {
    border-top: ${props => props.theme.borderSpecs.default};
    border-bottom: ${props => props.theme.borderSpecs.default};
  }
`

export const StageHeadingContent = styled.div.attrs({ className: `${baseClass}__content` })`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;

  grid-gap: 10px;

  @media ${bp.mediumUp}, ${bp.landscape(bp.mediumLow)} {
    flex-direction: row;
    grid-gap: 0;
  }
`

export const LogoWrapper = styled.button.attrs({ className: `${baseClass}__logo-wrapper` })`
  width: 100%;
  height: ${headerStyles.logo.default.dim};

  padding: 0 ${headerStyles.logo.default.padding} ${headerStyles.logo.default.padding} ${headerStyles.logo.default.padding};
  box-sizing: border-box;

  border-bottom: ${props => props.theme.borderSpecs.default};

  background-color: transparent;

  @media ${bp.mediumUp} {
    width: calc(${headerStyles.logo.desktop.dim} + ${headerStyles.logo.desktop.padding});
    min-width: calc(${headerStyles.logo.desktop.dim} + ${headerStyles.logo.desktop.padding});
    min-height: ${headerStyles.logo.desktop.dim};
    height: auto;

    padding: ${headerStyles.logo.desktop.padding} ${headerStyles.logo.desktop.padding} ${headerStyles.logo.desktop.padding} 0;

    border: none;
    border-right: 4px white solid;
  }

  @media ${bp.landscape(bp.mediumLow)} {
    width: calc(${headerStyles.logo.default.dim} + ${headerStyles.logo.default.padding});
    min-width: calc(${headerStyles.logo.default.dim} + ${headerStyles.logo.default.padding});
    min-height: ${headerStyles.logo.default.dim};
    height: auto;

    padding: ${headerStyles.logo.default.padding} ${headerStyles.logo.default.padding} ${headerStyles.logo.default.padding} 0;

    border: none;
    border-right: ${props => props.theme.borderSpecs.default};
  }
`

export const LogoContent = styled.div.attrs({ className: `${baseClass}__logo-content` })`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.div.attrs({ className: `${baseClass}__heading` })`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  max-width: 60px;
  max-height: 60px;

  @media ${bp.mediumUp} {
    max-width: 110px;
    max-height: 110px;
  }
`

export const HeadingWrapper = styled.div.attrs({ className: `${baseClass}__heading-wrapper` })`
  width: 100%;
  padding: ${headerStyles.default.padding};
  box-sizing: border-box;
  position: relative;

  @media ${bp.mediumUp} {
    order: 0;
    padding: ${headerStyles.desktop.padding} 0 ${headerStyles.desktop.padding} ${headerStyles.desktop.padding};
  }

  @media ${bp.landscape(bp.mediumLow)} {
    order: 0;
    max-height: ${headerStyles.tablet.dim};
    padding: ${headerStyles.tablet.padding} 0 ${headerStyles.tablet.padding} ${headerStyles.tablet.padding};
  }
`

export const RecommendationButtonWrapper = styled.div.attrs({ className: `${baseClass}__recommendation-button-wrapper` })`
`

export const HeadingContent = styled.div.attrs({ className: `${baseClass}__heading-content` })`
  width: 100%;
  height: 100%;
  position: relative;
  max-height: 110px;
  overflow: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${bp.largeUp} {
    max-height: 100%;
  }

  @media ${bp.mediumUp}, ${bp.landscape(bp.mediumLow)} {
    box-shadow: none;
    max-height: 100%;
  }

`

export const Heading = styled.span.attrs({ className: `${baseClass}__heading` })`
  color: ${(props) => props.theme.textColorPrimary};
  font-size: 22px;
  text-align: center;
  max-width: 600px;
  padding: 10px 15px 10px 15px;
  font-weight: 400;


  @media ${bp.smallUp} {
    font-size: 30px;
  }

  @media ${bp.mediumUp} {

    font-size: 45px;
    max-width: 800px;
  }

  @media ${bp.largeUp} {
    line-height: 55px;
    margin-left: -${headerStyles.logo.desktop.dim};
  }
`

export const HeadingBackground = styled(BackgroundDecoration)`
  mix-blend-mode: multiply;
  backdrop-filter: brightness(80%);
  display: none;

  @media ${bp.mediumUp}, ${bp.landscape(bp.mediumLow)} {
    display: block;
  }
`

export const LogoBackground = styled(BackgroundDecoration)`
`
