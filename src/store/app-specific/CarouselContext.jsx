import React, { useCallback } from 'react'
import CarouselActions from '@store/app-specific/CarouselContextActions'

export const CarouselContext = React.createContext({})

const carouselReducer = (state, action) => {
  switch (action.type) {
    case CarouselActions.getMoveToNextSlideAction():
      return {
        ...state,
        toNextSlide: action.toNextSlide,
      }
    default: {
      throw new Error(`Unhandled type: ${action.type}`)
    }
  }
}

export const CarouselContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(carouselReducer, {})
  const value = React.useMemo(() => [state, dispatch], [state])
  return (<CarouselContext.Provider value={value} {...props}/>)
}

export const useMoveToNextSlide = () => {
  const [, dispatch] = React.useContext(CarouselContext)
  return useCallback(() => {
    dispatch(CarouselActions.moveToNextSlide(true))
  }, [dispatch])
}
