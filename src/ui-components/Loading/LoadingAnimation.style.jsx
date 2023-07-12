import styled from 'styled-components'

const baseClass = 'loading-animation'
export const LoadingAnimation = styled.div.attrs({ className: baseClass })`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 1;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: rgba(100, 100, 100, .82);
  backdrop-filter: blur(5px);
`

export const LoadingBox = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2em;
  background-color: rgba(10, 11, 10, .7);
`

export const AnimatedImage = styled.div`
  width: 100%;
  height: auto;
`

