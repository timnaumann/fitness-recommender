import styled from 'styled-components'
import * as bp from '@breakpoints'

const baseClass = 'stage'
export const Stage = styled.div.attrs({ className: baseClass })`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  padding: 20px 0 20px 0;
  overflow-y: auto;

  &:last-child{
    padding: 0 0 20px 0;

    @media ${bp.smallUp} {
      padding: 20px 0 20px 0; 
    }
  }
  
  > * {
    margin: auto 0 auto 0;
  }

  @media ${bp.mediumUp} {
    grid-gap: 45px;
    padding: 30px 35px 30px 35px;
  }
`
