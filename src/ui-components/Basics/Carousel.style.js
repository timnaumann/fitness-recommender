import styled, { css } from 'styled-components'
import * as bp from '@breakpoints'

const navigationButtonCss = css`
  background-image: none;
  height: 50px;
  margin: auto;

  @media ${bp.mediumUp} {
    mix-blend-mode: overlay;
    opacity: 0.85;

    :hover {
      mix-blend-mode: exclusion;
    }
  }
`

const baseClass = 'carousel'
export const Carousel = styled.div.attrs({ className: `${baseClass}` })`
  position: relative;
  height: 100%;
  overflow-y: hidden;

  @media ${bp.landscape(bp.mediumLow)} {
    padding: 0 15px 0 15px;
  }

  @media ${bp.mediumUp} {
    padding: 0 75px 0 75px;
  }

  .carousel {
    max-height: 100%;
    height: 100%;
    padding: 0 25px 0 25px;

    @media ${bp.mediumUp}, ${bp.landscape(bp.mediumLow)} {
      padding: 0 80px 0 80px;
    }
  }

  // hieght needed for scroll effect in stage
  .carousel-item, .carousel-inner {
    height: 100%;
  }

  .carousel .carousel-control-prev {
    display: ${(props) => (props.showPreviousButton ? 'flex' : 'none')};
    ${navigationButtonCss}
  }

  .carousel .carousel-control-next {
    display: ${(props) => (props.showNextButton ? 'flex' : 'none')};
    ${navigationButtonCss}
  }
`

export const CarouselLeftButton = styled.div.attrs({ className: `${baseClass}__carousel-button--left` })`
  transform: rotateY(180deg);
`

export const CarouselRightButton = styled.div.attrs({ className: `${baseClass}__carousel-button--left` })`

`
