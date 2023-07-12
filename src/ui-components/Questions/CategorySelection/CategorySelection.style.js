import styled from 'styled-components'
import * as bp from '@breakpoints'

const baseClass = 'category-selection'
export const CategorySelection = styled.div.attrs({ className: baseClass })`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;

  margin: 0 !important;
  grid-gap: 20px;

  @media ${bp.largeUp} {
    grid-gap: 0;
  }
`

export const Heading = styled.div.attrs({ className: `${baseClass}__heading` })`
  display: flex;
  flex-direction: column;
  //align-content: center;

  margin-top: 15px;
  font-size: 18px;
  order: 0;

  @media ${bp.smallUp} {
    font-size: 30px;
  }

  @media ${bp.mediumUp}, ${bp.landscape(bp.largeLow)} {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1400px;
    margin-top: 20px;
    font-size: 30px;
  }

  @media ${bp.largeUp} {
    font-size: 35px;
  }

  @media ${bp.landscape(bp.mediumLow)} {
    font-size: 25px;
    grid-gap: 10px;
  }
`

export const HeadingStep = styled.div.attrs({ className: `${baseClass}__heading-step` })`
  width: auto;

  display: flex;
  grid-gap: 10px;
  align-items: center;

  color: ${(props) => props.theme.textColorPrimary};

  @media ${bp.mediumUp} {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
`

export const HeadingSeparator = styled.div.attrs({ className: `${baseClass}__heading-separator` })`
  display: none;

  background-color: ${(props) => props.theme.textColorPrimary};
  min-width: 15px;
  height: 3px;
  margin: auto;

  @media ${bp.largeUp} {
    display: none;
  }
`

export const ImageTileWrapper = styled.div.attrs({ className: `${baseClass}__image-tile-wrapper` })`
  margin: auto;
  order: 1;

  @media ${bp.smallUp} {
    order: 0;
  }
`



