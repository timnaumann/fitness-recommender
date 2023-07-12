import styled from 'styled-components'
import * as bp from '@breakpoints'

const baseClass = 'stage-footer'
export const StageFooter = styled.div.attrs({ className: `${baseClass}` })`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: right;
  margin-right: -25px;

  @media ${bp.mediumUp} {
    bottom: 20px;
    right: 30px;
    position: fixed;
    margin-right: 0;
  }

  @media ${bp.largeUp} {
    bottom: 20px;
    right: 60px;
    position: fixed;
    margin-right: 0;
  }
`

export const StageFooterWrapper = styled.div.attrs({
  className: `${baseClass}`,
})`
  position: relative;
  margin-top: auto;
`
