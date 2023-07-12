import React from 'react'

import * as S from './EndgameWizard.style'

import Wizard from './Wizard'

const EndgameWizard = React.memo((props) => {
  return (
    <S.EndgameWizard
      as={Wizard}
    >
      {props.children}
    </S.EndgameWizard>
  )
})

EndgameWizard.propTypes = {}

EndgameWizard.defaultProps = {}

export default EndgameWizard
