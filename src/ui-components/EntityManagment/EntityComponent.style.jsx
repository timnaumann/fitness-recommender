import styled from 'styled-components'

const baseClass = 'entity-component'
export const EntityComponent = styled.div.attrs({ className: baseClass })`
  display: grid;
  //gap: 1rem;
  grid-auto-flow: row;
  grid-template-rows: repeat(auto-fit, 2fr);

  place-items: center;
  color: #378299;

  h1 {
  }
  label {
    font-size: 1.3em;
  }
  * {
    margin: 0.5em;
    border-radius: 5px;
    border: #378299;
    word-break: break-word;
  }
  button {
    
  }
  button:hover {
    color: saddlebrown;
  }
  button:active {
    color: gray;
  }
`

export const EntityComponentButton = styled.button.attrs({ className: `${baseClass}__button` })`
  width: 30%;
  padding: 10px;
  margin: 8px 0;
  font-size: 1em;
  color: #378299;
  border-radius: 5px;
  border-collapse: collapse;
  border: 2px solid white;

  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 30%;
  padding: 10px;
`
