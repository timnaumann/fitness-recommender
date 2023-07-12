import React, { useContext, useState } from 'react'
import { RecommenderProfileContext } from '@store/recommender-profile'
import { createQuestionStage, getRecommenderProfile } from '@api/api-service'
import RecommenderProfileActions from '@store/recommender-profile/RecommenderProfileActions'
import * as S from '@ui-components/EntityManagment/EntityComponent.style'
import Select from '@ui-components/Selects/StandardSelect'
import {
  checkIfAValidValueIsSelected,
  getLastFlowPosition,
  getNumericArrayForSelect,
  getSelectArray,
} from '@ui-components/helper/helpers'
import { LocaleContext } from '@store/locale'
import { DeleteEntitySelect } from '@ui-components/EntityManagment/Selects/DeleteEntitySelect'

const AddQuestionStage = (props) => {
  const [, dispatchRecommenderProfileAction] = useContext(
    RecommenderProfileContext
  )
  const [locale] = useContext(LocaleContext)
  const [name, setName] = useState('')
  const [heading, setHeading] = useState('')
  const [flowPosition, setFlowPosition] = useState('')
  const lastFlowPosition = getLastFlowPosition(props.qStages)
  const flowPositionArray = getNumericArrayForSelect(lastFlowPosition)
  const [selQStage, setSelQStage] = useState('')

  const questionStagesArray = getSelectArray('name', 'id', props.qStages)

  const payload = {
    name: name,
    heading: heading,
    questionFlowPosition: parseInt(flowPosition),
    locale: locale,
  }

  const sendPayloadToApi = async () => {
    if (checkIfAValidValueIsSelected([flowPosition])) {
      if (payload.name === '') {
        alert('Please fill in the needed inputs.')
      } else {
        if (window.confirm('Your on to change the value permanently.')) {
          await createQuestionStage(payload)
          const profile = await getRecommenderProfile(locale)
          dispatchRecommenderProfileAction(
            RecommenderProfileActions.setRecommenderProfile(profile)
          )
        }
      }
    }
  }

  const loadDataForEdit = (e) => {
    if (e.target.value !== 'Select option') {
      setSelQStage(e.target.value)
      const selectedQStage = props.qStages.find(
        (element) => element.id === parseInt(e.target.value)
      )
      setName(selectedQStage.name)
      setHeading(selectedQStage.heading || '')
      setFlowPosition(selectedQStage.questionFlowPosition)
    }
  }

  return (
    <S.EntityComponent>
      <h1> Add a new Questionstage:</h1>
      <label htmlFor="questionStageName">Unique name:</label>
      <S.Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={'new questionstage...'}
      />
      <label htmlFor="heading">Heading:</label>
      <S.Input
        type="text"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        placeholder={'new heading...'}
      />
      <label htmlFor="flowPosition">Select a Flowposition:</label>
      <Select
        array={flowPositionArray}
        onChange={(e) => setFlowPosition(e.target.value)}
        defaultValue={flowPosition}
        defaultOption={false}
      />
      <button onClick={sendPayloadToApi}>add or edit Questionstage</button>
      <h1>Choose a Questionstage to edit:</h1>
      <Select
        array={questionStagesArray}
        onChange={loadDataForEdit}
        defaultValue={selQStage}
      />
      <h1>Select entity to delete:</h1>
      <DeleteEntitySelect array={props.qStages} entity={'questionStage'}/>
    </S.EntityComponent>
  )
}

export default AddQuestionStage
