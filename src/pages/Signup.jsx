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

function Signup() {
  return (
    <main className="main py-5">
      <section className="d-flex align-items-center mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link
              as={Link}
              to={routes.HOME_PAGE.path}
              className="text-gray-700 link"
            >
              <Icon name="angle left" className="me-2"></Icon>
              Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center">
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Formik
                  validationSchema={schema}
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    terms: false,
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
                    <Form className="mt-4" onSubmit={handleSubmit}>
                      <div className="d-flex justify-content-between align-items-center">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Your First Name</Form.Label>
                          <Form.Control
                            name="firstName"
                            placeholder="Enter first name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={errors.firstName && touched.firstName}
                            isValid={!errors.firstName && touched.firstName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Your Last Name</Form.Label>
                          <Form.Control
                            name="lastName"
                            placeholder="Enter last name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={errors.lastName && touched.lastName}
                            isValid={!errors.lastName && touched.lastName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
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

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Your Password</Form.Label>
                        <InputGroup>
                          <InputGroup.Text
                            className={`bg-transparent ${
                              errors.password && touched.password
                                ? "input-invalid"
                                : ""
                            } ${
                              !errors.password && touched.password
                                ? "input-valid"
                                : ""
                            }`}
                          >
                            <Icon
                              className="d-flex align-items-center search-icon"
                              fitted
                              name="unlock alternate"
                            ></Icon>
                          </InputGroup.Text>
                          <Form.Control
                            type="password"
                            name="password"
                            value={values.password}
                            className="search-input"
                            placeholder="Enter password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={errors.password && touched.password}
                            isValid={!errors.password && touched.password}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.password}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <InputGroup>
                          <InputGroup.Text
                            className={`bg-transparent ${
                              errors.confirmPassword && touched.confirmPassword
                                ? "input-invalid"
                                : ""
                            } ${
                              !errors.confirmPassword && touched.confirmPassword
                                ? "input-valid"
                                : ""
                            }`}
                          >
                            <Icon
                              className="d-flex align-items-center search-icon"
                              fitted
                              name="unlock alternate"
                            ></Icon>
                          </InputGroup.Text>
                          <Form.Control
                            type="password"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            className="search-input"
                            placeholder="Re-enter password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              errors.confirmPassword && touched.confirmPassword
                            }
                            isValid={
                              !errors.confirmPassword && touched.confirmPassword
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.confirmPassword}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <Form.Check
                          name="terms"
                          label="I agree to terms & conditions"
                          onChange={handleChange}
                          isInvalid={!!errors.terms}
                          feedback={errors.terms}
                          feedbackType="invalid"
                        />
                      </div>
                      <Button variant="primary" type="submit" className="w-100">
                        Sign up
                      </Button>
                    </Form>
                  )}
                </Formik>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link
                      as={Link}
                      to={routes.SIGN_IN.path}
                      className="fw-bold link"
                    >
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Signup;
