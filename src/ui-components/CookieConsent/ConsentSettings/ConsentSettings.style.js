import styled from 'styled-components'

const baseClass = 'cookie-consent-settings'
export const ConsentSettings = styled.div.attrs({ className: `${baseClass}` })`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%; 

  top: 0;
  z-index: 1;
`

export const ModalBackground = styled.div.attrs({ className: `${baseClass}__modal-background` })`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: black;
  opacity: .45;
`

export const ModalContent = styled.div.attrs({ className: `${baseClass}__modal-content` })`
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  height: min-content;
  min-width: min-content;
  max-width: 300px;
  align-items: center;
  opacity: 100%;
  background-color: white;
  margin: auto;
`

export const Header = styled.div.attrs({ className: `${baseClass}__modalContent-header` })`
  display:flex;
  flex-direction: row;
  align-items:center;
  font-size: 20px;
  justify-content: center;
  user-select: none;
`

export const Heading = styled.div.attrs({ className: `${baseClass}__modalContent-heading` })`
  flex-grow: 2;
  font-size: 1.2em;
`

export const CloseButton = styled.button.attrs({ className: `${baseClass}__close-button` })`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`

export const StoreButton = styled.div.attrs({ className: `${baseClass}__store-button` })`
  width: 100%;
  max-width: 100%;
  font-size: 18px;
  border-radius: 5px;
  margin-bottom: 10px;

  :hover {
    opacity: 1;
    border: 3px solid transparent;
  }
`
