import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import * as S from './BoolQuestion.style'
import { SelectionNoButton, SelectionYesButton } from '@ui-components/Buttons'
import { useI18n } from "@store/store-hooks";

const BoolQuestion = React.memo((props) => {
  const i18n = useI18n()

  const [selection, setSelection] = useState(null)
  const [selectionDone, setSelectionDone] = useState(false)

  const yesAnswer = props.answers?.[0]
  const noAnswer = props.answers?.[1]

  const selectedAnswer = props.selectedAnswers?.[0]

  useEffect(() => {
    if (selectedAnswer) {
      if (selectedAnswer.id === yesAnswer.id) {
        setSelection(true)
      } else if (selectedAnswer.id === noAnswer.id) {
        setSelection(false)
      }
      setSelectionDone(true)
    } else {
      setSelection(null)
      setSelectionDone(false)
    }
  }, [selectedAnswer, yesAnswer, noAnswer])

  const setAnswer = useCallback((value) => {
      props.onAnswerSelection(answer.id, value)
    }, [props]
  )

  const onYesSelection = useCallback(() => {
    props.onAnswerSelection(yesAnswer.id, true)
    setSelection(true)

    setSelectionDone(true)
  }, [setAnswer, setSelectionDone, yesAnswer])

  const onNoSelection = useCallback(() => {
    props.onAnswerSelection(noAnswer.id, true)

    setSelection(false)
    setSelectionDone(true)
  }, [setAnswer, setSelectionDone, noAnswer])

  const subHeading = i18n?.generic?.diagnosisDecisionSubHeading

  return (
    <S.BoolQuestion>
      <S.Heading>{props.heading}</S.Heading>
      <S.SubHeading>{subHeading}</S.SubHeading>
      <S.SelectionItemWrapper>
        {
          yesAnswer && (<SelectionYesButton
            selectionDone={selectionDone}
            isSelected={selection}
            onClick={onYesSelection}
          />)
        }
        {
          noAnswer && (<SelectionNoButton
            selectionDone={selectionDone}
            isSelected={selection === false}
            onClick={onNoSelection}
          />)
        }
      </S.SelectionItemWrapper>
    </S.BoolQuestion>
  )
})

BoolQuestion.propTypes = {
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

BoolQuestion.defaultProps = {
  questionId: null,
  questionName: null,
  heading: '',
  answers: [],
  onAnswerSelection: null,
  selectedAnswers: null,
}

export default BoolQuestion
