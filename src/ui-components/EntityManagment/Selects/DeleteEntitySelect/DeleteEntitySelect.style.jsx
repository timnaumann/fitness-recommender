import styled from 'styled-components'

export const DeleteEntitySelect = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(auto-fit, 2fr);
  place-items: center;
  margin: 0.5em;

  button {
    width: auto;
    padding: 10px;
    margin: 8px 0;
    font-size: 1em;
    color: #378299;
    border-radius: 5px;
    border-collapse: collapse;
    border: 2px solid white;
  }
`
