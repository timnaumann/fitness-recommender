import React from 'react'
import * as S from './Diagnosis.style'
import { useCategories, useDiagnosis, useRecommendations } from '@store/store-hooks'
import AddDiagnosis from '@ui-components/EntityManagment/Diagnosis/AddDiagnosis/AddDiagnosis'
import EntityTableComponent from '@ui-components/Table/EntityTableComponent'

const Diagnosis = () => {
  const diagnosis = useDiagnosis()
  const recommendations = useRecommendations()
  const categories = useCategories()

  return (
    <S.Diagnosis>
      <EntityTableComponent
        entityToDisplay={diagnosis}
        entityname={'diagnosis'}
      />
      <AddDiagnosis
        diagnosis={diagnosis}
        recommendations={recommendations}
        categories={categories}
      />
    </S.Diagnosis>
  )
}

const exportResult = {
  name: 'diagnosis',
  Component: Diagnosis,
}

export default exportResult
