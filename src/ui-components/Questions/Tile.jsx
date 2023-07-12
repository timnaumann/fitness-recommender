import React from 'react'
import PropTypes from 'prop-types'

import * as S from './Tile.style'

const TileWrapper = React.memo((props) => {
  return (
    <S.Tile onClick={props.onClick} isSelected={props.isSelected}>
      <S.BackgroundTileDecoration/>
      <S.TileText>{props.label}</S.TileText>
    </S.Tile>
  )
})

TileWrapper.propTypes = {
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  backgroundImage: PropTypes.string,
}

TileWrapper.defaultProps = {
  onClick: null,
  isSelected: false,
  label: '',
  backgroundImage: '',
}

export default TileWrapper
