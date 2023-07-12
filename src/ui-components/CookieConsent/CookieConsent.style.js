import styled, { css } from 'styled-components'
import { darken } from 'polished'
import * as bp from '@breakpoints'

const baseClass = 'cookie-consent'
export const CookieConsent = styled.div.attrs({ className: `${baseClass}` })`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;

  position: fixed;

  width: 100%;
  min-height: 120px;
  bottom: 0;

  box-sizing: border-box;
  padding: 20px;

  @media ${bp.mediumUp} {
    flex-direction: row;
    grid-gap: 40px;
  }
`

export const Background = styled.div.attrs({ className: `${baseClass}__text-wrapper` })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 85%;
  z-index: -1;
  box-shadow: 0 0 24px 0 #00000090;
  background-color: ${(props) => props.theme.colors.white};

  padding: 20px;
  box-sizing: border-box;
`

export const TextWrapper = styled.div.attrs({ className: `${baseClass}__text-wrapper` })`
  display: flex;
  flex-direction: column;

  @media ${bp.mediumUp} {
    width: 50%;
  }
`

export const Heading = styled.h1.attrs({ className: `${baseClass}__heading` })`
  font-size: 20px;
  text-shadow: 3px 1px 2px rgb(0 0 0 / 25%)
`

export const Explanation = styled.div.attrs({ className: `${baseClass}__explanation` })`
`

export const ButtonWrapper = styled.div.attrs({ className: `${baseClass}__button-wrapper` })`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${bp.mediumUp} {
    width: 50%;
  }
`

export const AcceptAllButton = styled.div.attrs({ className: `${baseClass}__accept-all-button` })`
  width: 100%;
  max-width: 100%;
  font-size: 18px;
  border-radius: 5px;
  margin-bottom: 10px;

  :hover {
    opacity: 1;
    border: 3px solid transparent;
  }
`
export const DeclineWrapper = styled.div.attrs({ className: `${baseClass}__decline-wrapper` })`
  display: flex;
  flex-direction: row;
  grid-gap: 10px;
  justify-content: space-between;
`

const getDarkGreyColor = (props) => darken(0.15, props.theme.colors.greyLight)

const DenyStyling = css`
  font-size: 18px;
  border-radius: 5px;
  max-width: 100%;
  background-color: transparent;

  border: 1px solid ${getDarkGreyColor};
  color: ${getDarkGreyColor};
  text-shadow: none;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${getDarkGreyColor};
    border: 1px solid ${getDarkGreyColor};
  }
`
export const DenyButton = styled.div.attrs({ className: `${baseClass}__deny-button` })`
  ${DenyStyling}
`

export const AdjustButton = styled.div.attrs({ className: `${baseClass}__adjust-button` })`
  ${DenyStyling}
`
