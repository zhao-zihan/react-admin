import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { routes } from "../routes.js";
import { Icon } from "semantic-ui-react";
import { Formik } from "formik";
import { schema } from "../schemas/index.js";
import "../css/Signin.css";

function ForgotPassword() {
  return (
    <main className="main py-5">
      <section className="d-flex align-items-center mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link
              as={Link}
              to={routes.SIGN_IN.path}
              className="text-gray-700 link"
            >
              <Icon name="angle left" className="me-2"></Icon>
              Back to sign in
            </Card.Link>
          </p>
          <Row className="justify-content-center">
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Forgot your password?</h3>
                </div>
                <p className="mb-4">
                  Don't worry! Just type in your email and we will send you a
                  link to reset your password!
                </p>
                <Formik validationSchema={schema} initialValues={{ email: "" }}>
                  {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                  }) => (
                    <Form className="mt-4" onSubmit={handleSubmit}>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <InputGroup>
                          <InputGroup.Text
                            className={`bg-transparent ${
                              errors.email && touched.email
                                ? "input-invalid"
                                : ""
                            } ${
                              !errors.email && touched.email
                                ? "input-valid"
                                : ""
                            }`}
                          >
                            <Icon
                              className="d-flex align-items-center search-icon"
                              fitted
                              name="envelope"
                            />
                          </InputGroup.Text>
                          <Form.Control
                            name="email"
                            value={values.email}
                            placeholder="Enter email"
                            className="search-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={errors.email && touched.email}
                            isValid={!errors.email && touched.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <Button variant="primary" type="submit" className="w-100">
                        Recover password
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default ForgotPassword;
