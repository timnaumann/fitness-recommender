import React from 'react'
import PropTypes from 'prop-types'
import { StageHeading } from '@ui-components/Pages/QuestionsStage'

import * as S from './ArbitraryLegalPage.style'

const ArbitraryLegalPage = (props) => {
  return (
    <S.ArbitraryLegalPage>
      <S.ArbitraryLegalPageStageHeading
        as={StageHeading}
        heading={props.heading}
      />
      <S.ContentWrapper>
        <S.Content dangerouslySetInnerHTML={{ __html: props.content }}/>
      </S.ContentWrapper>
    </S.ArbitraryLegalPage>
  )
}

ArbitraryLegalPage.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
}

ArbitraryLegalPage.defaultProps = {
  className: '',
  content: '',
  heading: ''
}

export default ArbitraryLegalPage
