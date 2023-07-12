import styled from 'styled-components'
import * as bp from '@breakpoints'

const baseClass = 'bool-question'
export const BoolQuestion = styled.div.attrs({ className: `${baseClass}` })`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-gap: 10px;
  text-align: center;
`

export const Heading = styled.div.attrs({ className: `${baseClass}__heading` })`
  ${(props) => props.theme.questionHeading}
`

export const SubHeading = styled.div.attrs({ className: `${baseClass}__sub-heading` })`
  ${(props) => props.theme.questionHeading};
  max-width: 1200px;
  font-size: 14px;

  @media ${bp.mediumUp} {
    font-size: 14px;
  }

  @media ${bp.largeUp} {
    font-size: 16px;
  }
  margin-bottom: 20px;
`

export const SelectionItemWrapper = styled.div.attrs({
    className: `${baseClass}__selection-item-wrapper`,
})`
  max-width: 200px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-gap: 40px;

  @media ${bp.smallUp} {
    max-width: 250px;
  }

  @media ${bp.mediumUp} {
    max-width: 300px;
  }
`
