import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/material";

export default function BasicDatePicker() {
  const [value, setValue] = useState(dayjs());
  const [day, setDay] = useState(undefined);

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleClick = (e) => {
    console.log(e);
  };

  const handleDatePicker = (newValue) => {
    setValue(newValue);
    displayFollowingDays(newValue);
  };

  const displayFollowingDays = (day) => {
    let selectedDate = day.$D;
    let followingDaysCount = 7;
    let days_array = [];

    for (let i = selectedDate; i < selectedDate + followingDaysCount; i++) {
      days_array.push(dayjs().day(i));
    }
    setDay(days_array);
  };

  return (
    <React.Fragment>
      <Stack direction="column" spacing={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DemoContainer components={['DatePicker']}> */}
          <DatePicker
           sx={{display : "inline"}}
            label="Date"
            value={value}
            onChange={(newValue) => handleDatePicker(newValue)}
            format="LL"
          />
          {/* </DemoContainer> */}
        </LocalizationProvider>
        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
          {day &&
            day.length > 0 &&
            day.map((value, key) => {
              return (
                <Chip
                    key={key}
                    sx={{ mr:'16px' , mb:2}}
                  color="primary"
                  label={`${weekDays[value.$W]}`}
                  onClick={(e) => handleClick(value)}
                />
              );
            })}
        </Stack>
      </Stack>
    </React.Fragment>
  );
}
