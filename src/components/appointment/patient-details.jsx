import React, { useState } from "react";
import {
  Stack,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import { Input, FormControl, FormLabel } from "@mui/joy";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import axios from "axios";

const PatientDetails = (props) => {
  const { selectedLocation, selectedHospital, dateValue, time, paymentAmount } =
    props;

  const user =
    typeof sessionStorage !== "undefined" && sessionStorage.getItem("user")
      ? sessionStorage.getItem("user")
      : "";

  dayjs.extend(localizedFormat);
  let date = dayjs(dateValue).format("dddd, LL");
  console.log(dateValue.$d.getMonth());

  const handlePurchase = () => {
    if (
      selectedLocation &&
      selectedHospital &&
      dateValue &&
      time &&
      paymentAmount
    ) {
      let data = {
        name:JSON.parse(user).name,
        phone:JSON.parse(user).phone,
        email:JSON.parse(user).email,
        location:selectedLocation.value,
        hospital:selectedHospital.value,
        descripton:"dental",
        category:"dental",
        month:dateValue.$M,
        day:dateValue.$D,
        hour:time,
        amount:paymentAmount,
      };
      console.log(data);

      axios
        .post("http://localhost:5000/api/v1/appointment/create", data)
        .then((response) => {
          console.log("success",response.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Enter all details!");
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Location
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {selectedLocation ? selectedLocation.label : "--"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Hospital
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {selectedHospital ? selectedHospital.label : "--"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Date
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {date}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Time
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {time ? time : "--"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Total Amount
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Tk {paymentAmount ? paymentAmount : "0"}
          </Typography>
        </Stack>
        {/* <JoyCssVarsProvider >
          <FormControl sx={{mt:3}}>
            <FormLabel sx={{fontSize: '1rem' ,color:"#0009"}}>Name</FormLabel>
              <Input
              name="name"
              label="Name"
              type="text"
              color="warning"
              defaultValue={user ? JSON.parse(user).name : ''}
              sx={{ mb:2 , width: '100%' }}
            />
          </FormControl>
          <FormControl>
            <FormLabel sx={{fontSize: '1rem' ,color:"#0009"}}>Email / mobile</FormLabel>
              <Input
              name="contact"
              label="Name"
              type="text"
              color="warning"
              defaultValue={user ? JSON.parse(user).email : ''}
              sx={{ mb:2 , width: '100%' }}
            />
          </FormControl>
        </JoyCssVarsProvider> */}

        <TextField
          label="Name"
          defaultValue={user ? JSON.parse(user).name : ""}
          id="outlined-name"
          InputProps={{
            readOnly: true,
          }}
          sx={{ mt: 3, mb: 2, width: "100%" }}
        />
        <TextField
          label="Email"
          defaultValue={user ? JSON.parse(user).email : ""}
          id="outlined-email"
          InputProps={{
            readOnly: true,
          }}
          sx={{ my: 2, width: "100%" }}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={(e) => handlePurchase(e)}
        >
          Purchase
        </Button>
      </CardActions>
      <Typography
        align="center"
        paragraph="true"
        sx={{ mb: 1.5, fontSize: "12px", px: 2, py: 2 }}
        color="text.secondary"
      >
        By clicking the Purchase, you are accepting Terms & Conditions of
        Adhunik dental.
      </Typography>
    </Card>
  );
};

export default PatientDetails;
