import * as S from '@ui-components/EntityManagment/EntityComponent.style'
import React, { useContext, useState } from 'react'
import { RecommenderProfileContext } from '@store/recommender-profile'
import { createDiagnosis, getRecommenderProfile } from '@api/api-service'
import RecommenderProfileActions from '@store/recommender-profile/RecommenderProfileActions'
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

const AddDiagnosis = (props) => {
  const [locale] = useContext(LocaleContext)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [categoryName, setCategoryName] = useState('')
  const [, dispatchRecommenderProfileAction] = useContext(
    RecommenderProfileContext
  )
  const [selDiag, setSelDiag] = useState('')
  const categoriesArray = getSelectArray('name', 'name', props.categories)
  const diagnosisArray = getSelectArray('name', 'id', props.diagnosis)

  const categoryRessourceArray = createRessourcesArray(
    props.categories,
    'categories'
  )

  const payload = {
    name: name,
    description: description,
    categoryName: categoryName,
    locale: locale,
  }

  const sendPayloadToApi = async () => {
    if (
      checkIfRessourceIsAvailableAndAlert(
        getRessourceStatus(categoryRessourceArray)
      )
    ) {
      if (checkIfAValidValueIsSelected([categoryName])) {
        if (payload.name === '') {
          alert('Please fill in the needed inputs.')
        } else {
          if (window.confirm('Your on to change the value permanently.')) {
            await createDiagnosis(payload)
            const profile = await getRecommenderProfile(locale)
            dispatchRecommenderProfileAction(
              RecommenderProfileActions.setRecommenderProfile(profile)
            )
          }
        }
      }
    }
  }
  const loadDataForEdit = (e) => {
    if (e.target.value !== 'Select option') {
      setSelDiag(e.target.value)
      const selectedDiagnosis = props.diagnosis.find(
        (element) => element.id === parseInt(e.target.value)
      )
      setName(selectedDiagnosis.name || '')
      setDescription(selectedDiagnosis.description || '')
      setCategoryName(
        props.categories.find((e) => e.id === selectedDiagnosis.categoryId).name
      )
    }
  }

  return (
    <S.EntityComponent>
      <h1>Add a new Diagnosis:</h1>
      <label htmlFor="diagName">Unique name:</label>
      <S.Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New name..."
      />
      <label htmlFor="descr">Description:</label>
      <S.Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="New description..."
      />
      <label htmlFor="category">Choose a category:</label>
      <Select
        array={categoriesArray}
        onChange={(e) => setCategoryName(e.target.value)}
        defaultValue={categoryName}
      />
      <button onClick={sendPayloadToApi}>add or edit diagnosis.</button>
      <h1>Choose a diagnosis to edit:</h1>

      <Select
        array={diagnosisArray}
        onChange={loadDataForEdit}
        defaultValue={selDiag}
      />
      <h1>Select entity to delete:</h1>
      <DeleteEntitySelect array={props.diagnosis} entity={'diagnosis'}/>
    </S.EntityComponent>
  )
}

export default AddDiagnosis
