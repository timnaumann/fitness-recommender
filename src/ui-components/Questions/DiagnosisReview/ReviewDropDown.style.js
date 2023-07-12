import styled from 'styled-components'
import { BackgroundDecoration } from '@ui-components/Basics/BackgroundDecoration.style'
import { darken } from 'polished'
import * as bp from '@breakpoints'

const baseClass = 'review-dropdown'
export const ReviewDropDown = styled.div.attrs({
  className: `${baseClass}`,
})`
  min-width: 220px;
`

export const CustomDropDownMenu = styled.div.attrs({
  className: `${baseClass}__dropdown-menu`,
})`
  min-width: 100% !important;
  background-color: transparent !important;
`

export const CustomDropDownBackground = styled(BackgroundDecoration)
  .attrs({
    className: `${baseClass}__dropdown-menu`,
  })`
  background-color: ${(props) => darken(0.3, props.theme.colors.turquoise)};
`

export const CustomDropDownItem = styled.div.attrs({
  className: `${baseClass}__dropdown-item`,
})`
  color: ${props => props.theme.colors.white} !important;

  &:hover {
    background-color: ${(props) => darken(0.3, props.theme.colors.turquoise)} !important;
    mix-blend-mode: overlay;
  }
`

export const CustomToggle = styled.div.attrs({
  className: `${baseClass}__custom-toggle`,
})`
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5px 5px 5px 15px;
  justify-content: space-between;

  @media ${bp.mediumUp} {
    display: none;
  }
`

export const ToggleLabel = styled.div.attrs({
  className: `${baseClass}__custom-toggle-label`,
})`
`

export const ToggleArrow = styled.div.attrs({
  className: `${baseClass}__custom-toggle-arrow`,
})`
  transition: all 0.2s ease-in;
  transform: scale(1, 1) translate(0, 0) rotate(90deg);

  .show & {
    transform: scale(1, -1) translate(0, 0) rotate(90deg);
  }
`

