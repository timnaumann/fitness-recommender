import Select from '@ui-components/Selects/StandardSelect'
import React, { useContext, useState } from 'react'
import * as S from './DeleteEntitySelect.style'
import PropTypes from 'prop-types'
import { checkIfAValidValueIsSelected, getSelectArray, } from '@ui-components/helper/helpers'
import {
  deleteAnswer,
  deleteCategory,
  deleteDiagnosis,
  deleteQuestion,
  deleteQuestionStage,
  deleteRecommendation,
  getAllRecommendations,
  getRecommenderProfile,
} from '@api/api-service'
import { RecommenderProfileContext } from '@store/recommender-profile'
import { LocaleContext } from '@store/locale'
import RecommenderProfileActions from '@store/recommender-profile/RecommenderProfileActions'
import CategorySelection from '../../../Questions/CategorySelection/CategorySelection'

const DeleteEntitySelect = (props) => {
  const [, dispatchRecommenderProfileAction] = useContext(
    RecommenderProfileContext
  )

  const [locale] = useContext(LocaleContext)
  const [id, setId] = useState('')
  const deleteSelectArray = getSelectArray(props.propToShow, 'id', props.array)

  const deleteEntity = async () => {
    if (
      window.confirm(
        'Do really want to delete this entity with all languages attached?'
      )
    ) {
      if (
        checkIfAValidValueIsSelected([id]) &&
        deleteSelectArray.length !== 0
      ) {
        switch (props.entity) {
          case 'answer':
            await deleteAnswer(id)
            break

          case 'category':
            await deleteCategory(id)
            break

          case 'diagnosis':
            await deleteDiagnosis(id)
            break

          case 'question':
            await deleteQuestion(id)
            break

          case 'questionStage':
            await deleteQuestionStage(id)
            break

          case 'recommendation':
            await deleteRecommendation(id)
            break

          default:
            throw new Error(`No valid Entityname. ${props.entity}`)
        }
        const profile = await getRecommenderProfile(locale)
        dispatchRecommenderProfileAction(
          RecommenderProfileActions.setRecommenderProfile(profile)
        )
        if (props.entity === 'recommendation') {
          props.setAllRecomm(await getAllRecommendations())
        }
      }
    }
  }

  return (
    <S.DeleteEntitySelect>
      <Select
        array={deleteSelectArray}
        onChange={(e) => setId(e.target.value)}
        defaultValue={id}
      />
      <button onClick={deleteEntity}>{`delete ${props.entity}`}</button>
    </S.DeleteEntitySelect>
  )
}

DeleteEntitySelect.propTypes = {
  entity: PropTypes.string,
  array: PropTypes.array,
  recommendationDeletedSetter: PropTypes.func,
  propToShow: PropTypes.string,
}

DeleteEntitySelect.defaultProps = {
  entity: '',
  array: [],
  recommendationDeletedSetter: () => {},
  propToShow: 'name',
}

export default DeleteEntitySelect
