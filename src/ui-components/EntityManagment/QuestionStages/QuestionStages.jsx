import React from 'react'
import * as S from '@ui-components/EntityManagment/QuestionStages/QuestionStages.style'
import { useSortedQuestionStages } from '@store/store-hooks'
import AddQuestionStage
  from '@ui-components/EntityManagment/QuestionStages/AddQuestionStage/AddQuestionStage'

import EntityTableComponent from '@ui-components/Table/EntityTableComponent'

const QuestionStages = () => {
  const questionStages = useSortedQuestionStages()

  return (
    <S.Wrapper>
      <EntityTableComponent
        entityToDisplay={questionStages}
        entityname={'questionstages'}
      />
      <AddQuestionStage qStages={questionStages}/>
    </S.Wrapper>
  )
}

const exportResult = {
  name: 'questionStages',
  Component: QuestionStages,
}

export default exportResult
