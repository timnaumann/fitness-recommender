import styled from 'styled-components'
import * as bp from '@breakpoints'

const baseClass = 'arrow'

const arrowStyles = {
  color: 'rgba(255,255,255,1)',
  headSize: '45px',
}

export const Arrow = styled.div.attrs({ className: `${baseClass}` })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;

  @media ${bp.mediumUp} {
    width: 120px;
    flex-direction: row;
  }
`

export const Head = styled.div.attrs({ className: `${baseClass}__head` })`
  width: 2px;
  height: ${(props) => props.size};
  background-color: ${props => props.borderColor ?? arrowStyles.color};
  transform: rotate(45deg);
  margin-top: calc((-${(props) => props.size} + 2px) / 3);
  border-radius: 3px;

  @media ${bp.mediumUp} {
    width: 0;
    height: 0;
    border-top: ${arrowStyles.headSize} solid transparent;
    border-bottom: ${arrowStyles.headSize} solid transparent;

    border-left: ${arrowStyles.headSize} solid ${props => props.borderColor ?? arrowStyles.color};
    margin-top: 0;
    transform: none;
    background-color: transparent;
    border-radius: 0;
  }
`

export const Body = styled.div.attrs({ className: `${baseClass}__body` })`
  width: 2px;
  height: ${(props) => props.size};
  background-color: ${props => props.borderColor ?? arrowStyles.color};
  transform: rotate(-45deg);
  border-radius: 3px;

  @media ${bp.mediumUp} {
    min-width: 55px;
    height: 30px;
    background-color: ${props => props.borderColor ?? arrowStyles.color};
    mix-blend-mode: overlay;
    transform: none;
    border-radius: 0;
  }
`
