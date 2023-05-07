import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Chip from "@mui/material/Chip";

export default function TimeSlots() {
  const time = [
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
    console.log(e);
  };
  return (
    <Stack direction="row" sx={{ flexWrap: "wrap" }}>
      {time &&
        time.length > 0 &&
        time.map((value, key) => {
          return (
            <Chip
              key={key}
              sx={{ mr: "44px", mb: 4 }}
              color="secondary"
              label={value}
              onClick={(e) => handleClick(value)}
            />
          );
        })}
    </Stack>
  );
}
