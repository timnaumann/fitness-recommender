import styled from 'styled-components'
import { FooterItem } from '@ui-components/Footer/Footer.style'
import * as bp from '@breakpoints'

const baseClass = 'question-stage-wrapper'
export const QuestionStageWrapper = styled.div.attrs({ className: baseClass })`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  align-items: stretch;
  height: 100%;
`

export const Carousel = styled.div.attrs({ className: `${baseClass}__carousel` })`
`

export const HeadingWrapper = styled.div.attrs({ className: `${baseClass}__heading-wrapper` })`
  width: 100%;
`

export const StageFooter = styled.div.attrs({ className: `${baseClass}__stage-footer` })`
  align-items: center;
  justify-content: center;

  padding: 0;
  margin-top: 15px;

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
