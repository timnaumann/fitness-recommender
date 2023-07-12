import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import * as S from './ExplanationDropDown.style'

const ExplanationDropDown = React.memo((props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const onClick = useCallback(() => {
    setIsExpanded(!isExpanded)
  }, [setIsExpanded, isExpanded])

  return (
    <S.ExplanationDropDown>
      <S.ExplanationDropDownHeading onClick={onClick} isExpanded={isExpanded}>
        {props.heading}
      </S.ExplanationDropDownHeading>

      <S.ExplanationDropDownContent isExpanded={isExpanded}>
        {props.description}
      </S.ExplanationDropDownContent>
    </S.ExplanationDropDown>
  )
})

ExplanationDropDown.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
}

ExplanationDropDown.defaultProps = {
  heading: '',
  description: '',
}

export default ExplanationDropDown
