import { useAnswers, useDiagnosis } from '@store/store-hooks'
import * as S
  from '@ui-components/EntityManagment/AnswerDiagonsisDetails/AnswerDiagnosisDetails.style.jsx'
import React, { useContext, useEffect, useState } from 'react'
import ShowAllAnswerDiagnosisDetails
  from './ShowAllAnswerDiagnosisDetails/ShowAllAnswerDiagnosisDetails'
import {
  deleteAnswerDiagnosisDetail,
  getAnswerDiagnosisDetails,
  getRecommenderProfile
} from '@api/api-service'
import { SetAnswerDiagnosisDetails } from './SetAnswerDiagnosisDetails'
import RecommenderProfileActions from '../../../store/recommender-profile/RecommenderProfileActions'
import { LocaleContext } from '@store/locale'
import { RecommenderProfileContext } from '@store/recommender-profile'

const AnswerDiagnosisDetails = () => {
  //init
  const [locale] = useContext(LocaleContext)
  const [, dispatchRecommenderProfileAction] = useContext(
    RecommenderProfileContext
  )

  //get Answers
  const answers = useAnswers()
  //get Diagnosis
  const diagnosis = useDiagnosis()
  //get AnswerDiagnosisDetails
  const [allAnswerDiagnosisDetails, setAllAnswerDiagnosisDetails] = useState(
    []
  )
  //state for Delete AnswerDiagnosisDetail
  const [assignment, setAssignment] = useState(null)

  // state for selected Diagnosis
  const [selectedDiagnosis, setSelectedDiagnosis] = useState('')
  // fetch Data
  useEffect(() => {
    const getAllAnswerDiagnosisDetailsFunc = async () => {
      const response = await getAnswerDiagnosisDetails()
      setAllAnswerDiagnosisDetails(response)
    }
    getAllAnswerDiagnosisDetailsFunc()
  }, [])

  const updateAnswerDiagnosisDetails = async () => {
    const response = await getAnswerDiagnosisDetails()
    setAllAnswerDiagnosisDetails(response)
  }

  const deleteEntity = async () => {
    if (assignment !== 'no relation assigned') {
      if (window.confirm('Your on to change the value permanently.')) {
        await deleteAnswerDiagnosisDetail(assignment)

        // need to reload recommender profile?
        const profile = await getRecommenderProfile(locale)
        dispatchRecommenderProfileAction(
          RecommenderProfileActions.setRecommenderProfile(profile)
        )
        setAssignment('no relation assigned')

        await updateAnswerDiagnosisDetails()
      }
    } else {
      alert('Please select an relation to delete.')
    }
  }

  return (
    <S.AnswerDiagnosisDetails>
      {/* Show All Answer To Diagnosis Detail - assignments */}
      <ShowAllAnswerDiagnosisDetails
        setAssignment={setAssignment}
        answers={answers}
        diagnosis={diagnosis}
        answerDiagnosisDetails={allAnswerDiagnosisDetails}
        selectedDiagnosis={selectedDiagnosis}
        setSelectedDiagnosis={setSelectedDiagnosis}
      />

      {/* Select Answer To Diagnosis Detail with sensitivity?  */}
      <SetAnswerDiagnosisDetails
        assignment={assignment}
        answers={answers}
        diagnosis={diagnosis}
        selectedDiagnosis={selectedDiagnosis}
        setAssignment={setAssignment}
        deleteEntity={deleteEntity}
        updateAnswerDiagnosisDetails={updateAnswerDiagnosisDetails}
      />
    </S.AnswerDiagnosisDetails>
  )
}

const exportResult = {
  name: 'AnswerDiagnosisDetails',
  Component: AnswerDiagnosisDetails,
}

export default exportResult
