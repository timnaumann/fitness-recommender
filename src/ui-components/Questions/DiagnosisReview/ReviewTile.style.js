import styled, { css } from 'styled-components'
import * as bp from '@breakpoints'
import { BackgroundDecoration } from '@ui-components/Basics/BackgroundDecoration.style'
import { darken } from 'polished'

const tileSelected = css`
  box-shadow: 2px 2px 9px 6px #00000080;
  background-color: ${(props) => darken(0.3, props.theme.colors.turquoise)};
  border-color: white;
`

const baseClass = 'review-tile'
export const ReviewTile = styled.div.attrs({ className: `${baseClass}` })`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;

  color: ${(props) => props.theme.textColorPrimary};

  cursor: pointer;

  border: 2px solid white;

  ${(props) => (props.isSelected ? tileSelected : false)};
  ${(props) => props.theme.transitionAll};
  
  &:hover {
    ${(props) => props.theme.highlightShadow};
    box-shadow: 2px 2px 9px 6px #00000080;
    border: 2px solid white;
  }
`

export const BackgroundTileDecoration = styled(BackgroundDecoration)`
  background-color: transparent;

  ${(props) => (props.isSelected ? tileSelected : false)}
`

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
