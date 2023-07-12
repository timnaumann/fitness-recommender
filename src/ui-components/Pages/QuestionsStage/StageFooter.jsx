import React from 'react'
import PropTypes from 'prop-types'
import { useI18n } from '@store/store-hooks'
import { useHistory } from 'react-router-dom'

import * as S from './StageFooter.style'

const StageFooter = (props) => {
  const genericI18n = useI18n()?.generic || {}
  const history = useHistory()
  const navigateTo = (path) => () => history.push(`/legal/${path}`)

  return (
    <S.StageFooter className={props.className}>
      <S.Item onClick={navigateTo('legal-notice')}>
        {genericI18n.legalNotice}
      </S.Item>
      <S.Item onClick={navigateTo('privacy-policy')}>
        {genericI18n.privacy}
      </S.Item>
    </S.StageFooter>
  )
}

StageFooter.propTypes = {
  className: PropTypes.string,
}

StageFooter.defaultProps = {
  className: '',
}

export default StageFooter
