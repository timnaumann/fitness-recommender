import styled from 'styled-components'

const baseClass = 'review-tiles'
export const ReviewTiles = styled.div.attrs({ className: `${baseClass}` })`
  transition: all .2s ease-in-out;
  height: auto;
  position: relative;
  display: flex;
  grid-gap: 20px;
  flex:1;
  overflow: auto;
  width: 100%;
  padding: 15px 0 15px 0;
  
  justify-content: start;
  align-items: stretch;
  margin-bottom: 30px;
`
