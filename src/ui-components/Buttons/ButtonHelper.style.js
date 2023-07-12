import styled, { css } from 'styled-components'
import * as bp from '@breakpoints'
import { darken } from 'polished'

const selectionItemDim = {
  default: '60px',
  tablet: '76px',
  desktop: '76px',
}

const itemSelected = css`
  background-color: ${props => props.theme.colors.turquoise};
  box-shadow: 2px 2px 9px 6px #00000045;
  opacity: 100% !important;
`

const itemSelectionDone = css`
  opacity: 35%;
`

export const SelectionItem = styled.div`
  height: ${selectionItemDim.default};
  width: ${selectionItemDim.default};
  min-height: ${selectionItemDim.default};
  min-width: ${selectionItemDim.default};
  background-color: ${(props) => darken(0.1, props.theme.colors.turquoise)};

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 45px;
  cursor: pointer;

  border: 2px solid transparent;

  &:hover {
    ${(props) => props.theme.highlightShadow};
  }

  @media ${bp.smallUp} {
    height: ${selectionItemDim.tablet};
    width: ${selectionItemDim.tablet};
    min-height: ${selectionItemDim.tablet};
    min-width: ${selectionItemDim.tablet};
    font-size: 52px;
  }

  @media ${bp.largeUp} {
    height: ${selectionItemDim.desktop};
    width: ${selectionItemDim.desktop};
    min-height: ${selectionItemDim.desktop};
    min-width: ${selectionItemDim.desktop};
    font-size: 52px;
  }

  ${(props) => props.selectionDone && itemSelectionDone};
  ${(props) => (props.isSelected && itemSelected)};

`
