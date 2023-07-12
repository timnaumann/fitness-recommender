import * as S from './StandardSelect.style'
import React from 'react'
import PropTypes from 'prop-types'

const Select = (props) => {
  return (
    props.array[0] ? (
      <S.StandardSelect onChange={props.onChange} value={props.defaultValue}>
        {props.defaultOption === true && (
          <option value="Select option">Select option</option>
        )}
        {props.array &&
        props.array.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          )
        })}
      </S.StandardSelect>
    ) : null
  )
}

Select.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  onChange: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultOption: PropTypes.bool,
}
Select.defaultProps = {
  onChange: null,
  array: [],
  defaultValue: '',
  defaultOption: true,
}
export default Select
