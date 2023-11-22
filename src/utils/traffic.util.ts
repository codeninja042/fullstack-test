import type {TrafficData} from "../types";

export const initialiseTrafficObject = (
  size: number,
  defaultValue: number,
): TrafficData => {
  return Array.from({length: size}, (_, i) => i.toString()).reduce<TrafficData>(
    (acc, curr) => {
      acc[curr] = defaultValue;
      return acc;
    },
    {},
  );
};
