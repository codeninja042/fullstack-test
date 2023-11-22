import type {DailyTraffic} from "./traffic";

/**
 * Represents the structure of an article with traffic data.
 */
export interface ArticleData {
  id: string; // Unique identifier for the article
  url: string; // URL of the article
  author: string; // Author of the article
  image_url: string; // URL of the article's image
  geo: string; // Geographical identifier
  daily_traffic: DailyTraffic[]; // Array of daily traffic data
  total_traffic?: number;
}

/**
 * Extends ArticleData with total traffic.
 */
export interface ArticleWithTotal extends ArticleData {
  total_traffic: number; // Total traffic for the article
}
export interface PaginatedResponseBody<T> {
  data: T;
  nextPage: number | null;
}
