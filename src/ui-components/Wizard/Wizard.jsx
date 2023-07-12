import React from 'react'
import { getImageURL } from '@api/api-helper'
import PropTypes from 'prop-types'
import { useStopPageChangeAnimationOnMount } from '@container-components/container-helper'
import { Image } from '@ui-components/Image'

import * as S from './Wizard.style'
import * as bp from '@breakpoints'

const Wizard = React.memo((props) => {

  useStopPageChangeAnimationOnMount(Wizard.displayName)

  return (
    <S.Wizard className={props.className}>
      <picture>
        <source
          media={bp.mediumUp()}
          srcSet={getImageURL('background.webp')}
        />
        <source
          media={bp.landscape(bp.mediumLow)()}
          srcSet={getImageURL('background-tablet.webp')}
        />
        <S.BodyBackGround
          as={Image}
          src={getImageURL('background-mobile.webp')}
        />
      </picture>


      <S.WizardWrapper>
        <S.ContentWrapper>
          <S.BrightnessWrapper/>
          {props.children}
        </S.ContentWrapper>
      </S.WizardWrapper>

    </S.Wizard>
  )
})

Wizard.displayName = 'Wizard'

Wizard.propTypes = {
  className: PropTypes.string,
}

Wizard.defaultProps = {
  className: '',
}

export default Wizard
