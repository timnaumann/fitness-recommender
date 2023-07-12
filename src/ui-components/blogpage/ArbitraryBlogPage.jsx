import React from "react";
import PropTypes from "prop-types";
import { StageHeading } from "@ui-components/Pages/QuestionsStage";

import * as S from "./ArbitraryBlogPage.style";

const ArbitraryBlogPage = (props) => {
  return (
    <S.ArbitraryBlogPage>
      <S.ArbitraryBlogPageStageHeading
        as={StageHeading}
        heading={props.heading}
      />
      <S.ContentWrapper>
        <S.Content dangerouslySetInnerHTML={{ __html: props.content }} />
      </S.ContentWrapper>
    </S.ArbitraryBlogPage>
  );
};

ArbitraryBlogPage.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
};

ArbitraryBlogPage.defaultProps = {
  className: "",
  content: "",
  heading: "",
};

export default ArbitraryBlogPage;
