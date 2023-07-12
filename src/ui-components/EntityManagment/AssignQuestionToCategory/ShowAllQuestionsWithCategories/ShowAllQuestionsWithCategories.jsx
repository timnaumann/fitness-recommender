import React from 'react'
import * as S from './ShowAllQuestionsWithCategories.style'
import PropTypes from 'prop-types'

const ShowAllQuestionsWithCategories = (props) => {
  const entityNameA = 'categories'
  const entityNameB = 'question'

  return (
    <S.ShowAllQuestionsWithCategories>
      <table>
        <thead>
        <tr>
          <th>{entityNameA}</th>
          {props.questions.map((question, index) => {
            return <th key={index}>{entityNameB}</th>
          })}
        </tr>
        </thead>

        {props.categories &&
        props.categories.map((category, index) => {
          return (
            <tbody key={index}>
            <tr key={index + 1}>
              <td key={index + 1}>
                {category.name}, {category.id}
              </td>

              {props.questions &&
              props.questions.map((question, index) => {
                if (
                  question.categories.find(
                    (questionCategory) =>
                      questionCategory.id === category.id
                  )
                ) {
                  return (
                    <td key={index}>
                      {question.name}, {question.id}
                      <button
                        key={index + 1}
                        onClick={() =>
                          props.setAssignment({
                            SelectedCategory: category.id,
                            SelectedQuestion: question.id,
                          })
                        }
                      >
                        Delete
                      </button>
                    </td>
                  )
                }
                return null
              })}
            </tr>
            </tbody>
          )
        })}
      </table>
    </S.ShowAllQuestionsWithCategories>
  )
}

ShowAllQuestionsWithCategories.propTypes = {
  setter: PropTypes.func,
  question: PropTypes.array,
  categories: PropTypes.array,
}

export default ShowAllQuestionsWithCategories
