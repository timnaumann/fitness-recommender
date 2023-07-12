import React, { useContext, useState } from 'react'
import { RecommenderProfileContext } from '@store/recommender-profile'
import { createAnswer, getRecommenderProfile } from '@api/api-service'
import RecommenderProfileActions from '@store/recommender-profile/RecommenderProfileActions'
import Select from '@ui-components/Selects/StandardSelect'
import { getSelectArray } from '@ui-components/helper/helpers.js'
import {
  checkIfAValidValueIsSelected,
  checkIfRessourceIsAvailableAndAlert,
  createRessourcesArray,
  getRessourceStatus,
} from '@ui-components/helper/helpers'
import { LocaleContext } from '@store/locale/locale'
import { DeleteEntitySelect } from '@ui-components/EntityManagment/Selects/DeleteEntitySelect'
import AnswerImageUploadContainer from '@container-components/AnswerImageUploadContainer'

import * as S from '@ui-components/EntityManagment/EntityComponent.style'

const AddAnswers = (props) => {
  const [, dispatchRecommenderProfileAction] = useContext(
    RecommenderProfileContext
  )
  const [locale] = useContext(LocaleContext)
  const [name, setName] = useState('')
  const [questionName, setQuestionName] = useState('')
  const [label, setLabel] = useState('')
  const [description, setDescription] = useState('')
  const [sourceUrlOfAnswer, setSourceUrl] = useState('')

  const [selectedAnswerName, setSelectedAnswerName] = useState('')

  const questionsSelectArray = getSelectArray('name', 'name', props.questions)
  const answersSelectArray = getSelectArray('name', 'name', props.answers)

  const questionRessourceArray = createRessourcesArray(
    props.questions,
    'questions'
  )
  const payload = {
    name: name,
    questionName: questionName,
    label: label,
    description: description,
    sourceUrl: sourceUrlOfAnswer,
    locale: locale,
  }

  const sendPayloadToApi = async () => {
    if (
      checkIfRessourceIsAvailableAndAlert(
        getRessourceStatus(questionRessourceArray)
      )
    ) {
      if (checkIfAValidValueIsSelected([questionName])) {
        if (payload.name === '' || payload.questionName === '') {
          alert('Please fill in the needed inputs.')
        } else {
          if (window.confirm('Your on to change the value permanently.')) {
            await createAnswer(payload)
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
      setSelectedAnswerName(
        props.answers.find((element) => element.name === e.target.value).name
      )
      const selectedAnswer = findAnswerByName(props.answers, e.target.value)

      setName(selectedAnswer.name || '')
      setQuestionName(
        props.questions.find((e) => e.id === selectedAnswer.questionId[0])?.name ||
        ''
      )
      setLabel(selectedAnswer.label || '')
      setDescription(selectedAnswer.description || '')
      setSourceUrl(selectedAnswer.sourceUrl || '')
    }
  }

  return (
    <S.EntityComponent>
      <h1>Add a new Answer:</h1>
      <label>Unique name:</label>
      <S.Input
        value={name}
        type={'text'}
        onChange={(e) => setName(e.target.value)}
        placeholder={'new name...'}
      />
      <label>Select the corresponding Question:</label>
      <Select
        array={questionsSelectArray}
        onChange={(e) => setQuestionName(e.target.value)}
        defaultValue={questionName}
      />
      <label>Label:</label>
      <S.Input
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder={'new label...'}
      />
      <label>Description:</label>
      <S.Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={'new description...'}
      />
      <label>SourceUrl:</label>
      <S.Input
        value={sourceUrlOfAnswer}
        onChange={(e) => setSourceUrl(e.target.value)}
        placeholder={'new sourceurl...'}
      />
      <label>Add an Image:</label>

      <S.EntityComponentButton onClick={sendPayloadToApi}>add or edit
        Answer.</S.EntityComponentButton>
      <h1>Choose a Answer to edit:</h1>
      <Select
        array={answersSelectArray}
        onChange={loadDataForEdit}
        defaultValue={selectedAnswerName}
      />
      <h2>ImageUpload (only available if you selected an answer):</h2>
      {selectedAnswerName !== '' && <AnswerImageUploadContainer
        answerId={selectedAnswerName && findAnswerByName(props.answers, selectedAnswerName).id}/>}
      <h1>Select entity to delete:</h1>
      <DeleteEntitySelect array={props.answers} entity={'answer'}/>
    </S.EntityComponent>
  )
}

const findAnswerByName = (answers, name) => answers.find(
  (element) => element.name === name
)

export default AddAnswers
