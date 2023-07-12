import React from 'react'
import PropTypes from 'prop-types'

import * as S from './PanelWrapper.style'
import DescriptionPanel from '@ui-components/Questions/DiagnosisTest/DescriptionPanel'

const PanelWrapper = React.memo((props) => {
  return (
    <S.PanelWrapper>
      {props.answers.map((answer, index) => {
        const selectedAnswer = props.selectedAnswers.find(a => a.id === answer.id)
        const selectedValue = selectedAnswer && selectedAnswer.value

        return (
          <S.Content key={index}>
            <DescriptionPanel
              key={answer.id}
              questionName={props.questionName}
              answerName={answer.name}
              description={answer.description}
              onAnswerSelection={(value) =>
                props.onAnswerSelection(answer.id, value)
              }
              heading={answer.label}
              source={answer.sourceUrl}
              position={index + 1}
              selectedValue={selectedValue}
            />
            {index !== props.answers.length - 1 && <S.Separator key={index}/>}
          </S.Content>
        )
      })}
    </S.PanelWrapper>
  )
})

PanelWrapper.propTypes = {
  questionId: PropTypes.number,
  questionName: PropTypes.string,
  heading: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.object),
  onAnswerSelection: PropTypes.func,
  selectedAnswers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.number,
  })),
}

PanelWrapper.defaultProps = {
  questionId: null,
  questionName: null,
  heading: '',
  answers: [],
  onAnswerSelection: null,
  selectedAnswers: null,
}

export default PanelWrapper
