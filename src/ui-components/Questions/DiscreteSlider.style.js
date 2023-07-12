import styled from 'styled-components'
import * as bp from '@breakpoints'
import { mainTheme } from '@breakpoints'

import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'

const baseClass = 'discrete-slider'
export const DiscreteSlider = styled.div.attrs({ className: `${baseClass}` })`
  padding: 0 11px 0 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0 auto 0;

  // dirty hacks to that the spaces look appropriate on mobile
  .MuiSlider-markLabel {
    max-width: 40px;
    display: block;
    white-space: break-spaces;
    margin-left: 15px;

    &:nth-last-child(2) {
      margin-left: -10px !important;
    }

    & ~ .MuiSlider-markLabel {
      word-wrap: break-word;
      max-width: fit-content;
      display: block;
      white-space: normal;
      margin-left: 0;
    }
  }
`

const styles = () => {
  return {
  root: {
    color: mainTheme.colors.turquoise,
    height: 8,
    marginBottom: 50,
  },
  mark: {
    height: 0,
  },
  markLabel: {
    marginTop: '10px',
    color: mainTheme.colors.white,
    textShadow: '2px 2px #00000045',
    top: 30,

    [`@media ${bp.mediumUp()}`]: {
      marginTop: '20px',
      fontSize: '20px',
    }
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: mainTheme.colors.white,
    border: 'none',
    marginTop: -1,
    boxShadow: '2px 2px 9px 6px #00000045',
    marginLeft: -9,

    '&:focus, &:hover, &$active': {
      boxShadow: '2px 2px 9px 6px #00000045',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 0,
    borderRadius: 0,
  },
  rail: {
    opacity: 1,
    height: 14,
    borderRadius: 20,
  },
}};

// CAUTION no Styled component
const SliderComp = withStyles(styles)(Slider)

export const SliderComponent = styled(SliderComp)
  .attrs({ className: `${baseClass}__component` })`
  max-width: 300px;

  @media ${bp.mediumUp} {
    max-width: 500px;
  }
`

export const Heading = styled.div.attrs({
  className: `${baseClass}__heading`,
})`
  ${(props) => props.theme.questionHeading}
`
