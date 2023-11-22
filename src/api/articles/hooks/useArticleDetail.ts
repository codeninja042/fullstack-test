import {useSuspenseQuery} from "@tanstack/react-query";
import {useSearchParams} from "react-router-dom";
import {getDetail} from "../../../api/articles/resource";
import type {ArticleData} from "../../../types/article";

interface useArticleDetailProps {
  id: string;
}
export function useArticleDetail({id}: useArticleDetailProps) {
  const [searchParams] = useSearchParams();
  const timeframe = searchParams.get("timeframe") ?? "today";
  const {data, error} = useSuspenseQuery<ArticleData, Error>({
    queryKey: ["articleDetail", id, timeframe],
    queryFn: async () => await getDetail({id, timeframe}),
  });
  return {data, error};
}
