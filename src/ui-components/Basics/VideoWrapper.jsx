import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import * as S from './VideoWrapper.style'
import Spinner from '@ui-components/Basics/Spinner'
import { getThumbnailUrlOfYoutubeVideo } from '@ui-components/Pages/RecommendationStage/helper'
import Video from '@ui-components/Basics/Video'

const VideoWrapper = (props) => {
  const [loadVideo, setLoadVideo] = useState(false)

  const [playVideo, setPlayVideo] = useState(false)
  const [stopVideo, setStopVideo] = useState(false)
  const [videoIsLoaded, setVideoIsLoaded] = useState(false)

  let thumbnailUrl =
    getThumbnailUrlOfYoutubeVideo(props.sourceUrl) ||
    props.sourceUrl

  return (
    <S.VideoWrapper
      className={props.className}
      itemWidth={props.width}
      itemHeight={props.height}
      onClick={() => {
        setLoadVideo(true)
        setPlayVideo(true)
      }}
    >
      <S.VideoWhiteBackground/>
      {loadVideo ? (
        <>
          <S.ItemVideo
            as={Video}
            key={props.sourceUrl}
            playVideo={playVideo}
            showVideo={videoIsLoaded}
            src={props.sourceUrl}
            onReady={() => {
              setVideoIsLoaded(true)
            }}
            itemWidth={props.width}
            itemHeight={props.height}
            stopVideo={stopVideo}
          />
          <S.ItemSpinner
            as={Spinner}
            contentIsLoading={!videoIsLoaded}
          />
        </>
      ) : (
        <S.ThumbnailWrapper>
          <S.DummyPlayButton/>
          <S.Thumbnail src={thumbnailUrl}/>
        </S.ThumbnailWrapper>
      )}
    </S.VideoWrapper>
  )
}

VideoWrapper.propTypes = {
  sourceUrl: PropTypes.string,
  shouldLoadVideo: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.shape({
    default: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string
  }),
  height: PropTypes.shape({
    default: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string
  })
}

VideoWrapper.defaultProps = {
  sourceUrl: '',
  shouldLoadVideo: false,
  className: '',
  width: {},
  height: {}
}

export default VideoWrapper
