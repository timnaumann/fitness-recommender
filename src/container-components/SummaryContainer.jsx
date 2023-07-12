import React, { useEffect } from 'react'

import { useAnswers } from '@store/store-hooks'
import { Summary } from '@ui-components/Summary'
import { Stage } from '@ui-components/Pages/QuestionsStage'
import {
  useGetSummaryOfCategorySelection,
  useRetrieveUserProfileSummary
} from '@container-components/container-hooks'

const SummaryContainer = React.memo(() => {
  const getSummary = useRetrieveUserProfileSummary()
  const summary = useGetSummaryOfCategorySelection()
  const answers = useAnswers()

  useEffect(() => {
    getSummary()
  }, [getSummary])

  const diagnosisTests = summary?.map(({
    id,
    value
  }) => {
    const answerLabel = answers.find((a) => a.id === id).label
    return {
      label: answerLabel,
      value,
    }
  })

  return (
    <Stage>
      <Summary diagnosisTests={diagnosisTests} nextPhase={'/recommendations'}/>
    </Stage>
  )
})

SummaryContainer.propTypes = {}

SummaryContainer.defaultProps = {}

export default SummaryContainer
