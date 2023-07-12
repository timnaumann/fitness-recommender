import styled from 'styled-components'

import { SelectionItem } from '@ui-components/Buttons/ButtonHelper.style'

export const SelectionItemNo = styled(SelectionItem)
  .attrs({
    className: 'selection-no-button',
  })`
  :after {
    content: '\f00d';
    font-family: ${(props) => props.theme.iconFont};
  }
`
