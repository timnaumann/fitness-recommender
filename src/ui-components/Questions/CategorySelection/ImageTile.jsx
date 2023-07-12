import React from 'react'
import PropTypes from 'prop-types'

import * as S from './ImageTile.style'

const TileWrapper = React.memo((props) => {
  return (
    <S.ImageTile onClick={props.onClick} isSelected={props.isSelected}>
      <S.BackgroundImage src={props.imageUrl} isSelected={props.isSelected}/>

      <S.ImageTileLabelWrapper>
        <S.ImageTileLabel>{props.label}</S.ImageTileLabel>
      </S.ImageTileLabelWrapper>
    </S.ImageTile>
  )
})

TileWrapper.propTypes = {
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  imageUrl: PropTypes.string,
}

TileWrapper.defaultProps = {
  onClick: null,
  isSelected: false,
  label: '',
  imageUrl: '',
}

export default TileWrapper
