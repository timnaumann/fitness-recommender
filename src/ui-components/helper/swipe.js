// http://www.javascriptkit.com/javatutors/touchevents2.shtml

const TOUCH_START = 'touchstart'
const TOUCH_MOVE = 'touchmove'
const TOUCH_END = 'touchend'

const eventListener = new WeakMap()
export const registerOnSwipeCallbacks = (el, onSwipeLeft = () => {}, onSwipeRight = () => {}) => {
  let startX
  let startY
  let distX
  let distY
  const threshold = 150 // required min distance traveled to be considered swipe
  const restraint = 100 // maximum distance allowed at the same time in perpendicular direction
  const allowedTime = 300 // maximum time allowed to travel that distance
  let elapsedTime
  let startTime

  const onTouchStart = (e) => {
    const touchobj = e.changedTouches[0]
    startX = touchobj.pageX
    startY = touchobj.pageY
    startTime = new Date().getTime() // record time when finger first makes contact with surface
  }

  const onTouchEnd = (e) => {
    const touchobj = e.changedTouches[0]
    distX = touchobj.pageX - startX
    distY = touchobj.pageY - startY
    elapsedTime = new Date().getTime() - startTime // get time elapsed

    if (elapsedTime <= allowedTime) { // first condition for awipe met
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if (distX < 0) {
          onSwipeLeft()
        } else {
          onSwipeRight()
        }
      }
    }
  }

  el.addEventListener(TOUCH_START, onTouchStart)
  // el.addEventListener(TOUCH_MOVE, onTouchMove)
  el.addEventListener(TOUCH_END, onTouchEnd)

  eventListener[el] = {
    [TOUCH_START]: onTouchStart,
    // [TOUCH_MOVE]: onTouchMove,
    [TOUCH_END]: onTouchEnd,
  }
}

export const unregisterOnSwipeCallbacksOfElement = (el) => {
  const scrollEventListener = eventListener[el]
  if (scrollEventListener) {
    el.removeEventListener(TOUCH_START, scrollEventListener[TOUCH_START])
    el.removeEventListener(TOUCH_MOVE, scrollEventListener[TOUCH_MOVE])
    el.removeEventListener(TOUCH_END, scrollEventListener[TOUCH_END])
  }
}
