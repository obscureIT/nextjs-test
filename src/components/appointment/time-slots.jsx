import * as React from "react";
import { Stack } from "@mui/system";
import Chip from "@mui/material/Chip";

export default function TimeSlots(props) {
  const { time, setTime } = props;

  const timeArray = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const handleClick = (e) => {
    setTime(e);
  };

  return (
      <Stack direction="row" sx={{ flexWrap: "wrap" }}>
        {timeArray &&
          timeArray.length > 0 &&
          timeArray.map((value, key) => {
            return (
              <Chip
                key={key}
                sx={{ mr: "44px", mb: 4 }}
                color={`${time == value ? "primary" : "secondary"}`}
                label={value}
                onClick={(e) => handleClick(value)}
              />
            );
          })}
      </Stack>
  );
}
