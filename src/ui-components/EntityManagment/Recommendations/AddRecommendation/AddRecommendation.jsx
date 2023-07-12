import React, { useContext, useState } from 'react'
import { createRecommendation, getAllRecommendations } from '@api/api-service'
import Select from '@ui-components/Selects/StandardSelect'
import {
  checkIfAValidValueIsSelected,
  checkIfRessourceIsAvailableAndAlert,
  createRessourcesArray,
  getRessourceStatus,
  getSelectArray,
} from '@ui-components/helper/helpers'
import { LocaleContext } from '@store/locale'
import { DeleteEntitySelect } from '@ui-components/EntityManagment/Selects/DeleteEntitySelect'

import * as S from '@ui-components/EntityManagment/EntityComponent.style'

const AddRecommendation = (props) => {
  const [heading, setHeading] = useState('')
  const [recommendationName, setRecommendationName] = useState('')
  const [description, setDescription] = useState('')
  const [recommendationSourceUrl, setRecommendationSourceUrl] = useState('')
  const [recommendationTool, setRecommendationTool] = useState('')
  const [recommendationToolUrl, setRecommendationToolUrl] = useState('')
  const [diagnosisName, setDiagnosisName] = useState('')
  const [selectedRec, setSelectedRec] = useState('')

  const [locale] = useContext(LocaleContext)
  const recommendationsArray = getSelectArray(
    'heading',
    'id',
    props.recommendations
  )

  const diagnosisSelectArray = getSelectArray('name', 'name', props.diagnosis)

  const diagnosisRessourceArray = createRessourcesArray(
    props.diagnosis,
    'diagnosis'
  )

  const payload = {
    heading: heading,
    name: recommendationName,
    description: description,
    sourceUrl: recommendationSourceUrl,
    diagnosisName: diagnosisName,
    tool: recommendationTool,
    toolUrl: recommendationToolUrl,
    locale: locale,
  }

  const sendPayloadToApi = async () => {
    if (
      checkIfRessourceIsAvailableAndAlert(
        getRessourceStatus(diagnosisRessourceArray)
      )
    ) {
      if (checkIfAValidValueIsSelected([diagnosisName])) {
        if (payload.name === '') {
          alert('Please fill in the needed inputs.')
        } else {
          if (window.confirm('Your on to change the value permanently.')) {
            await createRecommendation(payload)

            props.setAllRecomm(await getAllRecommendations(locale))
          }
        }
      }
    }
  }

  const loadDataForEdit = (e) => {
    if (e.target.value !== 'Select option') {
      setSelectedRec(e.target.value)
      const selectedRecommendation = props.recommendations.find(
        (element) => element.id === parseInt(e.target.value)
      )
      setRecommendationName(selectedRecommendation.name || '')
      setHeading(selectedRecommendation.heading || '')
      setDescription(selectedRecommendation.description || '')
      setRecommendationSourceUrl(selectedRecommendation.sourceUrl || '')
      setRecommendationTool(selectedRecommendation.tool || '')
      setRecommendationToolUrl(selectedRecommendation.toolUrl || '')
      setDiagnosisName(props.diagnosis.find(d => d.id === selectedRecommendation.diagnosisId)?.name)
    }
  }

  return (
    <S.EntityComponent>
      <h1>Add a new Recommendation:</h1>
      <label htmlFor="recomName">Unique name:</label>
      <S.Input
        value={recommendationName}
        onChange={(e) => setRecommendationName(e.target.value)}
        placeholder={'new name...'}
      />
      <label htmlFor="recomHeadding">Heading:</label>
      <S.Input
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        placeholder={'new heading...'}
      />
      <label htmlFor="descr">description:</label>
      <S.Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={'new description...'}
      />
      <label htmlFor="sourceUrl">sourceUrl:</label>
      <S.Input
        value={recommendationSourceUrl}
        onChange={(e) => setRecommendationSourceUrl(e.target.value)}
        placeholder={'new sourceurl...'}
      />
      <label htmlFor="tool">tool:</label>
      <S.Input
        value={recommendationTool}
        onChange={(e) => setRecommendationTool(e.target.value)}
        placeholder={'new tool...'}
      />
      <label htmlFor="sourceUrl">toolUrl:</label>
      <S.Input
        value={recommendationToolUrl}
        onChange={(e) => setRecommendationToolUrl(e.target.value)}
        placeholder={'new toolUrl...'}
      />
      <Select
        array={diagnosisSelectArray}
        onChange={(e) => setDiagnosisName(e.target.value)}
        defaultValue={diagnosisName}
      />

      <button onClick={sendPayloadToApi}>add or edit recommendation.</button>
      <h1>Choose a recommendation to edit:</h1>

      <Select
        array={recommendationsArray}
        onChange={loadDataForEdit}
        defaultValue={selectedRec}
      />
      <h1>Select entity to delete:</h1>
      <DeleteEntitySelect
        array={props.recommendations}
        entity={'recommendation'}
        setAllRecomm={props.setAllRecomm}
        propToShow={'heading'}
      />
    </S.EntityComponent>
  )
}

export default AddRecommendation
