import React, {useState} from 'react';
import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Chip from '@mui/material/Chip';
import { Stack } from '@mui/material';

export default function BasicDatePicker() {
    const [value, setValue] = useState(dayjs());
    const handleClick = () => {
        console.info('You clicked the Chip.');
      };

      const handleDatePicker = (newValue) => {
        setValue(newValue)
        displayFollowingDays(newValue);
      }

      const displayFollowingDays = (day) => {
        let selectedDate = day.$D;
        let followingDaysCount = 7;
        for(let i = selectedDate ; i< selectedDate + followingDaysCount ; i++){
            console.log(dayjs().day(i))
        }
      }
    
  return (
    <React.Fragment>
        <Stack direction="column" spacing={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DemoContainer components={['DatePicker']}> */}
                <DatePicker
                    label="Date"
                    value={value}
                    onChange={(newValue) => handleDatePicker(newValue)}
                    format="LL"
                    />
                {/* </DemoContainer> */}
            </LocalizationProvider>
            <Chip color="primary" label="Clickable" onClick={handleClick} />
        </Stack>

    </React.Fragment>
  );
}