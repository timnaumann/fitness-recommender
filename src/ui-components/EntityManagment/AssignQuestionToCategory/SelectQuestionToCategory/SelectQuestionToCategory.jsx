import Select from '@ui-components/Selects/StandardSelect'
import * as S from '@ui-components/EntityManagment/EntityComponent.style'
import React, { useContext, useState } from 'react'
import {
  checkIfAValidValueIsSelected,
  checkIfRessourceIsAvailableAndAlert,
  createRessourcesArray,
  getRessourceStatus,
  getSelectArray,
} from '@ui-components/helper/helpers'
import {
  createQuestionToCategoryAssignment,
  deleteQuestionToCategoryAssignment,
  getRecommenderProfile,
} from '@api/api-service'
import RecommenderProfileActions from '@store/recommender-profile/RecommenderProfileActions'
import { RecommenderProfileContext } from '@store/recommender-profile'
import { LocaleContext } from '@store/locale'

const SelectQuestionToCategory = (props) => {
  const [locale] = useContext(LocaleContext)
  const [, dispatchRecommenderProfileAction] = useContext(
    RecommenderProfileContext
  )
  const [categoryId, setCategoryId] = useState('')
  const [questionId, setQuestionId] = useState('')
  const questionsArray = getSelectArray('name', 'id', props.questions)
  const categoriesArray = getSelectArray('name', 'id', props.categories)
  const questionRessourceArray = createRessourcesArray(
    props.questions,
    'questions'
  )
  const categoriesRessourceArray = createRessourcesArray(
    props.categories,
    'categories'
  )

  const sendPayloadToApi = async () => {
    if (
      checkIfRessourceIsAvailableAndAlert(
        getRessourceStatus([
          ...questionRessourceArray,
          ...categoriesRessourceArray,
        ])
      )
    ) {
      if (checkIfAValidValueIsSelected([categoryId, questionId])) {
        if (window.confirm('Your on to change the value permanently.')) {
          await createQuestionToCategoryAssignment(categoryId, questionId)
          const profile = await getRecommenderProfile(locale)
          dispatchRecommenderProfileAction(
            RecommenderProfileActions.setRecommenderProfile(profile)
          )
        }
      }
    }
  }

  const deleteEntity = async () => {
    if (props.assignment !== 'no relation assigned') {
      if (window.confirm('Your on to change the value permanently.')) {
        await deleteQuestionToCategoryAssignment(
          props.assignment.SelectedCategory,
          props.assignment.SelectedQuestion
        )
        const profile = await getRecommenderProfile(locale)
        dispatchRecommenderProfileAction(
          RecommenderProfileActions.setRecommenderProfile(profile)
        )
        props.setAssignment('no relation assigned')
      }
    } else {
      alert('Please select an relation to delete.')
    }
  }
  return (
    <S.EntityComponent>
      <Select
        array={categoriesArray}
        onChange={(e) => setCategoryId(e.target.value)}
        defaultValue={categoryId}
      />
      <Select
        array={questionsArray}
        onChange={(e) => setQuestionId(e.target.value)}
        defaultValue={questionId}
      />
      <button onClick={sendPayloadToApi}>Safe new assignment</button>
      <div>Selected Queston-To-Category-Relation:</div>
      <div>{JSON.stringify(props.assignment)}</div>
      <button onClick={deleteEntity}>Delete assignment</button>
    </S.EntityComponent>
  )
}

export default SelectQuestionToCategory
