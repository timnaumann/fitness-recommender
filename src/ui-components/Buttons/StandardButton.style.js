import styled from 'styled-components'
import { darken } from 'polished'

export const StandardButton = styled.button`
  cursor: pointer;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  padding: 8px;

  opacity: 0.85;
  background-color: ${(props) => darken(0.35, props.theme.startPageBackgroundColor)};

  font-size: 2.3rem;
  font-family: ${(props) => props.theme.fonts};

  width: 100%;
  max-width: 400px;
  text-shadow: 3px 1px 2px rgba(0, 0, 0, 0.25);

  border: 3px solid transparent;

  :hover {
    opacity: 1;
    border: 3px solid ${(props) => props.theme.colors.white};
  }

  :focus {
    outline: 0;
  }
`
