import styled from 'styled-components'

const baseClass = 'setting-bar'

export const SettingBar = styled.div.attrs({ className: `${baseClass}` })`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1fr;
  grid-gap: 10px;


  padding-bottom: 15px;
  border-bottom: 1px solid #6c757d;;
`
export const Heading = styled.div.attrs({ className: `${baseClass}_heading` })`
  grid-row-start: 1;
  font-size: 18px;
`

export const Description = styled.div.attrs({ className: `${baseClass}_description` })`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 3;

  opacity: 100%;

  font-weight: 300;
  font-size: 14px;
  color: rgba(0, 0, 0, .87);
`
