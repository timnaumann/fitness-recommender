import styled, { css } from 'styled-components'
import { Image } from '@ui-components/Image'
import * as bp from '@breakpoints'

const tileSize = {
  default: '160px',
  tablet: '240px',
  desktop: '280px',
}
const tileSelected = css`
  box-shadow: 2px 2px 9px 6px #00000080;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${props => props.theme.stageLogoSecondBackgroundColor};
    mix-blend-mode: overlay;
    backdrop-filter: brightness(70%) blur(1px);
  }
`

const baseClass = 'image-tile'
export const ImageTile = styled.div.attrs({ className: baseClass })`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;

  width: ${tileSize.default};
  height: ${tileSize.default};
  cursor: pointer;

  border: 3px solid white;

  &:hover {
    box-shadow: 2px 2px 9px 6px #00000080;
  }

  @media ${bp.smallUp} {
    width: ${tileSize.tablet};
    height: ${tileSize.tablet};
  }

  @media ${bp.landscape(bp.mediumLow)}{
    width: ${tileSize.tablet};
    height: ${tileSize.tablet};
  }

  @media ${bp.largeUp} {
    width: ${tileSize.desktop};
    height: ${tileSize.desktop};
  }

  ${(props) => props.isSelected && tileSelected}
`

export const ImageTileLabelWrapper = styled.div.attrs({
  className: `${baseClass}__label-wrapper`,
})`
  position: absolute;
  width: 100%;
  backdrop-filter: blur(10px);
  bottom: 0;
  padding: 7px 0 7px 0;
  z-index: 1;

  @media ${bp.smallUp} {
    padding: 10px 0 10px 0;
  }
`

export const ImageTileLabel = styled.span.attrs({
  className: `${baseClass}__label`,
})`
  top: 0;
  right: 0;
  font-size: 14px;
  text-transform: uppercase;
  color: white;

  @media ${bp.mediumUp} {
    font-size: 20px;
  }
`

export const BackgroundImage = styled(Image)
  .attrs({
    className: `${baseClass}__background-image`,
  })`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;

  transition: transform 0.5s, filter 0.5s ease-in-out;
  filter: grayscale(100%);
  backdrop-filter: blur(10px);
  transform: ${(props) => (props.isSelected ? 'scale(1.1)' : 'scale(1.0)')};
`
