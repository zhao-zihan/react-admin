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
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Formik
                  validationSchema={schema}
                  initialValues={{ email: "", password: "" }}
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
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <InputGroup>
                          <InputGroup.Text
                            className={`bg-transparent ${
                              errors.email && touched.email
                                ? "input-invalid"
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
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.password}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <Form.Check type="checkbox" label="Remember me" />
                        <Card.Link className="link">Forgot password?</Card.Link>
                      </div>
                      <Button variant="primary" type="submit" className="w-100">
                        Sign in
                      </Button>
                    </Form>
                  )}
                </Formik>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link
                      as={Link}
                      to={routes.SIGN_UP.path}
                      className="fw-bold link"
                    >
                      {` Create account `}
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

export default ForgotPassword;
