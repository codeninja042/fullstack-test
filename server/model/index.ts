import {ArticleData, ArticleWithTotal, TrafficData} from "../types";
import rawData from "../dataset.json";
import {
  getLastWeekDays,
  initialiseTrafficObject,
  getDaysInCurrentMonth,
} from "../../src/utils";

interface ITrafficData {
  traffic_data: ArticleData[];
}

const trafficData: ITrafficData = rawData;

const calculateTotalTrafficForArticles = (
  articles: ArticleData[],
): ArticleWithTotal[] => {
  return articles.map(article => {
    const totalTraffic = article.daily_traffic.reduce(
      (dailyTotal, day) =>
        dailyTotal +
        day.hourly_traffic.reduce(
          (hourlyTotal, hour) => hourlyTotal + hour.traffic,
          0,
        ),
      0,
    );

    return {...article, total_traffic: totalTraffic};
  });
};

const filterArticlesByTimeframe = (
  articles: ArticleData[],
  timeframe: string,
  articleId?: string,
) => {
  const filteredArticles = articles.filter(
    article => (articleId && article.id === articleId) || !articleId,
  );

  if (timeframe === "today" || timeframe === "yesterday") {
    const currentDate = new Date();

    if (timeframe === "yesterday") {
      currentDate.setDate(currentDate.getDate() - 1);
    }

    const day = currentDate.getDate();

    return filteredArticles.map(article => ({
      ...article,
      daily_traffic: article.daily_traffic.filter(daily => daily.day === day),
    }));
  } else if (timeframe === "last week" || timeframe === "this month") {
    const days =
      timeframe === "last week" ? getLastWeekDays() : getDaysInCurrentMonth();

    return filteredArticles.map(article => ({
      ...article,
      daily_traffic: article.daily_traffic.filter(daily =>
        days.includes(daily.day),
      ),
    }));
  } else {
    throw new Error("Invalid timeframe specified");
  }
};

const analyzeTrafficData = async (
  timeframe: string,
  articleId?: string,
): Promise<TrafficData> => {
  const filteredData = filterArticlesByTimeframe(
    trafficData.traffic_data,
    timeframe,
    articleId,
  );

  let traffic: TrafficData = {};

  if (timeframe === "today" || timeframe === "yesterday") {
    traffic = initialiseTrafficObject(24, 0);

    filteredData.forEach(article =>
      article.daily_traffic.forEach(daily =>
        daily.hourly_traffic.forEach(t => {
          traffic[t.hour.toString()] += t.traffic;
        }),
      ),
    );
  } else if (timeframe === "last week" || timeframe === "this month") {
    const days =
      timeframe === "last week" ? getLastWeekDays() : getDaysInCurrentMonth();

    days.forEach(day => (traffic[day] = 0));

    filteredData.forEach(article =>
      article.daily_traffic.forEach(daily =>
        daily.hourly_traffic.forEach(t => {
          traffic[daily.day.toString()] += t.traffic;
        }),
      ),
    );
  } else {
    throw new Error("Invalid timeframe specified");
  }

  return traffic;
};

const getSortedArticleList = (timeframe: string = "today") =>
  calculateTotalTrafficForArticles(
    filterArticlesByTimeframe(trafficData.traffic_data, timeframe),
  ).sort((a, b) => b.total_traffic - a.total_traffic);

const getArticleById = (articleId: string, timeframe: string = "today") => {
  const filteredArticle = filterArticlesByTimeframe(
    trafficData.traffic_data,
    timeframe,
    articleId,
  );

  if (!filteredArticle || filteredArticle.length === 0) return null;

  return calculateTotalTrafficForArticles(filteredArticle)[0];
};

export const trafficModel = {
  getSortedArticleList,
  getArticleById,
  analyzeTrafficData,
  rawData: trafficData,
};
