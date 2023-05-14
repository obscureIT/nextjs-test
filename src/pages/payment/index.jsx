import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Box,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { AppointmentDetails } from "../../components/payment/appointmentDetails";
import { PaymentDetails } from "../../components/payment/paymentDetails";
import { BsCheckCircleFill } from "react-icons/bs";
import styled from "styled-components";

const PaymentContainer = styled.div`
  .box {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    background-color: red;
  }
`;

const Payment = () => {
  const [appointment, setAppointment] = useState({});
  const router = useRouter();
  //get data from query params
  let query;
  if (typeof window !== "undefined")
    query = new URLSearchParams(window.location.search);
  let appointmentId = query && query.get("appointment");
  useEffect(() => {
    if (appointmentId) {
      axios
        .get(
          `http://localhost:5000/api/v1/appointment/get-a-appointment/${appointmentId}`
        )
        .then((response) => setAppointment(response.data.appointment))
        .catch((err) => console.log(err));
    }
  }, [appointmentId]);

  return (
    <>
      <Grid container spacing={3} sx={{ mx: "auto", width: "80%" }}>
        <Grid sx={{ my: "20px" }} item xs={12}>
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#18A558", margin: "0 0 10px 0" }}
          >
            <BsCheckCircleFill />
          </Typography>
          <Typography variant="h4" align="center" sx={{ color: "#002366" }}>
            Payment{" "}
            {appointment.payment?.status === "paid" ? "Successful" : "Failed"}!
          </Typography>
        </Grid>
      </Grid>

      {appointment.payment?.status === "paid" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3>Appointment Details</h3>
          <AppointmentDetails appointment={appointment} />
          <hr />
          <h3>Payment Details</h3>
          <PaymentDetails appointment={appointment} />
          {/* <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Appointment Details" />
          <CardContent>
            
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Payment Details" />
          <Box sx={{ mx: "20px", width: "50%", mb: "8px" }}>
            
          </Box>
        </Card>
      </Grid> */}
        </div>
      )}
      <Grid item xs={12} align="center" sx={{ my: "20px" }}>
        <Button
          onClick={() => router.push("/appointment")}
          variant="contained"
          color="primary"
        >
          {appointment.payment?.status === "paid"
            ? "Book Another"
            : "Try Again"}
        </Button>
      </Grid>
    </>
  );
};
export default Payment;
