import styled, { css } from 'styled-components'

import * as bp from '@breakpoints'
import { Image } from '@ui-components/Image'
import { BackgroundDecoration } from '@ui-components/Basics/BackgroundDecoration.style'
import { Footer } from '@ui-components/Footer/Footer.style'

const baseClass = 'start-page'
export const StartPage = styled.div.attrs({ className: baseClass })`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
`

const startPageContentBackgroundHighlighter = css`
  content: "";
  width: 100%;

  // padding + border
  height: 80px;
  position: absolute;
  backdrop-filter: brightness(200%);
  z-index: -1;
`

export const StartPageContent = styled.div.attrs({
    className: `${baseClass}__content`,
})`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 1fr min-content min-content;
  grid-template-areas:
  "content"
  "header"
  "footer";
  grid-template-columns: 100%;
  grid-gap: 5px;

  box-sizing: border-box;
  padding: 0 20px 20px 20px;

  @media ${bp.mediumUp} {
    grid-template-areas: 
  "header"
  "content"
  "footer";
    grid-template-rows: min-content 1fr min-content;
    padding: 75px 0 20px 0;

    &:before {
      top: 0;
      ${startPageContentBackgroundHighlighter};
    }

    &:after {
      bottom: 0;
      ${startPageContentBackgroundHighlighter};
    }
  }

  @media ${bp.landscape(bp.mediumLow)} {
    grid-template-areas: 
  "header"
  "content"
  "footer";
    grid-template-rows: 15px 1fr 40px;
    padding: 0;
    grid-gap: 10px;
  }
`

export const BodyBackGround = styled(Image)
    .attrs({
        className: `${baseClass}__body-background`,
    })`
  position: absolute;
  height: 100%;
  object-position: -100px;

  z-index: -1;

  margin: 0;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${props => props.theme.mobilePicturesMediaQuery} {
    width: 100%;
    object-position: 100%;
  }
`

export const StartPageHeader = styled.div.attrs({
    className: `${baseClass}__start-page-header`,
})`

  grid-area: header;
  width: 100%;
  height: 100%;
`

export const StartPageContentWrapper = styled.div.attrs({
    className: `${baseClass}__start-page-content-wrapper`,
})`
  background-color: rgba(10, 10, 10, 0.3);
  grid-area: content;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  border: solid 3px white;
  border-top: none;

  @media ${bp.smallUp} {
    margin-bottom: 15px;
  }

  @media ${bp.mediumUp}, ${bp.landscape(bp.mediumLow)} {
    flex-direction: row;

    border: none;
    border-top: solid 5px white;
    border-bottom: solid 5px white;
    margin-bottom: 0;
  }
`

export const StartPageLogoBar = styled.div.attrs({
    className: `${baseClass}__startpage-logobar`,
})`
  grid-area: logoBar;
  width: 100%;
  box-sizing: border-box;

  @media ${bp.mediumUp} {
    padding: 25px 25px 25px 0;
    width: 350px;
  }

  @media ${bp.landscape(bp.mediumLow)} {
    width: 250px;
  }
`

export const ContentDivider = styled.div.attrs({
    className: `${baseClass}__content-divider`,
})`
  width: 100%;
  height: 3px;

  align-self: center;
  background-color: ${props => props.theme.colors.white};

  @media ${bp.mediumUp}, ${bp.landscape(bp.mediumLow)} {
    min-width: 7px;
    max-width: 7px;
    width: 3px;
    height: 100%;
  }
`

export const TeaserWrapper = styled.div.attrs({
    className: `${baseClass}__teaser-wrapper`,
})`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px;

  @media ${bp.mediumUp} {
    box-sizing: border-box;
    padding: 25px 0 25px 25px;
    margin: 0;
  }

  @media ${bp.largeUp} {
    padding: 25px 25px 25px 25px;
  }

  @media ${bp.landscape(bp.mediumLow)} {
    padding: 10px 0 10px 10px;
  }
`

export const FreeSpaceWrapper = styled.div.attrs({
    className: `${baseClass}__free-space-wrapper`,
})`
  display: none;

  @media ${bp.largeUp} {
    display: block;
    position: relative;

    width: 10%;
    min-width: 100px;

    box-sizing: border-box;
    padding: 25px 0 25px 25px;

    border-left: 7px solid ${props => props.theme.colors.white};
  }
`

export const FreeSpaceBackground = styled(BackgroundDecoration)
    .attrs({
        className: `${baseClass}__free-space-wrapper`,
    })`
  position: relative;
  background-color: ${(props) => props.theme.colors.turquoise};
  mix-blend-mode: multiply;
`

// Footer is necessary, otherwise the styled component css is not correctly overridden
export const StartPageFooter = styled(Footer).attrs({
    className: `${baseClass}__footer`,
})`
  display: grid;
  grid-area: footer;
  padding: 0;

  @media ${bp.smallUp} {
    grid-template-columns:repeat(4, auto);
  }

  @media ${bp.mediumUp} {
    grid-template-columns: 275px repeat(3, min-content);
    grid-gap: 50px;
    margin-top: 15px;
  }

  @media ${bp.landscape(bp.mediumLow)} {
    grid-template-columns: 190px repeat(3, min-content);
  }
`
