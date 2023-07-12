import styled from 'styled-components'
import {BackgroundDecoration} from '@ui-components/Basics/BackgroundDecoration.style'

export const StandardButtonWithBackgroundDecoration = styled.button`
  transition: all .15s ease-in;
  cursor: pointer;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  padding: 8px;

  text-decoration: none;
  background-color: unset;

  font-size: 3rem;
  font-family: ${(props) => props.theme.fonts};

  width: 100%;
  max-width: 400px;
  text-shadow: 3px 1px 2px rgba(0, 0, 0, 0.25);

  border: 3px solid transparent;

  position: relative;

  :hover {
    color: ${(props) => props.theme.colors.white};;
    opacity: 1;
    border: 3px solid ${(props) => props.theme.colors.white};
  }

  :focus {
    outline: 0;
  }
`


export const Background = styled(BackgroundDecoration)`
  backdrop-filter: brightness(175%);
`
