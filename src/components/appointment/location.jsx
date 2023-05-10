import React, { useState } from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), { ssr: false });

const SelectLocationAndHospital = (props) => {
    const {
        locations,
        hospitals,
        selectedLocation,
        setSelectedLocation,
        selectedHospital,
        setSelectedHospital,
        formData,
        setFormData
    } = props;
    
    // const locations = [
    //     { label: "Dhaka", value: "dhaka" },
    //     { label: "CTG", value: "ctg" },
    //     { label: "Sylhet", value: "sylhet" },
    //   ];
      
      // const hospitals = [
      //   { label: "Dhaka Hospital", value: "dhaka", location: "dhaka" },
      //   { label: "Dhaka Hospital", value: "dhakaHospital", location: "dhaka" },
      //   { label: "CTG Hospital", value: "ctgHospital", location: "ctg" },
      //   { label: "Sylhet Hospital", value: "sylhetHospital", location: "sylhet" },
      // ];
      
   
  
    // console.log("selectedLocation", selectedLocation);
    // console.log("selectedHospital", selectedHospital);
  
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
  
    // console.log(formData);
  
    return(
    <div style={{  width: "444px" , margin: "0 auto"}} >
        <Box>
          <Select
            options={locations}
            onChange={handleSelectLocationChange}
            value={selectedLocation}
            placeholder="Select an Location"
          />
        </Box>
        {selectedLocation ? (
          <Box sx={{ mt: 4 }}>
            <Select
              options={hospitals}
              onChange={handleSelectHospitalChange}
              value={selectedHospital}
              placeholder="Select an Hospital"
            />
          </Box>
        ) : null}
      </div>
    )
}

export default SelectLocationAndHospital;