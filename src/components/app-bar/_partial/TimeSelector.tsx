import React, {useMemo} from "react";
import {FormControl, MenuItem, Select} from "@mui/material";
import type {SelectChangeEvent} from "@mui/material";
import {Timeframe} from "src/enum";
import {useTimeframe} from "src/hooks";

export interface TimeSelectorProps {
  timeframes: Array<Timeframe>;
}

export const TimeSelector = ({timeframes}: TimeSelectorProps) => {
  const [timeframe, setTimeframe] = useTimeframe();
  const handleSelectChange = (event: SelectChangeEvent<string>): void => {
    const newValue = event.target.value;
    setTimeframe(newValue);
  };

  const selectOptions = useMemo(
    () =>
      timeframes.map(value => (
        <MenuItem key={value} value={value}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </MenuItem>
      )),
    [],
  );
  return (
    <FormControl variant="outlined" sx={{minWidth: 120, marginLeft: 2}}>
      <Select
        labelId="timeframe-select-label"
        id="timeframe-select"
        value={timeframe}
        onChange={handleSelectChange}
        sx={{color: "inherit"}}
        displayEmpty
        inputProps={{"aria-label": "Timeframe"}}>
        {selectOptions}
      </Select>
    </FormControl>
  );
};
