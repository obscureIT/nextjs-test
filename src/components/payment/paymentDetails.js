import { Typography } from '@mui/material'
import React from 'react'

export const PaymentDetails = ({appointment}) => {
    return (
        <>
            <Typography variant="h6">{appointment.name}</Typography>
            <Typography variant="body1">
                Email: {appointment.email}
            </Typography>
            <Typography variant="body1">
                Transaction ID: {appointment?.payment?.transId}
            </Typography>
            <Typography variant="body1">
                Phone: {appointment.phone}
            </Typography>
            <Typography variant="body1">
                Payment Method: {appointment?.payment?.method}
            </Typography>
            <Typography variant="body1">
                Amount: {appointment.amount} TK
            </Typography>
        </>
    )
}
