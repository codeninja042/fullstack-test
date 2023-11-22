import {apiUrl} from "../../../config";
import type {TrafficData} from "../../../types";

export const getAnalyzedData = async ({
  timeframe,
  articleId,
}: {
  timeframe: string | null;
  articleId?: string;
}): Promise<TrafficData> => {
  const searchParams = new URLSearchParams();
  searchParams.set("timeframe", timeframe ?? "today");
  if (articleId !== undefined) {
    searchParams.set("articleId", articleId);
  }
  const response = await fetch(`${apiUrl}/traffic?${searchParams.toString()}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};
