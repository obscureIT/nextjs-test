import React , { useEffect, useState } from "react";
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
import axios from "axios";

const Appointment = (props) => {
  // location + hospital data 
  const [allLocations, setAllLocations] = useState([]);
  const [allHospitals, setAllHospitals] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
 // date picker data 
 const [dateValue, setdateValue] = useState(dayjs());
 const [day, setDay] = useState(undefined);
 const [activeDay, setActiveDay] = useState(undefined);

 // time data
 const [time, setTime] = useState(undefined);

 // payment category data 
 const[paymentAmount , setpaymentAmount] = useState(undefined);



  let getLocations=axios.get("http://localhost:5000/api/v1/appointment/time-table/get-all-location");
  let getHospitals=axios.get(`http://localhost:5000/api/v1/appointment/time-table/get-all-hospital/${selectedLocation?.value}`);
  useEffect(() => {
    getLocations
    .then((response) => {
      let data = response?.data?.location?.map((item) => {
        return {
          label: item.toUpperCase(),
          value: item.toLowerCase(),
        };
      });
      setAllLocations(data);
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if(selectedLocation){
      getHospitals
    .then((response) => {
      let data = response?.data?.hospital?.map((item) => {
        return {
          label: item.toUpperCase(),
          value: item.toLowerCase(),
        };
      });
      setAllHospitals(data);
    })
    .catch((err) => console.log(err));
    }
  }, [selectedLocation]);
  // console.log(allHospitals)
  useEffect(() => {
    if(selectedLocation?.value&&selectedHospital?.value){
      axios.get(`http://localhost:5000/api/v1/appointment/time-table/get/${selectedLocation?.value}?hospital=${selectedHospital?.value}&month=${dateValue.$M+1}&day=${dateValue.$D}`)
      .then((response) => {
        setTimeSlots(response.data.hours);
      })
      .catch((err) => console.log(err));
    }
  }, [selectedLocation,selectedHospital,dateValue]);

  //fetch data from api by axios
  


  

  const [formData, setFormData] = useState({
    location: "",
    hospital: "",
  });

 

  return (
    <Container>
      <Grid container spacing={6} sx={{ mt: 4, p: 6 }}>
        <Grid item xs={8}>
         <SelectLocationAndHospital
            locations={allLocations}
            hospitals={allHospitals}
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
            timeSlots={timeSlots}
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
