// DetailPage.tsx
import React from "react";
import {Alert} from "@mui/material";
import {useParams} from "react-router-dom";
import ArticleDetail from "./ArticleDetail";
import {PageLayout} from "../_partial/PageLayout";

const DetailPage: React.FC = () => {
  const {articleId} = useParams<{articleId: string}>();

  if (!articleId) {
    return <Alert severity="error">Cannot find article by ID</Alert>;
  }

  return (
    <PageLayout
      mainComponent={<ArticleDetail id={articleId} />}
      columnReverse
    />
  );
};

export default DetailPage;
