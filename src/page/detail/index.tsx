import React from "react";
import {Alert, Paper, Stack} from "@mui/material";
import {useParams} from "react-router-dom";
import ArticleDetail from "./ArticleDetail";
import {AnalyzedChart} from "../_partial";

export default function DetailPage() {
  const {articleId} = useParams();

  if (!articleId) {
    return <Alert severity="error">Cannot find article by ID</Alert>;
  }
  return (
    <Stack spacing={2} sx={{padding: 2}}>
      <Paper>
        {articleId !== undefined && <ArticleDetail id={articleId} />}
      </Paper>
      <Paper>
        <AnalyzedChart />
      </Paper>
    </Stack>
  );
}
