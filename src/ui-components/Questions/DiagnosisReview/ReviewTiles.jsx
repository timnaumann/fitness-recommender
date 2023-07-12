import React from 'react'
import PropTypes from 'prop-types'

import * as S from './ReviewTiles.style'
import ReviewTile from '@ui-components/Questions/DiagnosisReview/ReviewTile'

const ReviewTiles = React.memo((props) => {
  return (
    <S.ReviewTiles>
      {
        props.items.map(i => (
          <ReviewTile
            key={i.id}
            label={i.label}
            isSelected={props.selectedAnswerId === i.id}
            onClick={() => props.onTileClick(i.id)}
          />
        ))
      }
    </S.ReviewTiles>
  )
})

ReviewTiles.propTypes = {
  selectedAnswerId: PropTypes.number,
  onTileClick: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  })),
}

ReviewTiles.defaultProps = {
  selectedAnswerId: null,
  onTileClick: null,
  items: []
}

export default ReviewTiles
