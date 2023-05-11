import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react'

export const AppointmentDetails = ({appointment}) => {
    const toUpperFirstLetter = (string) => {
        return string?.charAt(0).toUpperCase() + string?.slice(1);
    };
    const formatHour = (hour) => {
        let hourString = hour.toString();
        let hourInt = parseInt(hourString.substring(0, 2));
        let hourFormat = hourInt > 12 ? hourInt - 12 : hourInt;
        let amPm = hourInt >= 12 ? "PM" : "AM";
        return `${hourFormat}${amPm==='AM'?":":""}${hourString.substring(2)} ${amPm}`;
    };
    return (
        <>
            <Typography variant="body1">
                Hospital: {toUpperFirstLetter(appointment.hospital)}
            </Typography>
            <Typography variant="body1">
                Location: {toUpperFirstLetter(appointment.location)}
            </Typography>
            <Typography variant="body1">
                Category: {toUpperFirstLetter(appointment.category)}
            </Typography>
            <Typography variant="body1">
                Date: {dayjs(appointment.date).format("DD MMM YYYY")}
            </Typography>
            <Typography variant="body1">
                Time: {formatHour(appointment.hour)}
            </Typography>
        </>
    )
}
