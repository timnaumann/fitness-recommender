import React, { useContext, useEffect } from 'react'
import { useCategories, useSelectedCategoryId, useSessionData } from '@store/store-hooks'
import { CategorySelection } from '@ui-components/Questions'
import { Stage } from '@ui-components/Pages/QuestionsStage'
import { useSetSelectedUserCategory } from '@container-components/container-hooks'
import { CategoriesContext } from '@store/categories'
import CategoriesActions from '../store/categories/CategoriesActions'

const CategorySelectionContainer = () => {
  const selectedCategory = useSelectedCategoryId()
  const categories = useCategories()
  const onCategorySelection = useSetSelectedUserCategory()

  const sessionData = useSessionData()
  const [, dispatchCategoryAction] = useContext(CategoriesContext)

  useEffect(() => {
    const { selectedCategoryId } = sessionData
    dispatchCategoryAction(CategoriesActions.setSelectedCategory(selectedCategoryId))
  }, [])

  return (
    <Stage>
      <CategorySelection
        selectedCategoryId={selectedCategory}
        categories={categories}
        onCategorySelection={onCategorySelection}
      />
    </Stage>
  )
}

CategorySelectionContainer.propTypes = {}

CategorySelectionContainer.defaultProps = {}

export default CategorySelectionContainer
