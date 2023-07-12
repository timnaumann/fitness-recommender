import styled from 'styled-components'
import * as bp from '@breakpoints'

const baseClass = 'tile-wrapper'
export const TileWrapper = styled.div.attrs({ className: `${baseClass}` })`
  text-align: center;
  height: 100%;
  width: 100%;
`

export const TileHeading = styled.div.attrs({
  className: `${baseClass}__heading`,
})`
  ${(props) => props.theme.questionHeading}
`

export const Tiles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: row wrap;
  grid-gap: 5px;

  @media ${bp.largeUp} {
    grid-gap: 20px;
  }
`
