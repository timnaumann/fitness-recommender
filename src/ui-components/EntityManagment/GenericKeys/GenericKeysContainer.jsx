import React from 'react'
import { useI18n } from '@store/store-hooks'
import GenericKeys from '@ui-components/EntityManagment/GenericKeys/GenericKeys'

const GenericKeyContainer = () => {
  const genericKeys = useI18n().generic

  return (
    <GenericKeys i18nKeys={genericKeys}/>
  )
}

const exportResult = {
  name: 'generic-keys',
  Component: GenericKeyContainer,
}

export default exportResult
