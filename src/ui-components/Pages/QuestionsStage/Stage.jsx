import React from 'react'
import * as S from './Stage.style'

const Stage = React.forwardRef((props, ref) => {
  return (
    <S.Stage ref={ref}>
      {props.children}
    </S.Stage>
  )
})

export default Stage
