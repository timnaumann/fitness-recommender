import styled from 'styled-components'

import { SelectionItem } from '@ui-components/Buttons/ButtonHelper.style'

export const SelectionItemYes = styled(SelectionItem)
  .attrs({
    className: 'selection-yes-button',
  })`
  :after {
    content: '\f00c';
    color: ${props => props.theme.colors.white};
    font-family: ${(props) => props.theme.iconFont};
  }
`
