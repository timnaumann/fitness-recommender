const Actions = {
  MOVE_TO_NEXT_SLIDE: 'MOVE_TO_NEXT_SLIDE',
}

const CarouselActions = {
  moveToNextSlide: (toNextSlide) => ({
    type: Actions.MOVE_TO_NEXT_SLIDE,
    toNextSlide
  }),

  getMoveToNextSlideAction: () => Actions.MOVE_TO_NEXT_SLIDE
}

export default CarouselActions
