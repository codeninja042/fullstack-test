import {useSuspenseInfiniteQuery} from "@tanstack/react-query";
import {useSearchParams} from "react-router-dom";
import {getAllData} from "../resource";
import type {ArticleData, PaginatedResponseBody} from "../../../types/article";

export function useArticleList() {
  const [searchParams] = useSearchParams();
  const timeframe = searchParams.get("timeframe") ?? "today";
  const {data, fetchNextPage, hasNextPage, error, isFetchingNextPage} =
    useSuspenseInfiniteQuery<PaginatedResponseBody<ArticleData[]>, Error>({
      queryKey: ["articles", timeframe],
      queryFn: async ({
        pageParam,
      }): Promise<PaginatedResponseBody<ArticleData[]>> => {
        return await getAllData({
          page: pageParam as number,
          timeframe: timeframe ?? "today",
        });
      },
      initialPageParam: 1,
      getNextPageParam: lastPage => lastPage.nextPage,
    });

  return {
    data,
    hasNextPage,
    fetchNextPage,
    error,
    isFetchingNextPage,
  };
}
