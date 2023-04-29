import React, { useState } from 'react';
import { Box } from '@mui/material';
import Autocomplete from '../../components/autocomplete/autocomplete';
import locationData from '../../../public/json/location.json';
import hospitalData from '../../../public/json/hospital.json';

const Appointment = (props) => {
    
  return (
    <div className='container mt-5'>
      <Autocomplete 
      data={locationData} 
      fieldLabel="Choose Location"/>
     
      <Autocomplete data={hospitalData} fieldLabel="Choose Hospital"/>

    </div>
  );
};

export default Appointment;
