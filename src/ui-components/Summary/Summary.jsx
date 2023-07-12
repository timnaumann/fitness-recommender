import React from 'react'
import PropTypes from 'prop-types'

import * as S from './Summary.style'

import RecommendationButtonContainer from '@container-components/RecommendationButtonContainer'

const Summary = React.memo((props) => {
  return (
    <S.Summary>
      <S.ContentWrapper>
        <RecommendationButtonContainer/>
        <S.Tests>
          {props.diagnosisTests.map((test, index) => (
            <S.TestContent key={test.label}>
              <S.TestLabel>{test.label}</S.TestLabel>
              {
                test.value ? (
                  <S.TestResultYesButton key={index}/>
                ) : (
                  <S.TestResultNoButton key={index}/>
                )
              }
            </S.TestContent>

          ))}
        </S.Tests>

      </S.ContentWrapper>
    </S.Summary>
  )
})

Summary.propTypes = {
  diagnosisTests: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.bool.isRequired,
    })
  ).isRequired,
  nextPhase: PropTypes.string,
}

Summary.defaultProps = {
  diagnosisTests: [],
  nextPhase: '',
}

export default Summary
