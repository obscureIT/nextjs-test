import * as React from "react";
import { Stack } from "@mui/system";
import Chip from "@mui/material/Chip";

export default function TimeSlots(props) {
  const { timeSlots, time, setTime } = props;

  const handleClick = (e) => {
    setTime(e);
  };
  const getTimeColor = (value) => {
    //check is time slot is booked or not
    if (value.isBooked) {
      return "secondary";
    }
    // check if time slot is selected or not
    if (time === value.hour) {
      return "primary";
    }
    else {
      return "secondary";
    }
  };


  return (
    // <ThemeProvider theme={theme}>
      <Stack direction="row" sx={{ flexWrap: "wrap" }}>
        {timeSlots &&
          timeSlots.length > 0 &&
          timeSlots.map((value, key) => {
            return (
              <Chip
                key={key}
                sx={{ mr: "44px", mb: 4 }}
                color={getTimeColor(value)}
                label={value.hour}
                disabled={value.isBooked}
                onClick={(e) => handleClick(value.hour)}
              />
            );
          })}
      </Stack>


    // </ThemeProvider>
  );
}
