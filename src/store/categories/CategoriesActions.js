const Actions = {
  SET_SELECTED_CATEGORY: 'SET_SELECTED_CATEGORY',
}

const CategoriesActions = {
  setSelectedCategory: (categoryId) => ({
    type: Actions.SET_SELECTED_CATEGORY,
    categoryId,
  }),

  getSetSelectedCategory: () => Actions.SET_SELECTED_CATEGORY,
}

export default CategoriesActions
