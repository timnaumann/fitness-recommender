import { css } from 'styled-components'
import * as bp from './breakpoints'

const mainTheme = {
  textColorPrimary: '#ffffff',
  textColorSecondary: '#7a7972',

  startPageBackgroundColor: '#8dd8c6',

  stageLogoBackgroundColor: '#0D4C3B',
  stageLogoSecondBackgroundColor: '#32F0C7',

  mobilePicturesMediaQuery: 'only screen and (min-width: 800px), only screen and (orientation: landscape)',

  borderSpecs: {
    default: `3px solid #FFFFFF`,
    desktop: `4px solid #FFFFFF`,
  },

  headerFooterStyles: {
    fontSize: {
      default: '16px',
      small: '20px',
      tablet: '24px',
      desktop: '26px'
    }
  },

  colors: {
    black: '#010606',
    grey: '#101010',
    greyLight: '#909090',
    white: '#FFFFFF',
    mintLight: '#062014',
    mintDark: '#030f0a',
    anthrazit: '#06252d',
    turquoise: '#32F0C7',
    darkgreen: '#0d4c3b',
  },
  fonts: 'Josefin Sans',
  iconFont: 'FontAwesome',
  fontSizes: {
    small: '20px',
    medium: '30px',
    large: '40px',
  },

  contentTextStyle: {
    'font-size': '1.1rem',
    'font-weight': '500',
  },

  zIndex: {
    stageBorders: 5,
  },

  highlightShadow: css`
    box-shadow: 2px 2px 9px 6px #00000045;
    border: 2px solid #00000045;
  `,

  transitionAll: css`
    transition: all .15s ease-in;
  `,

  questionHeading: css`
    font-size: 22px;
    color: ${(props) => props.theme.textColorPrimary};
    font-weight: 400;
    margin-bottom: 10px;

    @media ${bp.mediumUp} {
      font-size: 30px;
    }

    @media ${bp.largeUp} {
      font-size: 35px;
    }
  `
}

export const getThemeProperty = themeProperty => props => props.theme[themeProperty]

export {
  mainTheme
}
