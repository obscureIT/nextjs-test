import React , { useState } from "react";
import dayjs from "dayjs";
import RadioButtons from "../../components/appointment/radio-button";
import PatientDetails from "../../components/appointment/patient-details"
import {
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import BasicDatePicker from "../../components/date-picker/date-picker";
import SelectLocationAndHospital from "../../components/appointment/location";

const Appointment = (props) => {
  // location + hospital data 
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const [formData, setFormData] = useState({
    location: "",
    hospital: "",
  });

  // date picker data 
  const [dateValue, setdateValue] = useState(dayjs());
  const [day, setDay] = useState(undefined);
  const [activeDay, setActiveDay] = useState(undefined);

  // time data
  const [time, setTime] = useState(undefined);

  // payment category data 
  const[paymentAmount , setpaymentAmount] = useState(undefined);

  return (
    <Container>
      <Grid container spacing={6} sx={{ mt: 4, p: 6 }}>
        <Grid item xs={8}>
         <SelectLocationAndHospital
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedHospital={selectedHospital}
            setSelectedHospital={setSelectedHospital}
            formData={formData}
            setFormData={setFormData}
         />
          <Stack direction="column" spacing={2} sx={{ mt: 6 }}>
            <Typography
              variant="h2"
              sx={{ mt: 3, mb: 4, mr: 10, flexShrink: "0" }}
            >
              Select Date
            </Typography>
            <BasicDatePicker 
            dateValue={dateValue}
            setdateValue={setdateValue}
            day={day}
            setDay={setDay}
            activeDay={activeDay}
            setActiveDay={setActiveDay}
            time={time}
            setTime={setTime}
            paymentAmount={paymentAmount} 
            setpaymentAmount={setpaymentAmount}/>
          </Stack>
          {/* <Stack direction="column" spacing={2} sx={{ mt: 6 }}>
            <Typography
              variant="h2"
              sx={{ mt: 3, mb: 4, mr: 10, flexShrink: "0" }}
            >
              Select Type
            </Typography>
            <RadioButtons paymentAmount={paymentAmount} setpaymentAmount={setpaymentAmount}/>
          </Stack> */}
        </Grid>
        <Grid item xs={4}>
         <PatientDetails
         selectedLocation={selectedLocation}
         selectedHospital={selectedHospital}
         dateValue={dateValue}
         time={time}
         paymentAmount={paymentAmount}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Appointment;
