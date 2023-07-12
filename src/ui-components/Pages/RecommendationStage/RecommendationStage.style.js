import styled from 'styled-components'
import * as bp from '@breakpoints'
import { FooterItem } from '@ui-components/Footer/Footer.style'

const baseClass = 'recommendation-stage'
export const RecommendationStage = styled.div.attrs({
  className: `${baseClass}`,
})`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  align-items: stretch;
  height: 100%;
`

export const RecommendationStageHeading = styled.div.attrs({
  className: `${baseClass}__stage-heading`,
})`
`

export const CarouselWrapper = styled.div.attrs({
  className: `${baseClass}__carousel-wrapper`,
})`
  padding: 20px 0 20px 0;
`

export const RecommendationStageFooter = styled.div.attrs({ className: `${baseClass}__stage-footer` })`
  align-items: center;
  justify-content: center;
  padding: 10px;

  ${FooterItem} {
    font-size: 12px;
    mix-blend-mode: overlay;

    &:hover {
      mix-blend-mode: normal;
    }

    @media ${bp.mediumUp} {
      font-size: 14px;
    }
  }
`
