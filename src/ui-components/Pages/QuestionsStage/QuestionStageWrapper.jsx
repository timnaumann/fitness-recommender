import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'

import StageHeading from '@ui-components/Pages/QuestionsStage/StageHeading'
import PropTypes from 'prop-types'

import * as S from './QuestionStageWrapper.style'
import { Footer } from '@ui-components/Footer'
import Carousel from '@ui-components/Basics/Carousel'

const QuestionStageWrapper = props => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <S.QuestionStageWrapper>
      <S.HeadingWrapper>
        <StageHeading heading={props.stageHeadings[currentIndex]}/>
      </S.HeadingWrapper>

      <S.Carousel
        as={Carousel}
        onSelectChange={(index) => setCurrentIndex(index)}
      >
        {props.children}
      </S.Carousel>

      <S.StageFooter
        as={Footer}
      />
    </S.QuestionStageWrapper>
  )
}

QuestionStageWrapper.propTypes = {
  stageHeadings: PropTypes.array
}

QuestionStageWrapper.defaultProps = {
  stageHeadings: []
}

export default QuestionStageWrapper
