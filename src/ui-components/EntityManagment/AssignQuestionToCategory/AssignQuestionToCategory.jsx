import { useCategories, useQuestions } from '@store/store-hooks'
import * as S
  from '@ui-components/EntityManagment/AssignQuestionToCategory/AssignQuestionToCategory.style'
import React, { useState } from 'react'
import ShowAllQuestionsWithCategories
  from '@ui-components/EntityManagment/AssignQuestionToCategory/ShowAllQuestionsWithCategories/ShowAllQuestionsWithCategories'
import SelectQuestionToCategory
  from '@ui-components/EntityManagment/AssignQuestionToCategory/SelectQuestionToCategory/SelectQuestionToCategory'

const AssignQuestionToCategory = () => {
  const questions = useQuestions()
  const categories = useCategories()
  const [assignment, setAssignment] = useState(null)

  return (
    <S.AssignQuestionToCategory>
      <ShowAllQuestionsWithCategories
        assignment={assignment}
        setAssignment={setAssignment}
        questions={questions}
        categories={categories}
      />
      <SelectQuestionToCategory
        assignment={assignment}
        questions={questions}
        categories={categories}
        setAssignment={setAssignment}
      />
    </S.AssignQuestionToCategory>
  )
}

const exportResult = {
  name: 'AssignQuestionToCategory',
  Component: AssignQuestionToCategory,
}

export default exportResult
