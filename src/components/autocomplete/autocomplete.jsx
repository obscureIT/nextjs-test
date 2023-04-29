import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const CustomAutocomplete = (props) => {
    const {data,fieldLabel, renderOption} =props

    return(
    <Autocomplete
        id="country-select-demo"
        className='mx-auto mt-4'
        sx={{ width: 300 }}
        options={data}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={renderOption}
        renderInput={(params) => (
          <TextField
            {...params}
            label={fieldLabel}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    )
}
export default CustomAutocomplete;