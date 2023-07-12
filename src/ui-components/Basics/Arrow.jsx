import React from 'react'
import PropTypes from 'prop-types'

import * as S from './Arrow.style'

const Arrow = (props) => (
  <S.Arrow className={props.className}>
    <S.Body size={props.size} borderColor={props.color}/>
    <S.Head size={props.size} borderColor={props.color}/>
  </S.Arrow>
)

Arrow.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
}

Arrow.defaultProps = {
  className: '',
  size: '30px',
  color: null
}

export default Arrow
