import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import * as S from './DiscreteSlider.style'

const DiscreteSlider = React.memo(({
                                       answers,
                                       heading,
                                       onAnswerSelection,
                                       selectedAnswers
                                   }) => {
    // we need the mapping here, otherwise the slider from material ui gets the categorical properties wrong
    const answersToValue = useRef([])
    const [selectedValue, setSelectedValue] = useState(null)

    useEffect(() => {
        if (selectedAnswers.length) {
            const answer = answersToValue.current.find(v => v.id === selectedAnswers[0].id)
            setSelectedValue(answer.value)
        }
    }, [selectedAnswers, answersToValue])

    const marks = answers.map((a, index) => {
        answersToValue.current.push({
            id: a.id,
            value: index
        })

        return {
            value: index,
            label: a.label
        }
    })

    const onValueCommitted = useCallback((event, value) => {
        const answer = answersToValue.current.find(e => e.value === value)
        onAnswerSelection(answer.id, true)
    }, [onAnswerSelection])

    const onValueChange = useCallback((event, value) => {
        setSelectedValue(value)
    }, [setSelectedValue])

    return (
        <S.DiscreteSlider>
            <S.Heading>{heading}</S.Heading>
            <S.SliderComponent
                marks={marks}
                onChangeCommitted={onValueCommitted}
                min={answersToValue.current.length && answersToValue.current[0].value}
                max={answersToValue.current.length && answersToValue.current[answers.length - 1].value}
                step={null}
                onChange={onValueChange}
                value={selectedValue}
            >
            </S.SliderComponent>
        </S.DiscreteSlider>
    )
})

DiscreteSlider.propTypes = {
    heading: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.object),
    onAnswerSelection: PropTypes.func,
    // we assume a max of 1 selected answers
    selectedAnswers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.number,
    })),
}

DiscreteSlider.defaultProps = {
    heading: '',
    answers: [],
    selectedAnswers: [],
}

export default DiscreteSlider
