import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function PaymentAmountRadios(props) {
  const{ paymentAmount , setpaymentAmount } = props;

  const handleChange = (event) => {
    setpaymentAmount(event.target.value);
  };

  return (

        <RadioGroup
          aria-labelledby="payment-radios"
          name="price"
          value={paymentAmount}
          onChange={handleChange}
        >
          <FormControlLabel value="500" control={<Radio />} label="Emergency (BDT 500)" />
          <FormControlLabel value="400" control={<Radio />} label="Regular (BDT 400)" />
        </RadioGroup>

  );
}