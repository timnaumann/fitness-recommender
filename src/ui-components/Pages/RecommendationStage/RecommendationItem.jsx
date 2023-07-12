import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import * as S from './RecommendationItem.style'
import VideoWrapper from '@ui-components/Basics/VideoWrapper'
import { useI18n } from '@store/store-hooks'

const RecommendationItem = React.memo((props) => {
  const i18n = useI18n()
  const [loadVideo, setLoadVideo] = useState(null)

  useEffect(() => {
    // to make the transition between stages in the carousel smoother
    if (loadVideo === true && props.currentlyVisible === false) {
      setTimeout(() => setLoadVideo(props.currentlyVisible), 300)
    } else {
      setLoadVideo(props.currentlyVisible)
    }
  }, [props.currentlyVisible])

  const sourceUrl = props.recommendation.sourceUrl

  return sourceUrl ? (
    <S.RecommendationItem>

      <S.Wrapper>
        <S.VideoWrapper
          as={VideoWrapper}
          sourceUrl={sourceUrl}
          shouldLoadVideo={loadVideo}
          width={{
            default: '220px',
            tablet: '330px',
            desktop: '400px',
          }}
          height={{
            default: '180px',
            tablet: '240px',
            desktop: '340px',
          }}
        >
        </S.VideoWrapper>
        {props.recommendation.tool &&
        (<S.Tools>{i18n?.generic?.recommendationToolLabel}: {props.recommendation.tool}</S.Tools>)
        }
      </S.Wrapper>

      <S.TextWrapper>
        <S.ExplanationText>{props.recommendation.description}</S.ExplanationText>
      </S.TextWrapper>

    </S.RecommendationItem>
  ) : null
})

RecommendationItem.propTypes = {
  recommendation: PropTypes.object,
  currentlyVisible: PropTypes.bool,
}

RecommendationItem.defaultProps = {
  recommendation: null,
  currentlyVisible: true,
}

export default RecommendationItem
