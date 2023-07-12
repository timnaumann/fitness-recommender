import styled, { css } from 'styled-components'
import * as bp from '@breakpoints'
import { SelectionNoButton, SelectionYesButton } from '@ui-components/Buttons'

const baseClass = 'summary'
export const Summary = styled.div.attrs({ className: `${baseClass}` })`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 35px;


  height: 100%;
  width: 100%;

  counter-reset: testResults;
  overflow: auto;

  @media ${bp.mediumUp} {
    justify-content: space-around;
  }
`

export const ContentWrapper = styled.div.attrs({
  className: `${baseClass}__content-wrapper`,
})`
  width: 100%;
  display: flex;
  grid-gap: 50px;
  flex-direction: column;
  align-items: center;

  padding: 10px 10px 20px 10px;

  max-width: 500px;

  @media ${bp.mediumUp} {
    width: 100%;
    max-width: 100%;
    max-height: 800px;

    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-around;

    grid-gap: 20px;
  }
`

export const Tests = styled.div.attrs({ className: `${baseClass}__tests` })`
  position: relative;

  display: flex;
  flex-direction: column;
  grid-gap: 20px;

  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media ${bp.mediumUp} {
    max-width: 750px;
    max-height: 500px;

    justify-content: start;
    overflow: auto;
    padding: 30px 50px 10px 50px;
    grid-gap: 25px
  }
`

export const TestContent = styled.div.attrs({
  className: `${baseClass}__test-content`,
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;

  @media ${bp.mediumUp} {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    grid-gap: 30px;
  }


`

export const TestLabel = styled.div.attrs({
  className: `${baseClass}__test-label`,
})`
  counter-increment: testResults;

  display: flex;
  align-items: center;
  
  font-size: 24px;
  color: ${(props) => props.theme.textColorPrimary};

  @media ${bp.mediumUp} {
    font-size: 35px;
  }

  @media ${bp.largeUp} {
    font-size: 45px;
  }
`

export const TestResults = styled.div.attrs({
  className: `${baseClass}__test-results`,
})`
  position: relative;
  justify-items: end;
  align-items: center;
  padding: 0;

  @media ${bp.largeUp} {
    padding: 40px;
    justify-items: center;
  }
`

const buttonSpecs = css`
  cursor: auto;
  pointer-events: none;

`

export const TestResultYesButton = styled(SelectionYesButton)
  .attrs({
    className: `${baseClass}__test-result-yes`,
  })`
  ${buttonSpecs};
`

export const TestResultNoButton = styled(SelectionNoButton)
  .attrs({
    className: `${baseClass}__test-result-no`,
  })`
  ${buttonSpecs};
`
