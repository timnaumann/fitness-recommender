import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as S from './TileWrapper.style'
import Tile from './Tile'

const TileWrapper = React.memo((props) => {
  const [activeAnswer, setActiveAnswer] = useState(null)

  const activateTile = (answerId) => {
    if (answerId !== activeAnswer) {
      setActiveAnswer(answerId)
      props.onAnswerSelection(answerId, true)
    } else {
      setActiveAnswer(null)
      props.onAnswerSelection(answerId, false)
    }
  }

  return (
    <S.TileWrapper>
      <S.TileHeading>{props.heading}</S.TileHeading>
      <S.Tiles>
        {props.answers.map((a) => {
          return (
            <Tile
              key={a.id}
              onClick={() => activateTile(a.id)}
              isSelected={activeAnswer === a.id}
              label={a.label}
              backgroundImage={a.sourceUrl}
            />
          )
        })}
      </S.Tiles>
    </S.TileWrapper>
  )
})

TileWrapper.propTypes = {
  heading: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.object),
  onAnswerSelection: PropTypes.func,
}

TileWrapper.defaultProps = {
  heading: '',
  answers: [],
  onAnswerSelection: null,
}

export default TileWrapper
