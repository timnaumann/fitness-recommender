import styled from 'styled-components'
import * as bp from '@breakpoints'

const baseClass = 'recommendation-item'
export const RecommendationItem = styled.div.attrs({
  className: `${baseClass}`,
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 10px;
  grid-gap: 15px;

  @media ${bp.smallUp}, ${bp.landscape(bp.mediumLow)} {
    padding: 0;
    margin: auto;
  }

  @media ${bp.mediumUp} {
    grid-gap: 60px;
    flex-direction: row;
    align-items: start;
  }
`

export const Wrapper = styled.div.attrs({
  className: `${baseClass}__wrapper`,
})`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`

export const VideoWrapper = styled.div.attrs({
  className: `${baseClass}__video-wrapper`,
})`
`

export const TextWrapper = styled.div.attrs({
  className: `${baseClass}__text-wrapper`,
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`

export const Tools = styled.div.attrs({
  className: `${baseClass}__text-wrapper`,
})`
  color: ${(props) => props.theme.textColorPrimary};
  font-size: 16px;
`

export const ExplanationText = styled.div.attrs({
  className: `${baseClass}__explanation-text`,
})`
  max-width: 600px;
  max-height: 180px;
  overflow-y: auto;
  text-align: center;

  color: ${(props) => props.theme.textColorPrimary};
  font-size: 16px;

  @media ${bp.mediumUp}, ${bp.landscape(bp.mediumLow)} {
    font-size: 26px;
    text-align: center;
    max-height: 340px;
    margin: 0;
  }

  @media ${bp.largeUp}, ${bp.landscape(bp.mediumLow)} {
    text-align: left;
  }
`
