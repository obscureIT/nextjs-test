import React, { useState } from "react";
import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
    Card,
    CardActions,
    CardContent,
    Button,
    Item,
  } from "@mui/material";
const Appointment = (props) => {
    return(
<Card sx={{ minWidth: 275 }}>
<CardContent>
  <Typography
    sx={{ fontSize: 14 }}
    color="text.secondary"
    gutterBottom
  >
    Word of the Day
  </Typography>
  <Typography sx={{ mb: 1.5 }} color="text.secondary">
    adjective
  </Typography>
  <Typography variant="body2">
    well meaning and kindly.
    <br />
    {'"a benevolent smile"'}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small">Learn More</Button>
</CardActions>
</Card>
);
};

export default Appointment;
