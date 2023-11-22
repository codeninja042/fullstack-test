import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {Timeframe} from "src/enum";

export const useTimeframe = (): [
  Timeframe | string,
  React.Dispatch<React.SetStateAction<Timeframe | string>>,
] => {
  const [timeframe, setTimeframe] = useState<Timeframe | string>(
    Timeframe.Today,
  );
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("timeframe") !== timeframe) {
      setSearchParams(params => {
        params.set("timeframe", timeframe);
        return params;
      });
    }
  }, [searchParams, timeframe, setSearchParams]);

  return [timeframe, setTimeframe];
};
