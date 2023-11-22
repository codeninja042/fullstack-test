import React from "react";
import {Alert} from "@mui/material";
import {useTrafficData} from "../../api";
import {Chart, Spinner} from "../../components";

export function AnalyzedChart() {
  const {isError, error, isLoading, data} = useTrafficData();

  if (isError) {
    return <Alert severity="error">An error occurred: {error?.message}</Alert>;
  }
  if (isLoading || data === undefined) {
    return <Spinner />;
  }

  return <Chart data={data.data} labels={data.labels} title="Traffic Data" />;
}
