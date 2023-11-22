import {useParams, useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {useCallback} from "react";
import {getAnalyzedData} from "../resource/getAnalyzed";
import type {ChartProps} from "../../../components";
import type {TrafficData} from "../../../types";

export type ChartData = Omit<ChartProps, "title">;

export function useTrafficData() {
  const {articleId} = useParams();
  const [searchParams] = useSearchParams();
  const timeframe = searchParams.get("timeframe") ?? "today";
  const extractTraffic = useCallback((data?: TrafficData): ChartData => {
    if (data === undefined) {
      return {labels: [], data: []};
    }
    const chartLabels: string[] = Object.keys(data);
    const chartData: number[] = Object.values(data);

    return {labels: chartLabels, data: chartData};
  }, []);

  const {data, isError, error, isLoading} = useQuery({
    queryKey: ["totalChart", timeframe, articleId],
    queryFn: async () => {
      return await getAnalyzedData({timeframe, articleId});
    },
    placeholderData: previousData => previousData,
    notifyOnChangeProps: ["data"],
    select: extractTraffic,
  });
  return {isError, data, isLoading, error};
}
