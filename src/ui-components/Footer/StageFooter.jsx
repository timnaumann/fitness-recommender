import React from 'react'
import PropTypes from 'prop-types'

import * as S from './StageFooter.style'
import Footer from '@ui-components/Footer/Footer'

export const StageFooter = () => {
  return (
    <S.StageFooterWrapper>
      <S.StageFooter as={Footer}/>
    </S.StageFooterWrapper>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}

Footer.defaultProps = {
  className: '',
}

export default Footer
