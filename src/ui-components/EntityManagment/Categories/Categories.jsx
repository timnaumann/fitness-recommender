import React from 'react'
import * as S from './Categories.style'
import { useCategories, useQuestions } from '@store/store-hooks'

import CategoryInput from '@ui-components/EntityManagment/Categories/AddCategory/AddCategoryInput'
import EntityTableComponent from '@ui-components/Table/EntityTableComponent'

const Categories = () => {
  const questions = useQuestions()
  const categories = useCategories()

  return (
    <S.Categories>
      <EntityTableComponent
        entityname={'categories'}
        entityToDisplay={categories}
      />
      <CategoryInput categories={categories} questions={questions}/>
    </S.Categories>
  )
}

const exportResult = {
  name: 'categories',
  Component: Categories,
}

export default exportResult
