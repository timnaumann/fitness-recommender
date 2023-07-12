import React from 'react'
import PropTypes from 'prop-types'
import { LoadingContextProvider } from '@store/app-specific/LoadingContext'
import { CarouselContextProvider } from '@store/app-specific/CarouselContext'

const AppProvider = ({ children }) => (
  <LoadingContextProvider>
    <CarouselContextProvider>
      {children}
    </CarouselContextProvider>
  </LoadingContextProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node,
}

AppProvider.defaultProps = {
  children: null,
}

export default AppProvider
