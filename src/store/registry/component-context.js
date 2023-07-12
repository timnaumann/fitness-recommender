import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component that renders null immediately
 */

export const ComponentContext = React.createContext({})

/**
 * provide a set of components to its children
 */
export const ComponentProvider = ({
  components,
  children,
}) => (
  <ComponentContext.Provider value={components}>
    {children}
  </ComponentContext.Provider>
)
ComponentProvider.displayName = 'ComponentProvider'
ComponentProvider.propTypes = {
  components: PropTypes.objectOf(PropTypes.elementType).isRequired,
  children: PropTypes.node,
}
ComponentProvider.defaultProps = {
  children: null,
}
