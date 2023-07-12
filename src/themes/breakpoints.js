export const registerBreakpoint = (name, value) => (props) => {
  if ((typeof value).toLowerCase() === 'function') {
    return value(props)
  }

  return value
}

const verySmallRange = registerBreakpoint('very-small-rang>e', [0, 450])
const smallRange = registerBreakpoint('small-range', [451, 1024])
const mediumRange = registerBreakpoint('medium-range', [1025, 1440])
const largeRange = registerBreakpoint('large-range', [1441, 1800])
const veryLargeRange = registerBreakpoint('very-large-range', [1801, 2500])

const lower = (range) => (p) => `${range(p)[0]}px`
const upper = (range) => (p) => `${range(p)[1]}px`

const verySmallLower = lower(verySmallRange)
const verySmallUpper = upper(verySmallRange)
const smallLower = lower(smallRange)
const smallUpper = upper(smallRange)
const mediumLower = lower(mediumRange)
const mediumUpper = upper(mediumRange)
const largeLower = lower(largeRange)
const largeUpper = upper(largeRange)
const veryLargeLower = lower(veryLargeRange)

const screen = registerBreakpoint('screen', 'only screen')

const landscape = (breakpoint) => registerBreakpoint(
  'landscape',
  (p) => `${screen(p)} and (orientation: landscape) ${breakpoint ? ` and ${breakpoint(p)}` : ''}`
)
const portrait = registerBreakpoint(
  'portrait',
  (p) => `${screen(p)} and (orientation: portrait)`,
)

const verySmallUp = registerBreakpoint(
  'very-small-up',
  (p) => `(min-width: ${verySmallLower(p)})`,
)

const mediumLow = registerBreakpoint(
  'medium-low',
  (p) => `(max-width: ${smallUpper(p)})`,
)

const largeLow = registerBreakpoint(
  'large-low',
  (p) => `(max-width: ${mediumUpper(p)})`,
)

const smallUp = registerBreakpoint(
  'small-up',
  (p) => `(min-width: ${smallLower(p)})`,
)
const smallOnly = registerBreakpoint(
  'small-only',
  (p) => `(min-width: ${smallLower(
    p,
  )}) and (max-width: ${smallUpper(p)})`,
)

const mediumUp = registerBreakpoint(
  'medium-up',
  (p) => `(min-width: ${mediumLower(p)})`,
)
const mediumOnly = registerBreakpoint(
  'medium-only',
  (p) => `(min-width: ${mediumLower(p)}) and (max-width: ${mediumUpper(p)})`,
)

const largeUp = registerBreakpoint(
  'large-up',
  (p) => `(min-width: ${largeLower(p)})`,
)
const largeOnly = registerBreakpoint(
  'large-only',
  (p) => `(min-width: ${largeLower(p,)}) and (max-width: ${largeUpper(p)})`,
)

const veryLargeUp = registerBreakpoint(
  'very-large-up',
  (p) => `(min-width: ${veryLargeLower(p)})`,
)

export const isBreakpointActive = (breakPoint) => {
  const currentClientWidth = window.innerWidth
  const breakPointRange = breakPoint()

  if (!Array.isArray(breakPointRange)) {
    // eslint-disable-next-line no-console
    console.error('You have to specify a breakpoint that specifies a range.')
    return false
  }
  return currentClientWidth < breakPointRange[1]
}

export {
  verySmallRange,
  smallRange,
  mediumRange,
  largeRange,

  screen,
  portrait,
  landscape,
  verySmallUp,
  smallUp,
  mediumUp,
  mediumLow,
  largeUp,
  largeLow,
  veryLargeUp,
  smallOnly,
  mediumOnly,
  largeOnly,
}
