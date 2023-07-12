import styled from "styled-components";
import * as bp from "@breakpoints";

const baseClass = "blog-page";
export const ArbitraryBlogPage = styled.div.attrs({ className: baseClass })`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;
  padding-bottom: 50px;
`;

export const ArbitraryBlogPageStageHeading = styled.div.attrs({
  className: `${baseClass}__stage-heading`,
})`
  margin-bottom: 20px;

  @media ${bp.mediumUp} {
    margin-bottom: 50px;
  }
`;

export const ContentWrapper = styled.div.attrs({
  className: `${baseClass}__content-wrapper`,
})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  height: 100%;
`;

const textFontSize = "17px";

export const Content = styled.div.attrs({ className: `${baseClass}__content` })`
  max-width: 1200px;
  width: 80vw;
  height: 100%;
  color: white;
  line-height: 24px;
  padding-bottom: 40px;

  h2 {
    font-size: 28px;
  }

  p {
    font-size: ${textFontSize};
  }

  a {
    text-decoration: none;
    color: white;
  }

  li {
    font-size: ${textFontSize};
    margin-bottom: 7px;
  }

  strong {
    font-size: 22px;
  }

  br + strong {
    text-decoration: underline;
  }

  li > strong {
    font-size: 18px;
    text-decoration: underline;
  }
`;
