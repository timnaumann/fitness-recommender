import React, { useCallback, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import * as S from './Video.style'
import YouTube from 'react-youtube'
import { trackVideoPlayed } from '@ga-tracking/googleanalytics-helper'

const Video = (props) => {
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    props.stopVideo && player.stopVideo()
  }, [props.stopVideo])

  const onReady = useCallback((event) => {
    props.onReady()

    setPlayer(event.target)
    event.target.playVideo()
  }, [player])

  const onPlay = useCallback(() => {
    trackVideoPlayed(props.src)
  }, [props])

  return (
    <S.Video
      as={YouTube}
      videoId={props.src && getYoutubeVideoIdFromUrl(props.src)}
      className={props.className}
      onReady={onReady}
      onPlay={onPlay}
      opts={
        {
          playerVars: {
            autoplay: 1,
            ...props.src && { ...getVideoParametersFromUrl(props.src) }
          }
        }
      }
    />
  )
}

const getYoutubeVideoIdFromUrl = (url) => {
  if (url.includes('?')) {
    return url.match(/(?:\/)[^\/]*(?=[\?])/)
      .pop().replace("/", "")
  }

  return url.split('/')
    .pop()
}

const getVideoParametersFromUrl = (url) => {
  let parameterObj = {}

  if (url.includes('?')) {
    const parameterString = url.split('?')
      .pop()

    parameterString.split('&')
      .forEach(paramString => {
        const param = paramString.split('=')
        const key = param && param.length > 1 && param?.[0]
        if (key) {
          parameterObj[key] = param && param.length === 2 && parseInt(param?.[1])
        }
      })
  }

  return parameterObj
}

Video.propTypes = {
  src: PropTypes.string,
  onReady: PropTypes.func,
  className: PropTypes.string,
  stopVideo: PropTypes.bool,
}

Video.defaultProps = {
  src: '',
  onReady: null,
  className: '',
  stopVideo: null,
}

export default Video
