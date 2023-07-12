import React from 'react'
import * as S from './Answers.style'
import { useAnswers, useQuestions } from '@store/store-hooks'
import { AddAnswers } from '@ui-components/EntityManagment/Answers/AddAnswer'
import EntityTableComponent from '@ui-components/Table/EntityTableComponent'

const Answers = () => {
  const questions = useQuestions()
  const answers = useAnswers()

  const answersEnrichedByQuestions = answers
  answersEnrichedByQuestions.forEach((answer) => {
    if (Array.isArray(answer.questionId)) {
    } else {
      answer.questionId = [
        answer.questionId,
        questions.find((e) => e.id === answer.questionId)?.name,
      ]
    }
  })

  return (
    <S.Answers>
      <EntityTableComponent
        entityToDisplay={answersEnrichedByQuestions}
        entityname={'Answers'}
      />
      <AddAnswers answers={answers} questions={questions}/>
    </S.Answers>
  )
}
const exportResult = {
  name: 'answers',
  Component: Answers,
}

export default exportResult
