import React, { useCallback, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import ReviewDropDown from '@ui-components/Questions/DiagnosisReview/ReviewDropDown'
import VideoWrapper from '@ui-components/Basics/VideoWrapper'
import ExplanationDropDown from '@ui-components/Questions/DiagnosisTest/ExplanationDropDown'
import { useI18n } from '@store/store-hooks'
import RecommendationButtonContainer from '@container-components/RecommendationButtonContainer'
import { throttle } from '@ui-components/Pages/RecommendationStage/helper'
import ReviewTiles from '@ui-components/Questions/DiagnosisReview/ReviewTiles'
import { isBreakpointActive, smallRange } from '@breakpoints'

import * as S from './ReviewPanel.style'

const ReviewPanel = React.memo((props) => {
    const i18n = useI18n()

    const [isMobile, setIsMobile] = useState(false)
    const [userSelection, setUserSelectionAnswer] = useState(false)

    const diagnosisTestDescriptionHeading =
        i18n?.generic?.diagnosisTestDescriptionHeading

    const items = useMemo(() => props.answers.map(a => ({
        id: a.id,
        label: a.label,
    })), [props.answers])

    useEffect(() => {
        if (props.selectedAnswers && props.selectedAnswers.length) {
            const selectedAnswerId = props.selectedAnswers[0].id
            setUserSelectionAnswer(props.answers.find(a => a.id === selectedAnswerId))
        }
    }, [props.selectedAnswers, props.answers])

    const onSelect = useCallback((answerId) => {
        props.onAnswerSelection(answerId, true)
        setUserSelectionAnswer(props.answers.find(a => a.id === answerId))
    }, [props.answers])

    useEffect(() => {
        setIsMobile(isMobileBreakpointActive())
    }, [])

    window.addEventListener('resize', throttle(() => {
        setIsMobile(isMobileBreakpointActive())
    }, 100))

    return (
        <S.ReviewPanel>
            {
                isMobile ? (
                    <ReviewDropDown
                        selectedAnswerId={userSelection?.id}
                        onSelect={onSelect}
                        fallbackLabel={props.heading}
                        items={items}
                    />
                ) : (
                    <ReviewTiles
                        selectedAnswerId={userSelection?.id}
                        items={items}
                        onTileClick={onSelect}
                    />
                )
            }
            {userSelection && (
                <S.SourceWrapper>
                    <S.Video
                        key={userSelection?.sourceUrl}
                        as={VideoWrapper}
                        sourceUrl={userSelection?.sourceUrl}
                        shouldLoadVideo={false}
                    />

                    <S.TextWrapper>
                        <S.Description>{userSelection.description}</S.Description>

                        <S.ExplanationDropdownWrapper>
                            <ExplanationDropDown
                                heading={diagnosisTestDescriptionHeading}
                                description={userSelection.description}
                            />
                        </S.ExplanationDropdownWrapper>

                        <RecommendationButtonContainer/>
                    </S.TextWrapper>

                </S.SourceWrapper>
            )
            }
        </S.ReviewPanel>
    )
})

const isMobileBreakpointActive = () => isBreakpointActive(smallRange)

ReviewPanel.propTypes = {
    questionId: PropTypes.number,
    questionName: PropTypes.string,
    heading: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.object),
    onAnswerSelection: PropTypes.func,
    selectedAnswers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.number,
    })),
}

ReviewPanel.defaultProps = {
    questionId: null,
    questionName: null,
    heading: '',
    answers: [],
    onAnswerSelection: null,
    selectedAnswers: null,
}

export default ReviewPanel
