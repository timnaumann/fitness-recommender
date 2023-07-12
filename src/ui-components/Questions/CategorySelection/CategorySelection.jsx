import React from 'react'
import PropTypes from 'prop-types'

import * as S from './CategorySelection.style'
import ImageTileWrapper from '@ui-components/Questions/CategorySelection/ImageTileWrapper'
import { useI18n } from '@store/store-hooks'

const CategorySelection = React.memo((props) => {
  const i18n = useI18n()
  const steps = i18n?.generic?.categoryPageSteps || []

  return (
    <S.CategorySelection>
      <S.ImageTileWrapper>
        <ImageTileWrapper selectedCategoryId={props.selectedCategoryId}
                          categories={props.categories}
                          onCategorySelection={props.onCategorySelection}>
        </ImageTileWrapper>
      </S.ImageTileWrapper>
      <S.Heading>
        {
          steps.map((s, index) => <React.Fragment key={s}>
            <S.HeadingStep>
              {`${index + 1}. ${s}`}
            </S.HeadingStep>
            {index !== steps.length - 1 && <S.HeadingSeparator/>}
          </React.Fragment>)
        }
      </S.Heading>
    </S.CategorySelection>
  )
})

CategorySelection.propTypes = {
  heading: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.object),
  onCategorySelection: PropTypes.func,
  selectedCategoryId: PropTypes.number,
}

CategorySelection.defaultProps = {
  heading: '',
  categories: [],
  onCategorySelection: null,
  selectedCategoryId: null,
}

export default CategorySelection
