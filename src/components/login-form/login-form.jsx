import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Formik } from "formik";
import { object, string, number, date, InferType } from "yup";

let userSchema = object({
  username: string().required(),
  password: string()
  .required('No password provided.') 
  .min(4, 'Password is too short - should be 4 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

const LoginForm = () => {
  return (
    <Formik
      validationSchema={userSchema}
      onSubmit={console.log}
      initialValues={{
        username: "",
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
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-1">
            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
              <InputGroup className="mt-4" hasValidation>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                    >
                    <Form.Control
                    type="email"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                    {errors.username}
                    </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-0">
            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
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
            <Button className="px-5 bg-primary text-dark border border-0" type="submit">LOGIN</Button>
            </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
