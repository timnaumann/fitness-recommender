import { createGlobalStyle, withTheme } from 'styled-components'

export default withTheme(createGlobalStyle`
  body {
    margin: 0;
    font-family: ${(props) => props.theme.fonts} !important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
`)
