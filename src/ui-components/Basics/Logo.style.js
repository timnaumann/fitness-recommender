import styled from 'styled-components'

const baseClass = 'logo'
export const Logo = styled.div.attrs({ className: `${baseClass}` })`
`

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`

export const Wrapper = styled.div.attrs({ className: `${baseClass}__wrapper` })`
  position: relative;
`

export const Longlabel = styled.div.attrs({ className: `${baseClass}__long-label` })`
  transform: rotate(-90deg);
  color: white;
  font-size: 20px;
  position: absolute;
  left: 0;
`

export const Char = styled.span.attrs({ className: `${baseClass}__char` })`
  color: white;
  font-size: 20px;
`
