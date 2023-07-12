import React from 'react'
import PropTypes from 'prop-types'
import * as S from './SelectionYesButton.style'

const SelectionYesButton = (props) => (
  <S.SelectionItemYes
    onClick={props.onClick}
    selectionDone={props.selectionDone}
    isSelected={props.isSelected}
    className={props.className}
  />
)

SelectionYesButton.propTypes = {
  onClick: PropTypes.func,
  selectionDone: PropTypes.bool,
  isSelected: PropTypes.bool,
}

SelectionYesButton.defaultProps = {
  onClick: () => {},
  selectionDone: false,
  isSelected: false
}

export default SelectionYesButton
