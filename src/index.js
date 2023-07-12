import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import 'styled-components/macro'

import { AppContainer, ProviderAggegregator } from '@container-components'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from './global.style'
import { mainTheme } from './themes'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle/>
    <ProviderAggegregator>
      <AppContainer/>
    </ProviderAggegregator>
  </ThemeProvider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
