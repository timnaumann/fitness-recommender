import * as S
  from '@ui-components/EntityManagment/AnswerDiagonsisDetails/SetAnswerDiagnosisDetails/SetAnswerDiagnosisDetails.style.jsx'
import PropTypes from 'prop-types'
import Select from '../../../Selects/StandardSelect'
import React, { useContext, useState } from 'react'
import {
  checkIfAValidValueIsSelected,
  checkIfRessourceIsAvailableAndAlert,
  createRessourcesArray,
  getRessourceStatus,
  getSelectArray,
} from '@ui-components/helper/helpers'
import { createAnswerDiagnosisDetail, } from '../../../../api/api-service'
import * as D from '@ui-components/EntityManagment/EntityComponent.style'
import { RecommenderProfileContext } from '@store/recommender-profile'
import { LocaleContext } from '@store/locale'

const SetAnswerDiagnosisDetails = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [significance, setSignificance] = useState('')
  //functions

  const getSelectedDiagnosisFromDiagnosisArray = () => {
    if (props.selectedDiagnosis > 0) {
      return (
        props.diagnosis &&
        props.diagnosis.find(
          (diagnosis) => diagnosis.id == props.selectedDiagnosis
        ).name
      )
    }
    return null
  }

  const getSelectedAnswerFromAnswerArray = () => {
    if (props.assignment > 0) {
      return (
        props.answers &&
        props.answers.find((answer) => answer.id == props.assignment).name
      )
    }
    return null
  }

  const answersRessourceArray = createRessourcesArray(props.answers, 'answers')
  const diagnosisRessourceArray = createRessourcesArray(
    props.diagnosis,
    'diagnosis'
  )

  //   create significance ARray
  const createSignificanceArray = () => {
    const array = [...Array(10)
      .keys()].map((i) => i + 1)
    return array.map((element) => ({
      label: String(element),
      value: element
    }))
  }

  //   Send Payload To Api
  const sendPayloadToApi = async () => {
    if (
      checkIfRessourceIsAvailableAndAlert(
        getRessourceStatus([
          ...answersRessourceArray,
          ...diagnosisRessourceArray,
        ])
      )
    ) {
      if (checkIfAValidValueIsSelected([selectedAnswer, significance])) {
        if (window.confirm('Your on to change the value permanently.')) {
          const payload = {
            significance: significance,
            diagnosisId: props.selectedDiagnosis,
            answerId: selectedAnswer,
          }
          await createAnswerDiagnosisDetail(payload)

          await props.updateAnswerDiagnosisDetails()
        }
      }
    }
  }

  //Select Array
  const selectAnswerArray = getSelectArray('name', 'id', props.answers)
  const selectSignificanceArray = createSignificanceArray()

  //render Function

  return (
    <S.SetAnswerDiagnosisDetails>
      <S.ShowDiagnosis>
        Select an Answer for Diagnosis:{' '}
        {getSelectedDiagnosisFromDiagnosisArray()}
      </S.ShowDiagnosis>
      <Select
        array={selectAnswerArray}
        onChange={(e) => setSelectedAnswer(e.target.value)}
        defaultValue={selectedAnswer}
      />
      <S.Label>
        Choose corresponding significance for Answer to Diagnosis:
      </S.Label>
      <Select
        array={selectSignificanceArray}
        onChange={(e) => setSignificance(e.target.value)}
        defaultValue={significance}
      />
      <D.EntityComponentButton onClick={sendPayloadToApi}>
        Safe Assignment
      </D.EntityComponentButton>
      <S.Label>Delete AnswerDiagnosisDetail:</S.Label>
      Relation to Delete: {getSelectedDiagnosisFromDiagnosisArray()} to{' '}
      {getSelectedAnswerFromAnswerArray()}
      <D.EntityComponentButton onClick={props.deleteEntity}>
        Delete
      </D.EntityComponentButton>
    </S.SetAnswerDiagnosisDetails>
  )
}

// PropTypes
SetAnswerDiagnosisDetails.propTypes = {
  answers: PropTypes.array,
  diagnosis: PropTypes.array,
  assignment: PropTypes.number,
  selectedDiagnosis: PropTypes.string,
  deleteEntity: PropTypes.func,
  updateAnswerDiagnosisDetails: PropTypes.func
}

export default SetAnswerDiagnosisDetails
