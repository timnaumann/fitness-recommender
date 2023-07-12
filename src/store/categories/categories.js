import React from 'react'
import CategoriesActions from './CategoriesActions'

export const CategoriesContext = React.createContext()

const categoriesReducer = (state, action) => {
  switch (action.type) {
    case CategoriesActions.getSetSelectedCategory(): {
      return {
        ...state,
        selectedCategory: action.categoryId,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

export const CategoriesProvider = (props) => {
  const [state, dispatch] = React.useReducer(categoriesReducer, [])
  const value = React.useMemo(() => [state, dispatch], [state])
  return <CategoriesContext.Provider value={value} {...props} />
}
