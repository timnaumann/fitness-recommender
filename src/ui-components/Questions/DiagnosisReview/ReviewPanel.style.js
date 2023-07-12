import styled from 'styled-components'
import * as bp from '@breakpoints'

const baseClass = 'review-panel'
export const ReviewPanel = styled.div.attrs({ className: `${baseClass}` })`
  display: block;

  padding: 0 22px 0 22px;
  margin: 0 !important;
  overflow-x: hidden;
  height: 100%;

  @media ${bp.mediumUp} {
    height: 100%;
    padding: 10px 50px 10px 50px;
    align-items: flex-start;
  }
`

export const SourceWrapper = styled.div.attrs({
  className: `${baseClass}__source-wrapper`,
})`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  align-items: center;
  margin: auto;

  @media ${bp.mediumUp} {
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: row;
  }
`

export const Video = styled.div
  .attrs({
    className: `${baseClass}__video`,
  })`
  display: flex;
  align-items: center;
`

export const TextWrapper = styled.div.attrs({
  className: `${baseClass}__text-wrapper`,
})`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-gap: 30px;
  height: 100%;

  @media ${bp.mediumUp} {
    height: auto;
    justify-content: space-between;
  }
`

export const ExplanationDropdownWrapper = styled.div.attrs({
  className: `${baseClass}__explanation-dropdown-wrapper`,
})`
  display: block;

  @media ${bp.smallUp} {
    display: none;
  }
`

export const Description = styled.div.attrs({
  className: `${baseClass}__description`,
})`
  color: ${(props) => props.theme.textColorPrimary};
  font-weight: 400;
  display: none;
  text-align: center;
  max-width: 500px;
  max-height: 200px;
  overflow: auto;

  @media ${bp.smallUp} {
    font-size: 20px;
    display: block;
  }

  @media ${bp.mediumUp} {
    font-size: 20px;
    display: block;
    max-width: 100%;
  }

  @media ${bp.largeUp} {
    font-size: 22px;
    display: block;
  }
`
