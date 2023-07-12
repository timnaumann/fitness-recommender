import styled, { css } from 'styled-components'
import * as bp from '@breakpoints'
import { BackgroundDecoration } from '@ui-components/Basics/BackgroundDecoration.style'

const tileSize = {
  default: '130px',
  desktop: '170px',
}

const tileSelected = css`
  box-shadow: 2px 2px 9px 6px #00000045;

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    opacity: 45%;
    background-color: ${(props) => props.theme.colors.darkgreen};
  }
`

const baseClass = 'tile'
export const Tile = styled.div.attrs({ className: `${baseClass}` })`
  transition: all .2s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.textColorPrimary};

  width: ${tileSize.default};
  height: ${tileSize.default};
  cursor: pointer;

  border: 2px solid transparent;

  @media ${bp.largeUp} {
    width: ${tileSize.desktop};
    height: ${tileSize.desktop};
  }

  ${(props) => (props.isSelected ? tileSelected : false)}
  &:hover {
    ${(props) => props.theme.highlightShadow};
  }
`

export const BackgroundTileDecoration = styled(BackgroundDecoration)``

export const TileText = styled.div`
  user-select: none;
  padding: 15px;
  font-size: 1.5rem;
  font-weight: bold;
  bottom: 0;
  text-align: center;
  z-index: 1;

  @media ${bp.largeUp} {
    font-size: 2rem;
  }
`
