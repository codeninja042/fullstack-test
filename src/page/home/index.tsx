import React from "react";
import {Box, Paper, Stack} from "@mui/material";
import ArticleList from "./ArticleList";
import {AnalyzedChart} from "../_partial";

export default function Home() {
  return (
    <Box sx={{padding: 2}}>
      <Stack spacing={2}>
        <Paper>
          <AnalyzedChart />
        </Paper>
        <Paper>
          <ArticleList />
        </Paper>
      </Stack>
    </Box>
  );
}
