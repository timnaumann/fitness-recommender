import React, { useMemo } from 'react'

import {
  useI18n,
  useQuestions,
  useSelectedCategoryId,
  useSideEffects,
  useSortedQuestionStages,
} from '@store/store-hooks'

import Stage from '@ui-components/Pages/QuestionsStage/Stage'
import QuestionContainer from '@container-components/QuestionContainer'
import CategorySelectionContainer from '@container-components/CategorySelectionContainer'
import QuestionStageWrapper from '@ui-components/Pages/QuestionsStage/QuestionStageWrapper'
import SummaryContainer from '@container-components/SummaryContainer'
import { useGenericI18nKey } from '@store/store-helper'
import { useShouldShowSummary } from '@container-components/container-helper'

const QuestionStagesContainer = () => {
  const i18n = useI18n()
  const stages = useSortedQuestionStages()
  const selectedCategoryId = useSelectedCategoryId()
  const questions = useQuestions()

  const shouldShowSummary = useShouldShowSummary()

  const categoryStageHeading = useGenericI18nKey('categoryPageHeading')
  const diagnosisTestSummaryHeading = useGenericI18nKey('diagnosisTestSummaryHeading')

  const sideEffects = useSideEffects()

  const questionsOfCategory = useMemo(
    () => getQuestionsOfCategory(selectedCategoryId, questions),
    [selectedCategoryId, questions]
  )
  const stagesOfCategory = useMemo(
    () =>
      getStagesThatContainQuestionsOfCategory(
        selectedCategoryId,
        stages,
        questionsOfCategory
      ),
    [selectedCategoryId, stages, questionsOfCategory]
  )

  const questionStageComponents = useMemo(() => stagesOfCategory.map((stage) => {
    let visible = true
    const stageSideEffects = sideEffects?.questionStages?.[stage.name]
    if (stageSideEffects) {
      visible = stageSideEffects.visible ?? true
    }
    const stageQuestions = getQuestionsOfStageByStageId(
      stage.id,
      questionsOfCategory
    )
    return (visible && <Stage key={stage.id}>
        {stageQuestions &&
        stageQuestions.map((question) => {
          return (
            <QuestionContainer key={question.id} question={question}/>
          )
        })}
      </Stage>
    )
  }), [sideEffects, stagesOfCategory])

  const stageHeadings = useMemo(() => [
      categoryStageHeading, ...getStageHeadings(stagesOfCategory, i18n, sideEffects),
      diagnosisTestSummaryHeading
    ],
    [categoryStageHeading, stagesOfCategory, i18n, sideEffects])

  return (
    <QuestionStageWrapper stageHeadings={stageHeadings}>
      <CategorySelectionContainer/>
      {questionStageComponents}

      {shouldShowSummary && (
        <SummaryContainer/>
      )}
    </QuestionStageWrapper>
  )
}

const getStageHeadings = (stages, i18n, sideEffects) => {
  const questionStageSiteEffects = sideEffects?.questionStages
  let notVisibleQuestionStages = []

  if (questionStageSiteEffects) {
    notVisibleQuestionStages = Object.entries(questionStageSiteEffects)
      .filter(([, value]) => !value.visible)
      .map(([key,]) => key)
  }

  const filteredStagesByVisibility = stages.filter(s => !notVisibleQuestionStages.includes(s.name))
  return filteredStagesByVisibility.map((stage) => i18n?.questionStages[stage.id]?.heading)
}

const getStagesThatContainQuestionsOfCategory = (
  categoryId,
  stages,
  questionsOfCategory
) =>
  stages.filter((s) =>
    s.questions.some((question) =>
      questionsOfCategory.find((q) => question.id === q.id)
    )
  )

const getQuestionsOfCategory = (categoryId, questions) =>
  questions.filter((q) => q.categories.find((c) => c.id === categoryId))

const getQuestionsOfStageByStageId = (stageID, questions) =>
  questions.filter((q) => q.questionStageId === stageID)

QuestionStagesContainer.propTypes = {}

QuestionStagesContainer.defaultProps = {}

export default QuestionStagesContainer
