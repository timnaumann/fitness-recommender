import React, { useEffect, useState } from "react";
import { useI18n } from "@store/store-hooks";
import { getBlogPage } from "@api/api-service";
import ArbitraryBlogPage from "./ArbitraryBlogPage";

const BlogPage = () => {
  const i18n = useI18n();
  const [content, setContent] = useState(null);

  useEffect(() => {
    // TODO add locale handling
    const getBlogPageFromApi = async () => {
      const content = await getBlogPage();
      setContent(content);
    };
    getBlogPageFromApi();
  }, []);
  console.log(content);
  return (
    <ArbitraryBlogPage
      content={content}
      heading={i18n?.generic?.blogPageHeading}
    />
  );
};

export default BlogPage;
