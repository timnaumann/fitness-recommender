import React from 'react'
import PropTypes from 'prop-types'

import * as S from './SelectionNoButton.style'

const SelectionNoButton = (props) => (
  <S.SelectionItemNo
    onClick={props.onClick}
    selectionDone={props.selectionDone}
    isSelected={props.isSelected}
    className={props.className}
  />
)

SelectionNoButton.propTypes = {
  onClick: PropTypes.func,
  selectionDone: PropTypes.bool,
  isSelected: PropTypes.bool
}

SelectionNoButton.defaultProps = {
  onClick: () => {},
  selectionDone: false,
  isSelected: false
}

export default SelectionNoButton
