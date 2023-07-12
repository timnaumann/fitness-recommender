/* eslint-disable */

import * as S from '@ui-components/EntityManagment/EntityComponent.style'
import React, { useContext, useState } from 'react'
import { RecommenderProfileContext } from '@store/recommender-profile'
import { createCategory, getRecommenderProfile } from '@api/api-service'
import RecommenderProfileActions from '@store/recommender-profile/RecommenderProfileActions'
import Select from '@ui-components/Selects/StandardSelect'
import { getSelectArray } from '@ui-components/helper/helpers'
import { LocaleContext } from '@store/locale'
import { DeleteEntitySelect } from '@ui-components/EntityManagment/Selects/DeleteEntitySelect'

const CategoryInput = (props) => {
  const [name, setName] = useState('')
  const [label, setLabel] = useState('')
  const [description, setDescription] = useState('')
  const [sourceUrl, setSourceUrl] = useState('')
  const [, dispatchRecommenderProfileAction] = useContext(
    RecommenderProfileContext,
  )
  const [locale] = useContext(LocaleContext)
  const [selCat, setSelCat] = useState('')
  const categoriesArray = getSelectArray('name', 'name', props.categories)

  const payload = {
    name,
    label,
    description,
    sourceUrl,
    locale,
  }

  const sendPayloadToApi = async () => {
    if (
      payload.name === ''
      || payload.label === ''
      || payload.description === ''
    ) {
      alert('Please fill in the needed inputs.')
    } else if (window.confirm('Your on to change the value permanently.')) {
      await createCategory(payload)
      const profile = await getRecommenderProfile(locale)
      dispatchRecommenderProfileAction(
        RecommenderProfileActions.setRecommenderProfile(profile),
      )
    }
  }
  const loadDataForEdit = (e) => {
    setSelCat(
      props.categories.find((element) => element.name === e.target.value).name,
    )
    if (e.target.value !== 'Select option') {
      const selectedCategory = props.categories.find(
        (element) => element.name === e.target.value,
      )
      setName(selectedCategory.name || '')
      setLabel(selectedCategory.label || '')
      setDescription(selectedCategory.description || '')
      setSourceUrl(selectedCategory.sourceUrl || '')
    }
  }

  return (
    <S.EntityComponent>
      <h1>Add a new category:</h1>
      <label htmlFor="qName">Unique name:</label>
      <S.Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="new name..."
      />
      <label htmlFor="label">Label:</label>
      <S.Input
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="new label..."
      />
      <label htmlFor="descr">Description:</label>
      <S.Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="new description..."
      />
      <label htmlFor="sourceUrl">SourceUrl:</label>
      <S.Input
        value={sourceUrl}
        onChange={(e) => setSourceUrl(e.target.value)}
        placeholder="new sourceurl..."
      />
      <button onClick={sendPayloadToApi}>add or edit category.</button>
      <h1>Choose a category to edit:</h1>
      <Select
        array={categoriesArray}
        onChange={loadDataForEdit}
        defaultValue={selCat}
      />
      <h1>Select entity to delete:</h1>
      <DeleteEntitySelect array={props.categories} entity="category"/>
    </S.EntityComponent>
  )
}

export default CategoryInput
