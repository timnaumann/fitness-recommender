import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { useAnswers, useSessionData, useUiComponent } from '@store/store-hooks'
import { useSetUserProfile } from '@container-components/container-hooks'
import DiscreteSlider from '@ui-components/Questions/DiscreteSlider'

const QuestionContainer = (props) => {
  const answers = useAnswers()
  const sideEffects = useSessionData()?.sideEffects
  const setUserProfile = useSetUserProfile()
  const userAnswers = useSessionData()?.userAnswers
  const [selectedAnswers, setSelectedAnswers] = useState([])

  const answersOfQuestion = useMemo(() => getAnswersOfQuestion(props.question.id, answers), [props.question.id, answers])

  const visible = sideEffects?.questions?.[props.question.name]?.visible ?? true

  useEffect(() => {
    if (userAnswers) {
      const selectedAnswers = answersOfQuestion.filter(a => {
        const value = userAnswers[a.id]
        return value === 1 || value === 0
      })
        .map(a => {
          const value = userAnswers[a.id]
          return {
            id: a.id,
            value
          }
        })
      setSelectedAnswers(selectedAnswers)
    }
  }, [userAnswers, answersOfQuestion])

  const QuestionComponent = useUiComponent(
    props.question.widgetType,
    DiscreteSlider
  )

  return (visible ? <QuestionComponent
      questionId={props.question.id}
      questionName={props.question.name}
      answers={answersOfQuestion}
      onAnswerSelection={setUserProfile}
      heading={props.question.label}
      selectedAnswers={selectedAnswers}
    /> : null
  )
}

const getAnswersOfQuestion = (questionId, answers) =>
  answers.filter((a) => a.questionId === questionId)

QuestionContainer.propTypes = {
  question: PropTypes.object,
}

QuestionContainer.defaultProps = {
  question: {},
}

export default QuestionContainer
