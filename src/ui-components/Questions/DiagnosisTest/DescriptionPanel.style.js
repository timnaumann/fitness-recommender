import styled from 'styled-components'
import { Image } from '@ui-components/Image'
import * as bp from '@breakpoints'

const baseClass = 'description-panel'
export const DescriptionPanel = styled.div.attrs({ className: `${baseClass}` })`
  display: flex;
  flex-direction: column;
  grid-gap: 50px;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  padding: 0 22px 0 22px;

  @media ${bp.mediumUp} {
    padding: 0;
  }

  height: 100%;
  width: 100%;
`

export const Heading = styled.div.attrs({ className: `${baseClass}__heading` })`
  font-size: 24px;
  color: ${(props) => props.theme.textColorPrimary};
  font-weight: normal;
  line-break: anywhere;

  @media ${bp.mediumUp} {
    font-size: 30px;
  }

  @media ${bp.largeUp} {
    font-size: 35px;
  }
`

export const ContentWrapper = styled.div.attrs({
  className: `${baseClass}__content-wrapper`,
})`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 100%;

  @media ${bp.largeUp} {
    flex-direction: row;
  }
`

export const DetailsWrapper = styled.div.attrs({
  className: `${baseClass}__details-wrapper`,
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;

  position: relative;
  padding: 0;
  box-sizing: border-box;

  @media ${bp.mediumUp} {
    min-height: 350px;
    flex-direction: row;
    grid-gap: 50px;

    padding: 30px 20px 30px 50px;
  }
`

export const DetailsText = styled.div.attrs({
  className: `${baseClass}__details-text`,
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
`

export const SourceWrapper = styled.div.attrs({
  className: `${baseClass}__source-wrapper`,
})`
  margin-top: auto;

  @media ${bp.largeUp} {
    margin-top: 20px;
  }
`

export const Video = styled(Image)
  .attrs({
    className: `${baseClass}__image`,
  })`

  display: flex;
  align-items: center;
`

export const Description = styled.div.attrs({
  className: `${baseClass}__description`,
})`
  color: ${(props) => props.theme.textColorPrimary};
  font-weight: 400;
  display: none;
  text-align: center;

  @media ${bp.smallUp} {
    font-size: 20px;
    display: block;
  }

  @media ${bp.largeUp} {
    font-size: 22px;
    display: block;
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

export const SelectionWrapper = styled.div.attrs({
  className: `${baseClass}__selection-wrapper`,
})`
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  padding: 0 0 20px 0;
  box-sizing: border-box;

  @media ${bp.mediumUp} {
    padding: 20px 20px 20px 20px;
  }

  @media ${bp.largeUp} {
    align-self: auto;
  }
`

export const SelectionHeading = styled.div.attrs({
  className: `${baseClass}__selection-heading`,
})`
  color: ${(props) => props.theme.textColorPrimary};
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 20px;

  @media ${bp.largeUp} {
    margin-bottom: 45px;
  }
`

export const SelectionItemWrapper = styled.div.attrs({
  className: `${baseClass}__selection-item-wrapper`,
})`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-gap: 60px;
`
