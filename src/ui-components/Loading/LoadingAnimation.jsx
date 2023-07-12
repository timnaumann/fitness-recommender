import React from 'react'
import * as S from './LoadingAnimation.style'
import Image from '../Image/Image'
import { getImageURL } from "@api/api-helper";

const LoadingAnimation = () => {
  return (
    <S.LoadingAnimation>
      <S.LoadingBox>
        <S.AnimatedImage
          as={Image}
          src={getImageURL('dumbbell-min.webp')}
        >
        </S.AnimatedImage>
      </S.LoadingBox>
    </S.LoadingAnimation>)
}

export default LoadingAnimation
