import React from 'react'
import PropTypes from 'prop-types'

import * as S from './ImageTileWrapper.style'
import ImageTile from '@ui-components/Questions/CategorySelection/ImageTile'

const ImageTileWrapper = React.memo((props) => {
  const activateTile = (answerId) => {
    props.onCategorySelection(answerId)
  }
  return (
    <S.ImageTileWrapper>
      <S.ImageTiles>
        {props.categories.map((a) => {
          return (
            <ImageTile
              key={a.id}
              isSelected={props.selectedCategoryId === a.id}
              label={a.label}
              imageUrl={a.sourceUrl}
              onClick={() => activateTile(a.id)}
            />
          )
        })}
      </S.ImageTiles>
      <S.ImageDescriptionWrapper>
        <S.ImageDescriptionBackground/>
        <S.ImageDescription/>
      </S.ImageDescriptionWrapper>
    </S.ImageTileWrapper>
  )
})

ImageTileWrapper.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  onCategorySelection: PropTypes.func,
  selectedCategoryId: PropTypes.number,
}

ImageTileWrapper.defaultProps = {
  categories: [],
  onCategorySelection: null,
  selectedCategoryId: null
}

export default ImageTileWrapper
