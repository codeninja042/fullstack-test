import React from "react";
import {Box, Paper, Stack} from "@mui/material";
import {useParams} from "react-router-dom";
import ArticleDetail from "./ArticleDetail";
import {AnalyzedChart} from "../_partial";

export default function DetailPage() {
  const {articleId} = useParams();

  return (
    <Box sx={{padding: 2}}>
      <Stack spacing={2}>
        <Paper>
          {articleId !== undefined && <ArticleDetail id={articleId} />}
        </Paper>
        <Paper>
          <AnalyzedChart />
        </Paper>
      </Stack>
    </Box>
  );
}
