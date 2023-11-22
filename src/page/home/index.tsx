import React from "react";
import {Paper, Stack} from "@mui/material";
import ArticleList from "./ArticleList";
import {AnalyzedChart} from "../_partial";

export default function Home() {
  return (
    <Stack spacing={2} sx={{padding: 2}}>
      <Paper>
        <AnalyzedChart />
      </Paper>
      <Paper>
        <ArticleList />
      </Paper>
    </Stack>
  );
}
