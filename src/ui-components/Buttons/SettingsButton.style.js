import styled from 'styled-components'

const baseClass = 'settings-button'
export const SettingsButton = styled.button.attrs({ className: `${baseClass}` })`
  position: relative;
  grid-row-start: 2;
  grid-column-start: 3;
  justify-self: center;
  align-self: center;

  border: none;
  background-color: transparent;

  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`
export const Background = styled.div.attrs({ className: `${baseClass}__background` })`
  width: 32px;
  height: 15px;
  background-color: ${(props) => (props.disabled || props.clicked ? '#1371c3' : '#ced4da')};
  border-radius: 15px;
  opacity: ${(props) => (props.disabled ? 0.20 : 0.32)};
  transition: .3s;

`
export const Dot = styled.div.attrs({ className: `${baseClass}__dot` })`
  transform: ${(props) => (props.clicked ? 'translateX(100%)' : 'translateX(0)')};
  transition: .3s;
  border-radius: 50%;
  background-color: ${(props) => (props.disabled || props.clicked ? '#1371c3' : '#6c757d')};
  opacity: ${(props) => (props.disabled ? 0.65 : 1)};

  width: 20px;
  height: 20px;
  position: absolute;
  top: -2px;
  left: 0;
`
