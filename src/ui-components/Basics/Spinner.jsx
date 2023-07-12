import React from 'react'
import PropTypes from 'prop-types'

import * as S from './Spinner.style'

const Spinner = (props) =>
  props.contentIsLoading ? (
    <S.Spinner className={props.className}>
      <S.SpinnerFirstChild/>
      <S.SpinnerSecondChild/>
      <S.SpinnerThirdChild/>
      <S.SpinnerForthChild/>
    </S.Spinner>
  ) : null

Spinner.propTypes = {
  className: PropTypes.string,
  contentIsLoading: PropTypes.bool,
}

Spinner.defaultProps = {
  contentIsLoading: false,
  className: '',
}

export default Spinner
