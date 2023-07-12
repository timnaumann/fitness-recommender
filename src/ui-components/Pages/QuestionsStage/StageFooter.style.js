import styled from 'styled-components'

const baseClass = 'stage-footer'
export const StageFooter = styled.div.attrs({ className: `${baseClass}` })`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  grid-gap: 25px;
`

export const Item = styled.button.attrs({ className: `${baseClass}__item ` })`
  font-size: 26px;
  color: white;

  background-color: transparent;
  border: none;
  opacity: 0.85;

  // needed for the stacking context (so that the footer refers to the background image)
  transform: rotateY(0);
  mix-blend-mode: overlay;

  :hover {
    mix-blend-mode: exclusion;
    opacity: 1;
  }

`
