import React from 'react'
import PropTypes from 'prop-types'
import * as S from './RecommendationButton.style'
import Spinner from '@ui-components/Basics/Spinner'

const RecommendationButton = (props) => {
  return (
    <S.RecommendationButton onClick={props.onClick} className={props.className}>
      <S.Content>
        {props.contentIsLoading ? (
          <Spinner contentIsLoading={props.contentIsLoading}/>
        ) : (
          props.label
        )}
      </S.Content>
    </S.RecommendationButton>
  )
}

RecommendationButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  contentIsLoading: PropTypes.bool,
}

RecommendationButton.defaultProps = {
  onClick: () => {},
  label: '',
  contentIsLoading: false,
}

export default RecommendationButton
