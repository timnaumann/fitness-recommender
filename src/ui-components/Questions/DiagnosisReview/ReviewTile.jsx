import React from 'react'
import PropTypes from 'prop-types'

import * as S from './ReviewTile.style'

const ReviewTile = React.memo((props) => {
  return (
    <S.ReviewTile onClick={props.onClick} isSelected={props.isSelected}>
      <S.BackgroundTileDecoration isSelected={props.isSelected}/>
      <S.TileText>{props.label}</S.TileText>
    </S.ReviewTile>
  )
})

ReviewTile.propTypes = {
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  label: PropTypes.string,
}

ReviewTile.defaultProps = {
  onClick: null,
  isSelected: false,
  label: '',
}

export default ReviewTile
