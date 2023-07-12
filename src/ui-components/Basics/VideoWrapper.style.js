import styled from 'styled-components'
import { Image } from '@ui-components/Image'

import * as bp from '@breakpoints'
import { WhiteBackground } from '@ui-components/Basics/BackgroundDecoration.style'

const videoDimWidth = {
  default: '220px',
  tablet: '330px',
  desktop: '400px',
}
const videoDimheight = {
  default: '180px',
  tablet: '240px',
  desktop: '340px',
}
const videoPadding = {
  default: '2px',
  desktop: '10px',
}

const baseClass = 'video-wrapper'
export const VideoWrapper = styled.div.attrs({
  className: `${baseClass}`,
})`
  width: ${props => props.itemWidth.default || videoDimWidth.default};
  height: ${props => props.itemHeight.default || videoDimheight.default};
  
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.colors.white};
  cursor: pointer;

  @media ${bp.smallUp}, ${bp.landscape(bp.mediumLow)} {
    width: ${props => props.itemWidth.tablet || videoDimWidth.tablet};
    height: ${props => props.itemHeight.tablet || videoDimheight.tablet};
  }

  @media ${bp.mediumUp} {
    width: ${props => props.itemWidth.desktop || videoDimWidth.desktop};
    min-width: ${props => props.itemWidth.desktop || videoDimWidth.desktop};
    height: ${props => props.itemHeight.desktop || videoDimheight.desktop};

    :hover {
      box-shadow: 2px 2px 9px 6px #00000045;
    }
  }
}
`

export const ThumbnailWrapper = styled.div
  .attrs({
    className: `${baseClass}__thumbnail-wrapper`,
  })`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`


export const Thumbnail = styled(Image)
  .attrs({
    className: `${baseClass}__thumbnail`,
  })`
  width: 100%;
  height: 100%;
  padding: ${videoPadding.default};
  
  @media ${bp.smallUp}, ${bp.landscape(bp.mediumLow)} {
    // minus border
    padding: calc(${videoPadding.desktop} - 2px);
  }
`

export const DummyPlayButton =styled.div.attrs({
  className: `${baseClass}__dummy-play-button`,
})`
  position: absolute;
  margin: auto;
  border-right: 0 solid transparent;
  border-left: 35px solid white;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;

  @media ${bp.smallUp} {
    border-right: 0 solid transparent;
    border-left: 55px solid white;
    border-top: 35px solid transparent;
    border-bottom: 35px solid transparent;
  }
`

export const ItemSpinner = styled.div.attrs({
  className: `${baseClass}__spinner`,
})`
  position: absolute !important;
`

export const ItemVideo = styled.div.attrs({
  className: `${baseClass}__item-video`,
})`
  margin-top: 8px;
  width: calc(${props => props.itemWidth.default || videoDimWidth.default} - (2 * ${videoPadding.default}));
  height: calc(${props => props.itemHeight.default || videoDimheight.default} - (2 * ${videoPadding.default}));
  visibility: ${(props) => (props.showVideo ? 'visible' : 'hidden')};

  @media ${bp.smallUp} {
    width: calc(${props => props.itemWidth.tablet || videoDimWidth.tablet} - (2 * ${videoPadding.desktop}));
    height: calc(${props => props.itemHeight.tablet || videoDimheight.tablet} - (2 * ${videoPadding.desktop}));
  }

  @media ${bp.mediumUp} {
    width: calc(${props => props.itemWidth.desktop || videoDimWidth.desktop} - (2 * ${videoPadding.desktop})) ;
    height: calc(${props => props.itemHeight.desktop || videoDimheight.desktop} - (2 * ${videoPadding.desktop}));
  }

  @media ${bp.landscape(bp.mediumLow)} {
    width: calc(${props => props.itemWidth.tablet || videoDimWidth.tablet} - (2 * ${videoPadding.desktop}));
    height: calc(${props => props.itemHeight.tablet || videoDimheight.tablet} - (2 * ${videoPadding.desktop}));
  }
`

export const VideoWhiteBackground = styled(WhiteBackground).attrs({
  className: `${baseClass}__white-background`,
})`
`
