import styled from 'styled-components'
import { TeaserStartButton } from "@ui-components/Teaser/Teaser.style";
import { BackgroundDecoration } from "@ui-components/Basics/BackgroundDecoration.style";
import * as bp from "@breakpoints";

const baseClass = 'norecommendations'
export const NoRecommendations = styled.div.attrs({
    className: `${baseClass}`,
})`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  align-items: center;
  height: 100%;
  padding: 20px;

  @media ${bp.mediumUp} {
    margin-top: 50px;
  }
`

export const BackButton = styled(TeaserStartButton).attrs({
    className: `${baseClass}`,
})`
  padding: 14px;
  @media ${bp.smallUp} {
    font-size: 25px;
  }

  @media ${bp.mediumUp} {
    font-size: 35px;
  }

  @media ${bp.landscape(bp.mediumLow)} {
    font-size: 22px;
  }

  ${BackgroundDecoration} {
    backdrop-filter: brightness(100%);
  }
`

export const Heading = styled.div.attrs({
    className: `${baseClass}`,
})`

  text-align: center;
  user-select: none;
  ${(props) => props.theme.questionHeading};

  @media ${bp.smallUp} {
    max-width: 700px;
  }
  
  @media ${bp.mediumUp} {
    max-width: 1000px;
  }
`