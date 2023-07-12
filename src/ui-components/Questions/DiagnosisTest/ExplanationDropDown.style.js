import styled, { css } from 'styled-components'
import * as bp from '@breakpoints'

const baseClass = 'explanation-dropdown'
export const ExplanationDropDown = styled.div.attrs({
  className: `${baseClass}`,
})`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  grid-gap: 10px;
  max-width: 500px;
  text-align: center;
`

const arrowSize = '13px'
const arrow = css`
  :after {
    content: '';
    width: 0;
    height: 0;
    border-left: calc(${arrowSize} - 5px) solid transparent;
    border-right: calc(${arrowSize} - 5px) solid transparent;

    border-top: ${(props) => (!props.isExpanded ? arrowSize : 0)} solid white;
    border-bottom: ${(props) => (props.isExpanded ? arrowSize : 0)} solid white;

    margin-top: 7px;

    @media ${bp.mediumUp} {
      margin-top: 5px;
    }
  }
`

export const ExplanationDropDownHeading = styled.div.attrs({
  className: `${baseClass}__heading`,
})`
  font-size: 20px;
  color: ${(props) => props.theme.textColorPrimary};

  display: flex;
  grid-gap: 10px;

  cursor: pointer;

  @media ${bp.mediumUp} {
    font-size: 25px;
    font-weight: bold;
  }

  ${arrow}
`

export const ExplanationDropDownContent = styled.div.attrs({
  className: `${baseClass}__content`,
})`
  display: flex;
  color: ${(props) => props.theme.textColorPrimary};

  height: 100%;
  overflow-y: auto;

  max-height: ${(props) => (props.isExpanded ? '200px' : '0')};
  transition: max-height 0.4s ease-out;
  box-sizing: content-box;
`
