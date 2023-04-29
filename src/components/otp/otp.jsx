import React, { useState } from 'react';
import { useRouter } from 'next/router'
import OtpInput from 'react-otp-input';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";

const Otp = (props) => {
  const [otp, setOtp] = useState('');
  const router = useRouter();
  const {postValues} = props

  const verifyOtp =(e)=>{
    // if(otp === "" || otp === nul)return;
    e.preventDefault();
    const params = {
      otp: otp
    }

    axios.post('http://localhost:5000/api/v1/verify-otp', params)
      .then((response) => {
          console.log(response.data , "otp");
          login();
          router.push('/appointment')
         
      })
      .catch((error) => {
          console.log(error);
      });
  }

  const login =() =>{
    const userDetails = {
      email: postValues.email,
      password: postValues.password
    }
    sessionStorage.setItem("user", userDetails);
    // axios
    // .post('http://localhost:5000/api/v1/signin', params)
    // .then(response => {
    //   console.log(response);
    //   alert("submitted");
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  }

  return (
    <div className="p-4 box ">
    <p>
      Validate OTP Please enter the OTP (one time password) to verify your
      account.
    </p>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicOtp">
      <OtpInput
      inputStyle={{
        width: "3rem",
        height: "3rem",
        margin: "0 auto",
        fontSize: "1rem",
        borderRadius: 4,
        border: "2px solid rgba(0,0,0,0.3)"
      }}
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      </Form.Group>

      <Button onClick={e => verifyOtp(e)} variant="primary">
        Verify
      </Button>
    </Form>
<h6>
Not received your code? <a href="../App.js">Resend code</a>
</h6>
</div>
  );
};
export default Otp;