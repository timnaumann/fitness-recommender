import styled from 'styled-components'
import * as bp from '@breakpoints'

const baseClass = 'panel-wrapper'
export const PanelWrapper = styled.div.attrs({ className: `${baseClass}` })`
  display: flex;
  grid-gap: 50px;
  flex-direction: column;
  overflow: auto;
`

export const Content = styled.div.attrs({ className: `${baseClass}__content` })`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  
  grid-gap: 20px;
`

export const PanelHeading = styled.div`
  font-size: 2.5rem;
  color: ${(props) => props.theme.textColorPrimary};
  font-weight: 400;
`

export const Separator = styled.div.attrs({ className: `${baseClass}__separator` })`
  height: 3px;
  background-color: ${props => props.theme.colors.white};
  box-sizing: border-box;
  width: calc(100% - 30px);
  
  @media ${bp.mediumUp} {
    width: 100%;
  }

  @media ${bp.largeUp} {
    width: calc(100% - 100px);
  }
`
