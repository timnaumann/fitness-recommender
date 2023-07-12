import PropTypes from 'prop-types'
import React from 'react'
import * as S from '@ui-components/Table/EntityTableComponent.style'

const EntityTableComponent = (props) => {
  if (props.entityToDisplay) {
    let counter = 0
    const arrayOfEntitys = []
    props.entityToDisplay.forEach((entity) =>
      Object.keys(entity)
        .forEach((key) => {
          if (!arrayOfEntitys.includes(key)) {
            arrayOfEntitys && arrayOfEntitys.push(key)
          }
        })
    )
    return (
      <S.ContentWrapper>
        <S.Table>
          <thead>
          <tr>
            <S.EntityName>{props.entityname}</S.EntityName>
            {arrayOfEntitys.map((key) => {
              return <th key={key}>{key}</th>
            })}
          </tr>
          </thead>
          <tbody>
          {props.entityToDisplay.map((entity, index) => {
            counter = counter + 1
            return (
              <tr key={index}>
                <td key={entity.id}>
                  {props.entityname}&nbsp;{counter}
                </td>
                {Object.values(entity)
                  .map((value, index) => {
                    return <td key={index}>{JSON.stringify(value)}</td>
                  })}
              </tr>
            )
          })}
          </tbody>
        </S.Table>
      </S.ContentWrapper>
    )
  }

  return null
}

EntityTableComponent.propTypes = {
  entityToDisplay: PropTypes.arrayOf(PropTypes.object),
  entityname: PropTypes.string,
}

export default EntityTableComponent
