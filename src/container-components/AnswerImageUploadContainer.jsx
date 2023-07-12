import React, { useCallback, useEffect, useState } from 'react'
import FileUpload from '@ui-components/EntityManagment/FileUpload'
import { uploadAnswerImage } from '@api/api-service'
import * as PropTypes from 'prop-types'
import { useSelectedLocale } from '@store/store-hooks'

const AnswerImageUploadContainer = (props) => {
  const [successfullyUploaded, setSuccessfullyUploaded] = useState(false)
  const [uploading, setUploading] = useState(false)
  const selectedLocale = useSelectedLocale()

  const reset = useCallback(() => {
    setSuccessfullyUploaded(false)
    setUploading(false)
  }, [])

  useEffect(() => {
    reset()
  }, [selectedLocale, reset])

  const uploadImageToServer = useCallback(async (image) => {
    setUploading(true)
    await uploadAnswerImage(image, props.answerId, selectedLocale)
    setUploading(false)
    setSuccessfullyUploaded(true)
  }, [props.answerId, selectedLocale])

  return <FileUpload
    uploadFileToServer={uploadImageToServer}
    uploading={uploading}
    successfullyUploaded={successfullyUploaded}
    reset={reset}
  />
}

AnswerImageUploadContainer.propTypes = {
  answerId: PropTypes.number.isRequired,
}

AnswerImageUploadContainer.defaultProps = {}

export default AnswerImageUploadContainer
