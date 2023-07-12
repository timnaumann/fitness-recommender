import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import * as S from './DescriptionPanel.style'
import { useI18n } from '@store/store-hooks'
import ExplanationDropDown from '@ui-components/Questions/DiagnosisTest/ExplanationDropDown'
import { SelectionNoButton, SelectionYesButton } from '@ui-components/Buttons'
import VideoWrapper from '@ui-components/Basics/VideoWrapper'
import { useRetrieveUserProfileSummary } from '@container-components/container-hooks'

const DescriptionPanel = React.memo((props) => {
  const getSummary = useRetrieveUserProfileSummary()

  const i18n = useI18n()

  const [selection, setSelection] = useState(null)
  const [selectionDone, setSelectionDone] = useState(false)

  // sets a preselection on render if for example a user-session is restored
  useEffect(() => {
    if (props.selectedValue !== null) {
      setSelection(!!props.selectedValue)
      setSelectionDone(true)
    }
  }, [props.selectedValue])

  const diagnosisTestDescriptionHeading =
    i18n?.generic?.diagnosisTestDescriptionHeading

  const setAnswer = useCallback(
    async (value) => {
      await props.onAnswerSelection(value)
      // not very clean to do this here but better than having an extra container comp ;)
      await getSummary()
    },
    [props]
  )

  const onYesSelection = useCallback(() => {
    setAnswer(true)
    setSelection(true)

    setSelectionDone(true)
  }, [setAnswer, setSelectionDone])

  const onNoSelection = useCallback(() => {
    setAnswer(false)
    setSelection(false)

    setSelectionDone(true)
  }, [setAnswer, setSelectionDone])

  return (
    <S.DescriptionPanel>
      <S.ContentWrapper>
        <S.DetailsWrapper>

          <S.SourceWrapper>
            <S.Video
              as={VideoWrapper}
              sourceUrl={props.source}
              shouldLoadVideo={true}
            />
          </S.SourceWrapper>

          <S.DetailsText>
            <S.Heading position={props.position}>{props.heading}</S.Heading>
            <S.Description>{props.description}</S.Description>

            <S.ExplanationDropdownWrapper>
              <ExplanationDropDown
                heading={diagnosisTestDescriptionHeading}
                description={props.description}
              />
            </S.ExplanationDropdownWrapper>

            <S.SelectionWrapper>
              <S.SelectionItemWrapper>
                <SelectionYesButton
                  selectionDone={selectionDone}
                  isSelected={selection}
                  onClick={onYesSelection}
                />
                <SelectionNoButton
                  selectionDone={selectionDone}
                  isSelected={selection === false}
                  onClick={onNoSelection}
                />
              </S.SelectionItemWrapper>
            </S.SelectionWrapper>
          </S.DetailsText>

        </S.DetailsWrapper>
      </S.ContentWrapper>
    </S.DescriptionPanel>
  )
})

DescriptionPanel.propTypes = {
  heading: PropTypes.string,
  source: PropTypes.string,
  description: PropTypes.string,
  position: PropTypes.number,
  onClick: PropTypes.func,
  selectedValue: PropTypes.number,
  answerName: PropTypes.string,
  questionName: PropTypes.string
}

DescriptionPanel.defaultProps = {
  heading: '',
  source: '',
  description: '',
  position: 1,
  onClick: null,
  selectedValue: null,
  answerName: null,
  questionName: null
}

export default DescriptionPanel
