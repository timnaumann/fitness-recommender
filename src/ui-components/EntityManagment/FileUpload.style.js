import styled from 'styled-components'
import { StandardButton } from '@ui-components/Buttons'

export const FileUploadContainer = styled.section`
  position: relative;
  margin: 25px 0 15px;
  border: 2px dotted lightgray;
  padding: 35px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`

export const FormField = styled.input`
  font-size: 18px;
  display: block;
  text-transform: none;
  position: relative;
  width: 100%;
  height: 70px;
  margin: 0;
  cursor: pointer;
  border: 2px solid #3498db;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 2px 2px 9px 6px #00000045;
  }
`

export const DragDropText = styled.p`
  font-weight: bold;
  letter-spacing: 2.2px;
  margin-top: 0;
  text-align: center;
`

export const FilePreviewContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 14px;
  }
`

export const PreviewList = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`

const imageDim = '250px'
export const FileMetaData = styled.div`
  display: ${(p) => (p.successfullyUploaded ? 'flex' : 'none')};;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  width: ${imageDim};
  height: ${imageDim};
  border-radius: 6px;
  color: white;
  font-weight: bold;
  background-color: rgba(5, 5, 5, 0.55);

  &:hover {
    display: flex;
  }

  aside {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
`

export const UploadIndicator = styled.div`
  position: absolute;
  margin: auto;
  display: ${(p) => (p.successfullyUploaded ? 'block' : 'none')};
  font-size: 25px;
  color: white;
  left: 0;
  right: 0;
  top: 50%;
  text-align: center;
`

export const RemoveFileIcon = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;

  &:hover {
    transform: scale(1.1);
  }
`

export const PreviewContainer = styled.div`
  width: ${imageDim};
  height: ${imageDim};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  box-sizing: border-box;
  margin-bottom: 50px;
  position: relative;

  &:hover {
    opacity: 0.55;

    ${FileMetaData} {
      display: flex;
    }
  }

  & > div:first-of-type {
    height: 100%;
    position: relative;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
`

export const ImagePreview = styled.img`
  border-radius: 6px;
  width: 100%;
  height: 100%;
  margin: 0;
`

export const UploadButton = styled(StandardButton)`
  font-size: 18px;
  margin: 0;

  &:hover {
    box-shadow: 2px 2px 9px 6px #00000045;
    border: none;
    color: white !important;
  }
`
