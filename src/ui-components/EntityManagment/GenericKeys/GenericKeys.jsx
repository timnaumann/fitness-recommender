import React, { useCallback, useContext, useState } from 'react'
import PropTypes from 'prop-types'

import * as S from './GenericKeys.style'
import JSONInput from 'react-json-editor-ajrm'
import { updateGenericKeys } from '@api/api-service'
import { LocaleContext } from '@store/locale'

const GenericKeys = (props) => {
  const [locale] = useContext(LocaleContext)
  const [value, setValue] = useState(null)

  const onUpdate = useCallback(async () => {
    await updateGenericKeys(value, locale)
    alert('Update successful')
  }, [value])

  return (
    <S.GenericKeys>
      <JSONInput
        placeholder={props.i18nKeys}
        height="550px"
        width="100%"
        onChange={(e) => {
          setValue(e.jsObject)
        }}
      />

      <button onClick={onUpdate}>Update Generic Keys</button>
    </S.GenericKeys>
  )
}

GenericKeys.propTypes = {
  i18nKeys: PropTypes.object,
}
GenericKeys.defaultProps = {
  i18nKeys: null
}

export default GenericKeys
