import styled from 'styled-components'
import { darken } from 'polished'
import * as bp from '@breakpoints'

const baseClass = 'image-tile-wrapper'
export const ImageTileWrapper = styled.div.attrs({ className: `${baseClass}` })`
  text-align: center;
  width: 100%;
  //max-width: 600px;
  padding: 0 20px 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;

  box-sizing: border-box;

  @media ${bp.mediumUp} {
    max-width: 100%;
  }
`

export const ImageTiles = styled.div.attrs({
    className: `${baseClass}__image-tiles`,
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;

  @media ${bp.mediumUp} {
    grid-gap: 25px;
  }

  @media ${bp.largeUp} {
    grid-gap: 30px;
  }

`

export const ImageDescriptionWrapper = styled.div`
  position: relative;
  max-width: 700px;
  user-select: none;
`

export const ImageDescription = styled.div``

export const ImageDescriptionBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${darken(0.1, '#0BA981')};
  mix-blend-mode: soft-light;
`
