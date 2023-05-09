import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Chip from "@mui/material/Chip";
import { Stack, Typography } from "@mui/material";
import TimeSlots from "../appointment/time-slots";
import PaymentAmountRadios from "../appointment/radio-button";

export default function BasicDatePicker(props) {
  const {
    dateValue,
    setdateValue,
    day,
    setDay,
    activeDay,
    setActiveDay,
    time,
    setTime,
    paymentAmount,
    setpaymentAmount,
  } = props;

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
    setdateValue(e);
    setActiveDay(e);
  };

  const handleDatePicker = (newValue) => {
    console.log(newValue);
    setdateValue(newValue);
    displayFollowingDays(newValue);
    setActiveDay(newValue);
  };

  const displayFollowingDays = (day) => {
    let selectedDate = day.$W;
    let followingDaysCount = 7;
    let days_array = [];

    for (let i = 0; i < followingDaysCount; i++) {
      days_array.push(dayjs().day(selectedDate));
      // console.log(dayjs().day(selectedDate), "selected")
      selectedDate++;
    }
    setDay(days_array);
  };

  return (
    <React.Fragment>
      <Stack direction="column" spacing={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DemoContainer components={['DatePicker']}> */}
          <DatePicker
            sx={{ display: "inline" }}
            label="Date"
            value={dateValue}
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
                  sx={{ mr: "16px", mb: 2 }}
                  color={`${
                    activeDay.$D == value.$D ? "primary" : "secondary"
                  }`}
                  label={`${weekDays[value.$W]}`}
                  onClick={(e) => handleClick(value)}
                />
              );
            })}
        </Stack>
      </Stack>
      {activeDay ? (
        <Stack direction="column" spacing={2} sx={{ mt: 6 }}>
          <Typography
            variant="h2"
            sx={{ mt: 3, mb: 4, mr: 10, flexShrink: "0" }}
          >
            Select Time
          </Typography>
          <TimeSlots time={time} setTime={setTime} />
        </Stack>
      ) : (
        ""
      )}

      {time ? (
        <Stack direction="column" spacing={2} sx={{ mt: 6 }}>
          <Typography
            variant="h2"
            sx={{ mt: 3, mb: 4, mr: 10, flexShrink: "0" }}
          >
            Select Type
          </Typography>
          <PaymentAmountRadios
            paymentAmount={paymentAmount}
            setpaymentAmount={setpaymentAmount}
          />
        </Stack>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
