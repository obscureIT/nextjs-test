import React, { useState } from "react";
import { Box } from "@mui/material";
import Autocomplete from "../../components/autocomplete/autocomplete";
import locationData from "../../../public/json/location.json";
import hospitalData from "../../../public/json/hospital.json";
import Select from "react-select";
// import dynamic from "next/dynamic";

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

// const Select = dynamic(() => import("react-select"), { ssr: false });

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
    <React.Fragment>
      <div style={{ margin: "100px 0" }}>
        <div>
          <Select
            options={locations}
            onChange={handleSelectLocationChange}
            value={selectedLocation}
            placeholder="Select an Location"
          />

          {selectedLocation ? (
            <Select
              className="mt-5"
              options={hospitals.filter(
                (option) => option.location === selectedLocation.value
              )}
              onChange={handleSelectHospitalChange}
              value={selectedHospital}
              placeholder="Select an Hospital"
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Appointment;
