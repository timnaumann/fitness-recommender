import React, { useContext, useState } from 'react'
import { RecommenderProfileContext } from '@store/recommender-profile'
import { createQuestions, getRecommenderProfile } from '@api/api-service'
import RecommenderProfileActions from '@store/recommender-profile/RecommenderProfileActions'
import * as S from '@ui-components/EntityManagment/EntityComponent.style'
import {
    checkIfAValidValueIsSelected,
    getLastFlowPosition,
    getNumericArrayForSelect,
    getSelectArray,
} from '@ui-components/helper/helpers'
import Select from '@ui-components/Selects/StandardSelect'
import { LocaleContext } from '@store/locale'
import { DeleteEntitySelect } from '@ui-components/EntityManagment/Selects/DeleteEntitySelect'

const AddQuestion = (props) => {
    const [, dispatchRecommenderProfileAction] = useContext(
        RecommenderProfileContext
    )
    const [locale] = useContext(LocaleContext)
    const [name, setName] = useState('')
    const [label, setLabel] = useState('')
    const [widgetType, setWidgetType] = useState('')
    const [stageName, setStageName] = useState('')
    const [selQuestion, setSelQuestion] = useState('')

    const lastFlowPosition = getLastFlowPosition(props.qStages)
    const [flowPosition, setFlowPosition] = useState(lastFlowPosition)
    const flowPositionArray = getNumericArrayForSelect(lastFlowPosition)
    const questionsArray = getSelectArray('name', 'id', props.questions)
    const questionStageSelectArray = getSelectArray('name', 'id', props.qStages)

    // 1. get last flowposition, if null, get null
    // 2. give Selectarray flowposition + 1
    // if

    const payload = {
        name: name,
        label: label,
        widgetType: widgetType,
        questionFlowPosition: parseInt(flowPosition),
        stageName: props.qStages.find((el) => el.id === parseInt(stageName))?.name,
        locale: locale,
    }

    const sendPayloadToApi = async () => {
        if (checkIfAValidValueIsSelected([flowPosition])) {
            if (payload.name === '' || payload.label === '') {
                alert('Please fill in the needed inputs.')
            } else {
                if (window.confirm('Your on to change the value permanently.')) {
                    if (payload.stageName === null) {
                        delete payload.stageName
                    }

                    await createQuestions(payload)
                    const profile = await getRecommenderProfile(locale)
                    dispatchRecommenderProfileAction(
                        RecommenderProfileActions.setRecommenderProfile(profile)
                    )
                }
            }
        }
    }

    const loadDataForEdit = (e) => {
        if (e.target.value !== 'Select option') {
            setSelQuestion(e.target.value)
            const selectedQuestion = props.questions.find(
                (element) => element.id === parseInt(e.target.value)
            )
            setName(selectedQuestion.name)
            setLabel(selectedQuestion.label || '')
            setWidgetType(selectedQuestion.widgetType || '')
            setFlowPosition(selectedQuestion.questionFlowPosition)

            setStageName(
                questionStageSelectArray.find((el) => el.value === selectedQuestion.questionStageId)
                    ?.value
            )
        }
    }

    return (
        <S.EntityComponent>
            <h1> Add a new Question:</h1>
            <label htmlFor="questionName">Unique name:</label>
            <S.Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={'new question...'}
            />
            <label htmlFor="label">Label:</label>
            <S.Input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder={'new label...'}
            />
            <label htmlFor="widgettype">WidgetType:</label>
            <S.Input
                type="text"
                value={widgetType}
                onChange={(e) => setWidgetType(e.target.value)}
                placeholder={'new widgetType...'}
            />
            <label htmlFor="flowPosition">Select a Flowposition:</label>
            <Select
                array={flowPositionArray}
                onChange={(e) => setFlowPosition(e.target.value)}
                defaultValue={flowPosition}
                defaultOption={false}
            />
            <label htmlFor="questionStgae">Select a QuestionStage:</label>
            <Select
                array={questionStageSelectArray}
                onChange={(e) => setStageName(e.target.value)}
                defaultValue={stageName}
            />

            <button onClick={sendPayloadToApi}>add or edit Question.</button>
            <h1>Choose a Question to edit:</h1>
            <Select
                array={questionsArray}
                onChange={loadDataForEdit}
                defaultValue={selQuestion}
            />
            <h1>Select entity to delete:</h1>
            <DeleteEntitySelect array={props.questions} entity={'question'}/>
        </S.EntityComponent>
    )
}

export default AddQuestion
