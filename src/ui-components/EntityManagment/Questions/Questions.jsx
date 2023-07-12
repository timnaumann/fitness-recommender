import React from 'react'
import * as S from '@ui-components/EntityManagment/Questions/Questions.style'
import { useCategories, useQuestions, useSortedQuestionStages, } from '@store/store-hooks'
import AddQuestion from './AddQuestion/AddQuestion'
import EntityTableComponent from '@ui-components/Table/EntityTableComponent'

const Questions = () => {
  let questionStages = useSortedQuestionStages()
  const questions = useQuestions()
  const categories = useCategories()

  return (
    <S.Wrapper>
      <EntityTableComponent
        entityname={'questions'}
        entityToDisplay={questions}
      />
      <AddQuestion
        qStages={questionStages}
        questions={questions}
        categories={categories}
      />
    </S.Wrapper>
  )
}

const exportResult = {
  name: 'questions',
  Component: Questions,
}

export default exportResult
