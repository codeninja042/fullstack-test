import {apiUrl} from "../../../config";
import type {ArticleData} from "../../../types/article";

export const getDetail = async ({
  id,
  timeframe,
}: {
  id: string;
  timeframe: string;
}): Promise<ArticleData> => {
  const response = await fetch(
    `${apiUrl}/articles/${id}?timeframe=${timeframe ?? "today"}`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};
