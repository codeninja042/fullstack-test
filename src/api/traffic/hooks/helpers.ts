import type {TrafficData} from "../../../types";
import {
  getDaysInCurrentMonth,
  initialiseTrafficObject,
  getLastWeekDays,
} from "../../../utils";

export const initalChart = (timeframe: string | null): TrafficData => {
  let traffic: TrafficData = {};
  if (timeframe === "today" || timeframe === "yesterday") {
    traffic = initialiseTrafficObject(24, 0);
  } else if (timeframe === "last week" || timeframe === "this month") {
    const days =
      timeframe === "last week" ? getLastWeekDays() : getDaysInCurrentMonth();
    days.forEach((day: number) => (traffic[day] = 0));
  }
  return traffic;
};
