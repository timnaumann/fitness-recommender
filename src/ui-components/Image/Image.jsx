import React from 'react'
import PropTypes from 'prop-types'

const Image = React.memo((props) => {
  return (
    <img
      src={props.src}
      srcSet={props.srcSet}
      sizes={props.sizes}
      className={props.className}
      draggable="false"
      alt={''}
      onLoad={props.onLoad}
    />
  )
})

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  onLoad: PropTypes.func,
}

Image.defaultProps = {
  className: '',
  src: '',
  onLoad: null,
}

export default Image
