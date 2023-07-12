import styled from 'styled-components'

export const MainNavbar = styled.div`
  z-index: 1000;
`
export const NavbarWrapper = styled.div`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-template-rows: auto;
  box-sizing: border-box;
  align-items: center;
  grid-gap: 0.2em;
`

export const Icon = styled.div`
  grid-column: 1/2;
  padding: 0.5em;
  z-index: 2000;

  &.normalNavbar {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: start;
    align-items: center;
    transition: all 0.2s ease-in;
  }

  &.scrolledNavbar {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 50%;
  }
`
