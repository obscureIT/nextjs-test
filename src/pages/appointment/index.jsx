import React, { useState } from "react";
import locationData from "../../../public/json/location.json";
import hospitalData from "../../../public/json/hospital.json";
// import Select from "react-select";
import dynamic from "next/dynamic";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  DatePicker,
  LocalizationProvider,
  AdapterDayjs,
} from "@mui/material";
import BasicDatePicker from "../../components/date-picker/date-picker";

const locations = [
  { label: "Dhaka", value: "dhaka" },
  { label: "CTG", value: "ctg" },
  { label: "Sylhet", value: "sylhet" },
];

const hospitals = [
  { label: "Dhaka Hospital", value: "dhakaHospital", location: "dhaka" },
  { label: "Dhaka Hospital", value: "dhakaHospital", location: "dhaka" },
  { label: "CTG Hospital", value: "ctgHospital", location: "ctg" },
  { label: "Sylhet Hospital", value: "sylhetHospital", location: "sylhet" },
];

const Select = dynamic(() => import("react-select"), { ssr: false });

const Appointment = (props) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const [formData, setFormData] = useState({
    location: "",
    hospital: "",
  });

  console.log("selectedLocation", selectedLocation);
  console.log("selectedHospital", selectedHospital);

  function handleSelectLocationChange(selectedLocation) {
    setSelectedLocation(selectedLocation);
  }

  function handleSelectHospitalChange(selectedHospital) {
    setSelectedHospital(selectedHospital);
    setFormData({
      location: selectedLocation.value,
      hospital: selectedHospital.value,
    });
  }

  console.log(formData);

  return (
    <Container>
      <Grid container spacing={6} sx={{ mt: 4, p: 6 }}>
        <Grid item xs={8}>
          <div>
            <Select
              options={locations}
              onChange={handleSelectLocationChange}
              value={selectedLocation}
              placeholder="Select an Location"
            />

            {selectedLocation ? (
              <Select
                className="mt-3"
                options={hospitals.filter(
                  (option) => option.location === selectedLocation.value
                )}
                onChange={handleSelectHospitalChange}
                value={selectedHospital}
                placeholder="Select an Hospital"
              />
            ) : null}
          </div>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 6}}>
            <Typography variant="h2" sx={{ mr: 10}}>Select Date</Typography>
            <BasicDatePicker />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Box>secondbox</Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Appointment;
