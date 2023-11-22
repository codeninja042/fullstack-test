/**
 * Represents hourly traffic data.
 */
export interface HourlyTraffic {
  hour: number; // Hour of the day (0-23)
  traffic: number; // Traffic count for the hour
}

/**
 * Represents daily traffic data.
 */
export interface DailyTraffic {
  day: number; // Day of the month
  hourly_traffic: HourlyTraffic[]; // Array of hourly traffic data
}
export type TrafficData = Record<string, number>;
