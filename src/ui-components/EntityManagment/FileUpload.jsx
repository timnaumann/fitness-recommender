import React, { useCallback, useRef, useState } from 'react'
import * as S from './FileUpload.style'
import { StandardButton } from '@ui-components/Buttons'
import * as PropTypes from 'prop-types'

const KILO_BYTES_PER_BYTE = 1024

const convertBytesToKB = (bytes) =>
  Math.round(bytes / KILO_BYTES_PER_BYTE)

const FileUpload = ({
  uploadFileToServer,
  reset,
  successfullyUploaded
}) => {

  const fileInputField = useRef(null)
  const [file, setFile] = useState(null)

  const handleNewFileUpload = useCallback((e) => {
    const { files } = e.target
    if (files.length) {
      setFile(files[0])
    }
    reset()
  }, [setFile, reset])

  return (
    <S.FileUploadContainer>
      <S.DragDropText>Click or Drag and Drop your image here</S.DragDropText>
      <S.FormField
        type="file"
        ref={fileInputField}
        title=""
        value=""
        onChange={handleNewFileUpload}
      />
      {file &&
      <S.FilePreviewContainer>
        <span>To Upload</span>
        <S.PreviewList>

          <S.PreviewContainer>
            <S.ImageWrapper>
              <S.ImagePreview
                src={URL.createObjectURL(file)}
              />
            </S.ImageWrapper>
            <S.FileMetaData successfullyUploaded={successfullyUploaded}>
              <span>{file.name}</span>
              <S.UploadIndicator
                successfullyUploaded={successfullyUploaded}>Uploaded</S.UploadIndicator>
              <span>{convertBytesToKB(file.size)} kb</span>

              <S.RemoveFileIcon onClick={() => {
                setFile(null)
                reset()
              }}>
                Remove
              </S.RemoveFileIcon>
            </S.FileMetaData>
          </S.PreviewContainer>

        </S.PreviewList>
        <S.UploadButton
          label="Upload to Server"
          as={StandardButton}
          onClick={() => uploadFileToServer(file)}
        />
      </S.FilePreviewContainer>
      }

    </S.FileUploadContainer>
  )
}

FileUpload.propTypes = {
  uploadFileToServer: PropTypes.func,
  successfullyUploaded: PropTypes.bool,
  reset: PropTypes.func,
}

FileUpload.defaultProps = {
  uploadFileToServer: () => {},
  successfullyUploaded: false,
  reset: () => {}
}

export default FileUpload
