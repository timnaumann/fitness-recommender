import React, { useEffect, useState } from 'react'
import * as S from './Recommendations.style'
import { AddRecommendation } from '@ui-components/EntityManagment/Recommendations/AddRecommendation'
import { useDiagnosis, useSelectedLocale } from '@store/store-hooks'
import EntityTableComponent from '@ui-components/Table/EntityTableComponent'
import { getAllRecommendations } from '@api/api-service'

const RecommendationsAdminArea = () => {
  const selectedLocale = useSelectedLocale()
  const [allRecommendations, setAllRecom] = useState()
  const diagnosis = useDiagnosis()

  useEffect(() => {
    async function fetchdata () {
      const response = await getAllRecommendations(selectedLocale)
      setAllRecom(response)
    }

    fetchdata()
  }, [selectedLocale])

  return (
    <S.Recommendations>
      <EntityTableComponent
        entityname={'recommendations'}
        entityToDisplay={allRecommendations}
      />
      <AddRecommendation
        recommendations={allRecommendations}
        diagnosis={diagnosis}
        setAllRecomm={setAllRecom}
      />
    </S.Recommendations>
  )
}

const exportResult = {
  name: 'recommendations',
  Component: RecommendationsAdminArea,
}

export default exportResult
