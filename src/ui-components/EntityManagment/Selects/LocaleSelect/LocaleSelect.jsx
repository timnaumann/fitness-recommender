import React, { useContext, useEffect, useState } from 'react'
import { getSelectArray } from '@ui-components/helper/helpers'
import PropTypes from 'prop-types'
import { LocaleContext } from '@store/locale'
import LocaleActions from '@store/locale/LocaleActions'
import { useLocales } from '@store/store-hooks'
import { RecommenderProfileActions, RecommenderProfileContext, } from '@store/recommender-profile'
import { getRecommenderProfile } from '@api/api-service'
import * as S from './LocaleSelect.style'

const LocaleSelect = (props) => {
  const [state, dispatchLocaleAction] = useContext(LocaleContext)
  const [, dispatchRecommenderProfileAction] = useContext(
    RecommenderProfileContext
  )

  const localeSelectArray = getSelectArray(
    'name',
    'name',
    useLocales()
      .map((l) => ({
        name: l,
      }))
  )
  const [locale, setLocale] = useState('')

  useEffect(() => {
    setLocale(state)
  }, [state])

  const changeLocaleHandler = async (e) => {
    dispatchLocaleAction(LocaleActions.setSelectedLocale(e.target.value))
    setLocale(e.target.value)
    const profile = await getRecommenderProfile(e.target.value)
    dispatchRecommenderProfileAction(
      RecommenderProfileActions.setRecommenderProfile(profile)
    )
  }
  return (
    <S.LocaleSelect onChange={changeLocaleHandler} value={locale}>
      {localeSelectArray &&
      localeSelectArray.map((element) => {
        return (
          <option key={element.value} value={element.value}>
            {element.label}
          </option>
        )
      })}
    </S.LocaleSelect>
  )
}

LocaleSelect.propTypes = {
  setter: PropTypes.func,
  defaultLocale: PropTypes.string,
  localeArray: PropTypes.array,
}

export default LocaleSelect
