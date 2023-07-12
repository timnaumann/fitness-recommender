import PropTypes from 'prop-types'

const categoryWithI18n = PropTypes.shape({
  id: PropTypes.number,
  description: PropTypes.string,
  name: PropTypes.string,
  sourceUrl: PropTypes.string,
})

const categoriesWithI18n = PropTypes.arrayOf(categoryWithI18n)

const exportedObject = {
  categoryWithI18n,
  categoriesWithI18n,
}

export default exportedObject
