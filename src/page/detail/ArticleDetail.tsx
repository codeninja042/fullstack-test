import React from "react";
import {Alert} from "@mui/material";
import {Article} from "../../components";
import {useArticleDetail} from "../../api";
import {withSuspense} from "../../hocs";

interface ArticleDetailProps {
  id: string;
}

function ArticleDetail({id}: ArticleDetailProps) {
  const {data, error} = useArticleDetail({id});

  if (error !== null) {
    return <Alert severity="error">An error occurred: {error.message}</Alert>;
  }

  return (
    <Article
      author={data.author}
      url={data.url}
      image={data.image_url}
      traffic={data.total_traffic ?? 0}
    />
  );
}

export default withSuspense(ArticleDetail);
