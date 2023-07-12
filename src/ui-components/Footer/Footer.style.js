import styled from 'styled-components'
import * as bp from '@breakpoints'

const baseClass = 'footer'
export const Footer = styled.div.attrs({className:`${baseClass}`})`
  display: grid;
  align-items: center;
  grid-gap: 5px;
  

  grid-template-rows: min-content;
  grid-template-columns: repeat(4, auto);

  @media ${bp.smallUp} {
    grid-template-columns: repeat(4, auto);
    grid-gap: 35px;
  }

  @media ${bp.mediumUp} {
    grid-template-columns:repeat(4, min-content);
    grid-gap: 35px;
  }
`

export const FooterItem = styled.a.attrs({className: `${baseClass}__item`})`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.headerFooterStyles.fontSize.default};
  word-break: break-word;

  border: none;
  background: none;
  user-select: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: white;
  }

  // needed for stacking context
  transform: translateZ(0);
  opacity: 1;

  :hover {
    opacity: 1;
    text-decoration: underline;
  }


  @media ${bp.smallUp} {
    white-space: nowrap;
    font-size: ${props => props.theme.headerFooterStyles.fontSize.small};
  }

  @media ${bp.mediumUp} {
    font-size: ${props => props.theme.headerFooterStyles.fontSize.desktop};
    :hover {
      text-decoration: underline;
    }
  }

  @media ${bp.landscape(bp.mediumLow)} {
    font-size: ${props => props.theme.headerFooterStyles.fontSize.small};
  }
`

export const FooterItemCookies = styled(FooterItem)
    .attrs({className: `${baseClass}__item-cookies`})`
  justify-self: center;

  @media ${bp.mediumUp}, ${bp.landscape(bp.mediumLow)} {
    justify-self: right;
  }
`
export const FooterItemImprint = styled(FooterItem)
    .attrs({className: `${baseClass}__item-imprint`})`
  justify-self: center;

  @media ${bp.mediumUp} {
    justify-self: left;
  }
`
export const FooterItemPrivacy = styled(FooterItem)
    .attrs({className: `${baseClass}__item-privacy`})`
  justify-self: center;

  @media ${bp.mediumUp} {
    justify-self: left;
  }


`
export const FooterItemBlogPage = styled(FooterItem).attrs({className: `${baseClass}_item-blogpage`})`
justify-self: center;

@media ${bp.mediumUp} {
  justify-self:left; 
}
`
