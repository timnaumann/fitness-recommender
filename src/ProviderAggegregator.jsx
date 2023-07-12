import React from 'react'
import PropTypes from 'prop-types'

import { RecommenderProvider } from '@store/recommender-profile'
import { ComponentProvider } from '@store/registry/component-context'
import { CategoriesProvider } from '@store/categories/categories'
import { UserProfilesProvider } from '@store/user-profile/user-profile'
import { LocaleProvider } from '@store/locale'
import { CookiesProvider } from '@store/cookies'
import ComponentRegistry from './ComponentRegistry'
import AppProvider from '@store/app-specific/AppProvider'

const ProviderAggregator = ({ children }) => (
  <AppProvider>
    <ComponentProvider components={ComponentRegistry}>
      <CookiesProvider>
        <RecommenderProvider>
          <CategoriesProvider>
            <UserProfilesProvider>
              <LocaleProvider>
                {children}
              </LocaleProvider>
            </UserProfilesProvider>
          </CategoriesProvider>
        </RecommenderProvider>
      </CookiesProvider>
    </ComponentProvider>
  </AppProvider>
)

ProviderAggregator.propTypes = {
  children: PropTypes.node,
}

ProviderAggregator.defaultProps = {
  children: null,
}

export default ProviderAggregator
