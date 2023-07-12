import styled, { keyframes } from 'styled-components'

const baseClass = 'spinner'

const spinnerDim = {
  default: '60px',
  desktop: '50px',
}
export const Spinner = styled.div.attrs({ className: `${baseClass}` })`
  display: inline-block;
  position: relative;
  width: ${spinnerDim.default};
  height: ${spinnerDim.default};
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const SpinnerChild = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: calc(${spinnerDim.default} - 10px);
  height: calc(${spinnerDim.default} - 10px);
  margin: 8px;
  border: 6px solid;
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${(props) => props.theme.colors.white} transparent transparent
    transparent;
`

export const SpinnerFirstChild = styled(SpinnerChild)`
  animation-delay: -0.45s;
`
export const SpinnerSecondChild = styled(SpinnerChild)`
  animation-delay: -0.3s;
`
export const SpinnerThirdChild = styled(SpinnerChild)`
  animation-delay: -0.15s;
`
export const SpinnerForthChild = styled(SpinnerChild)``
