import styled from 'styled-components'
import * as bp from '@breakpoints'
import { StandardButtonWithBackgroundDecoration } from '@ui-components/Buttons'
import { BackgroundDecoration } from '@ui-components/Basics/BackgroundDecoration.style'

const baseClass = 'teaser'
export const Teaser = styled.div.attrs({ className: baseClass })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px;
  grid-gap: 10px;
  user-select: none;

  @media ${bp.landscape(bp.mediumLow)} {
    padding: 15px;
  }
`

const TeaserHeading = styled.h1`
  color: white;
  text-align: center;
  text-shadow: 3px 4px 2px rgba(0, 0, 0, 0.25);
`

export const TeaserSubHeadingLabel = styled(TeaserHeading)
    .attrs({ className: `${baseClass}__sub-heading` })`

  font-size: 18px;
  font-weight: 500;

  box-sizing: content-box;
  text-transform: capitalize;

  @media ${bp.smallUp}, ${bp.landscape(bp.mediumLow)} {
    font-size: 25px;
  }

  @media ${bp.mediumUp} {
    font-size: 35px;
  }

  @media ${bp.largeUp} {
    font-size: 40px;
  }
`

export const TeaserHeadingLabel = styled(TeaserHeading)
    .attrs({ className: `${baseClass}__heading-label` })`
  text-transform: uppercase;
  font-size: 25px;
  font-weight: bold;

  @media ${bp.smallUp} {
    font-size: 30px;
  }

  @media ${bp.mediumUp} {
    font-size: 40px;
  }

  @media ${bp.largeUp} {
    font-size: 43px;
    letter-spacing: 0.5px;
  }
`

export const TeaserStartButton = styled(StandardButtonWithBackgroundDecoration)
    .attrs({ className: `${baseClass}__button` })`
  align-self: center;
  justify-self: center;

  font-size: 22px;
  letter-spacing: 1.6px;
  user-select: none;
  padding: 15px;
  font-weight: bold;
  max-width: 300px;
  margin-top: 30px;

  @media ${bp.smallUp} {
    font-size: 35px;
    padding: 40px;
    max-width: 350px;
  }

  @media ${bp.largeUp} {
    font-size: 65px;
    line-height: 65px;
    max-width: 500px;
  }

  @media ${bp.landscape(bp.mediumLow)} {
    font-size: 22px;
    padding: 15px;
    margin-top: 0;
  }

  ${BackgroundDecoration} {
    backdrop-filter: brightness(150%);
    mix-blend-mode: overlay;
  }
`

export const TeaserBackground = styled(BackgroundDecoration)
    .attrs({
        className: `${baseClass}__teaser-background`,
    })`
  backdrop-filter: brightness(100%);
  background-color: ${(props) => props.theme.colors.turquoise};
  mix-blend-mode: multiply;
`


export const SeoTag = styled.a`
  position: absolute;
  opacity: 0;
`

