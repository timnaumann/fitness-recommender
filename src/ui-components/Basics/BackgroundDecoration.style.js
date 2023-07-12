import styled from 'styled-components'

const baseClass = 'background-decoration'
export const BackgroundDecoration = styled.div.attrs({
  className: `${baseClass}`,
})`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.colors.turquoise};
  backdrop-filter: brightness(100%);
  mix-blend-mode: overlay;
  left: 0;
  top: 0;
  z-index: -1;
`


export const WhiteBackground = styled.div.attrs({
  className: `${baseClass}__white-background`,
})`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: white;
  left: 0;
  top:0;
  opacity: 25%;
`


