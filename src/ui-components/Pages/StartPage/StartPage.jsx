import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import * as bp from '@breakpoints'
import * as S from './StartPage.style'

import Teaser from '@ui-components/Teaser/Teaser'
import { useI18n } from '@store/store-hooks'
import { getImageURL } from '@api/api-helper'
import StartPageLogoBar from './StartPageLogoBar'
import { useLoading } from '@store/app-specific/LoadingContext'
import {
  startPageChangeAnimation,
  useStopPageChangeAnimationOnMount
} from '@container-components/container-helper'
import { Footer } from '@ui-components/Footer/Footer'
import { useRecommenderEnabled } from '@globals/Settings'
import { trackTeaserClick } from '@ga-tracking/googleanalytics-helper'

const StartPage = (props) => {
  const [, dispatch] = useLoading()
  const genericI18n = useI18n().generic
  const history = useHistory()
  const recommenderEnabled = useRecommenderEnabled()

  useStopPageChangeAnimationOnMount(StartPage.displayName)

  const onClick = useCallback(() => {
    startPageChangeAnimation(dispatch, StartPage.displayName)
    history.push(props.nextPhase)

    trackTeaserClick()
  }, [props.nextPhase, history, dispatch])

  const teaserButtonContent = genericI18n && (recommenderEnabled ? genericI18n.landingPageButton : genericI18n.landingPageButtonOngoing)

  return (
    <S.StartPage>
      <picture>
        <source
          media={bp.largeUp(props)}
          srcSet={getImageURL('landing-page.webp')}
        />
        <S.BodyBackGround src={getImageURL('landing-page-mobile.webp')}/>
      </picture>
      <S.StartPageContent>

        <S.StartPageContentWrapper>
          <S.StartPageLogoBar>
            <StartPageLogoBar/>
          </S.StartPageLogoBar>

          <S.ContentDivider/>

          <S.TeaserWrapper>
            <Teaser
              onClick={recommenderEnabled ? onClick : () => {}}
              heading={genericI18n && genericI18n.landingPageMainLabel}
              subheading={genericI18n && genericI18n.landingPageSubLabel}
              buttonLabel={teaserButtonContent}
              nextPhase={props.nextPhase}
            />
          </S.TeaserWrapper>

          <S.FreeSpaceWrapper>
            <S.FreeSpaceBackground/>
          </S.FreeSpaceWrapper>

        </S.StartPageContentWrapper>

        <S.StartPageFooter
          as={Footer}
        />
      </S.StartPageContent>
    </S.StartPage>

  )
}

StartPage.displayName = 'StartPage'

StartPage.propTypes = {
  nextPhase: PropTypes.string,
}

StartPage.defaultProps = {
  nextPhase: '',
}

export default StartPage
