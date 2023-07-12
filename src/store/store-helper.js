import { useContext } from 'react'
import { useI18n, useRecommenderProfile } from '@store/store-hooks'

export const useGetStateWithoutSetter = (Context, entityName) => {
  const [state] = useContext(Context)
  return state[entityName]
}

export const useGenericI18nKey = key => {
  const i18n = useI18n()
  return i18n?.generic?.[key]
}
