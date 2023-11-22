import {apiUrl} from "../../../config";
import type {ArticleData, PaginatedResponseBody} from "../../../types/article";

export const getAllData = async ({
  page = 1,
  limit = 10,
  timeframe,
}: {
  page?: number;
  limit?: number;
  timeframe: string | null;
}): Promise<PaginatedResponseBody<ArticleData[]>> => {
  const response = await fetch(
    `${apiUrl}/articles?page=${page}&limit=${limit}&timeframe=${
      timeframe ?? "today"
    }`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};
