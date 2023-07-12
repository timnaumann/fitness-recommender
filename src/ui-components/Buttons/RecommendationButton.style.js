import styled from 'styled-components'
import * as bp from '@breakpoints'

import { StandardButton } from '@ui-components/Buttons/StandardButton.style'

const buttonDim = {
  default: '100px',
  tablet: '100%',
  desktop: '100px'
}

const baseClass = 'recommendation-button'
export const RecommendationButton = styled(StandardButton)
  .attrs({
    className: `${baseClass}`,
  })`
  width: 100%;
  height: ${buttonDim.default};

  position: relative;

  max-width: 100%;
  max-width: 350px;

  font-size: 25px;

  opacity: 1;
  background-color: transparent;

  border: none;

  :hover {
    border: none;
  }

  @media ${bp.mediumUp} {
    padding: 0;
    height: ${buttonDim.tablet};
    max-width: 380px;
    border: 1px solid white;
    font-size: 35px;

    :hover {
      box-shadow: 2px 2px 9px 6px #00000045;
      border: 1px solid white;

      :after {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        backdrop-filter: brightness(100%);
        background-color: ${props => props.theme.colors.turquoise};
        mix-blend-mode: overlay;
      }
    }
  }

  @media ${bp.landscape(bp.mediumLow)} {
    max-width: 400px;
    font-size: 25px;
  }

  @media ${bp.largeUp} {
    height: ${buttonDim.desktop};
    max-width: 400px;
    font-size: 35px;
  }
`

export const Content = styled.div.attrs({ className: `${baseClass}__content` })`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${buttonDim.default};

  position: relative;
  padding: 15px;
  box-sizing: border-box;

  ${(props) => props.theme.highlightShadow};
  border: none;
  background-color: rgba(10, 10, 10, 0.5);

  @media ${bp.mediumUp} {
    border: none;
    box-shadow: none;
    background-color: transparent;
    height: ${buttonDim.tablet};
  }

  @media ${bp.largeUp} {
    height: ${buttonDim.desktop};
  }
`
