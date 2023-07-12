import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import ReactBootstrapCarousel from 'react-bootstrap-carousel'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'
import PropTypes from 'prop-types'
import Arrow from '@ui-components/Basics/Arrow'
import * as ReactDOM from 'react-dom'
import {
  registerOnSwipeCallbacks,
  unregisterOnSwipeCallbacksOfElement
} from '@ui-components/helper/swipe'

import * as S from './Carousel.style'
import { CarouselContext } from '@store/app-specific/CarouselContext'
import CarouselActions from '@store/app-specific/CarouselContextActions'

const Carousel = props => {
  const [{ toNextSlide }, dispatchCarouselAction] = useContext(CarouselContext)

  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  const onSelectChange = useCallback((index) => {
    setCurrentIndex(index)
    props.onSelectChange(index)
  }, [setCurrentIndex, props.onSelectChange])

  useEffect(() => {
    if (toNextSlide) {
      carouselRef.current.slideNext()
      dispatchCarouselAction(CarouselActions.moveToNextSlide(false))
    }
  }, [toNextSlide])

  useEffect(() => {
    const carouselNode = ReactDOM.findDOMNode(carouselRef.current)
    // unregisterOnSwipeCallbacksOfElement(carouselNode)
    // registerOnSwipeCallbacks(carouselNode,
    //   () => {
    //     canMoveToNextStage(currentIndex, props.children.length) && carouselRef.current.slideNext()
    //   },
    //   () => {
    //     canMoveToPreviousStage(currentIndex) && carouselRef.current.slidePrev()
    //   })
    //
    // return () => {
    //   unregisterOnSwipeCallbacksOfElement(carouselNode)
    // }
  }, [currentIndex, props.children.length])

  const children = React.Children.toArray(props.children)
    .filter((child) => child ? child : null)
    .map((c, index) => React.cloneElement(c,
      {
        currentlyVisible: index === currentIndex
      })
    )

  return (
    <S.Carousel
      showNextButton={props.showNavButtons || canMoveToNextStage(currentIndex, children.length)}
      showPreviousButton={props.showNavButtons || canMoveToPreviousStage(currentIndex)}
    >
      <ReactBootstrapCarousel
        ref={carouselRef}
        animation={true}
        autoplay={false}
        slideshowSpeed={2000}
        defaultActiveIndex={0}
        version={4}
        onSelect={onSelectChange}
        leftIcon={<S.CarouselLeftButton as={Arrow}/>}
        rightIcon={<S.CarouselRightButton as={Arrow}/>}
      >
        {children}
      </ReactBootstrapCarousel>
    </S.Carousel>
  )
}

const canMoveToNextStage = (currentIndex, totalAmountOfSlides) => currentIndex !== totalAmountOfSlides - 1
const canMoveToPreviousStage = (currentIndex) => currentIndex !== 0

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  onSelectChange: PropTypes.func,
  showNavButtons: PropTypes.bool,
}

Carousel.defaultProps = {
  children: null,
  onSelectChange: () => {},
  showNavButtons: false
}

export default Carousel
