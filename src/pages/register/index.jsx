import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Formik } from "formik";
import { object, string, number, date, InferType } from "yup";
import { Container } from "react-bootstrap";
import axios from "axios";
import Otp from '../../components/otp/otp'
import Popup from "../../components/popup/popup"
import Modal from "react-bootstrap/Modal";

let userSchema = object({
  name: string().required(),
  email: string().required(),
  phone: string().required(),
  password: string()
    .required("No password provided.")
    .min(4, "Password is too short - should be 4 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const RegisterForm = () => {
  const [modalShow3, setModalShow3] = useState(false);
  const [postValues, setPostValues] = useState({})
  
  return (
    <Formik
      validationSchema={userSchema}
      onSubmit= {(values) => {      
        console.log(values);

       setPostValues( {
        ...postValues,
          name : values.name,
          email : values.email,
          phone : values.phone,
          password : values.password
        })

        const postParams = {
          name : values.name,
          email : values.email,
          phone : values.phone,
          password : values.password
        }
        
        axios
        .post('http://localhost:5000/api/v1/signup', postParams)
        .then((response) => {
          console.log(response);
        })
        .catch(err => console.log(err));

        setModalShow3(true);
      
      }}

      initialValues={{
        name: "",
        email: "",
        phone: "",
        password: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Container>
          <Row className="justify-content-center">
            <h4 className="mt-5 text-secondary text-center">
              Register For Doctor's Appointment
            </h4>
            <Col md={5}>
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <Form.Group controlId="validationCustom01">
                    <InputGroup className="mt-4" hasValidation>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Full Name"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="name"
                          aria-describedby="inputGroupPrepend"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group controlId="validationFormikUsername">
                    <InputGroup hasValidation>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Phone Number"
                        className="mb-3"
                      >
                        <Form.Control
                          type="tel"
                          placeholder="Phone Number"
                          aria-describedby="inputGroupPrepend"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group controlId="validationFormikUsername">
                    <InputGroup hasValidation>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          aria-describedby="inputGroupPrepend"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group controlId="validationFormikUsername">
                    <InputGroup hasValidation>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          aria-describedby="inputGroupPrepend"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    name="remember"
                    label="Remember me"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationFormik0"
                  />
                </Form.Group>
                <div className="text-center mb-3">
                  <Button
                    className="px-5 bg-primary text-dark border border-0"
                    type="submit"
                  >
                    Register
                  </Button>
                </div>
                <Popup show={modalShow3} onHide={() => setModalShow3(false)}>
                  <Modal.Body>
                    <Otp postValues={postValues} />
                  </Modal.Body>
                </Popup>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
};

export default RegisterForm;
