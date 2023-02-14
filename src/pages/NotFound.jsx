import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { routes } from "../routes.js";
import { Icon } from "semantic-ui-react";
import "../css/Signin.css";

function NotFound() {
  return (
    <main>
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col
              xs={12}
              className="text-center d-flex align-items-center justify-content-center"
            >
              <div>
                <p className="lead fw-bold error-code">404</p>
                <h1 className="text-primary">Page not found</h1>
                <p className="lead my-4">
                  Oops! Looks like you followed a bad link. If you think this is
                  a problem with us, please contact us.
                </p>
                <Button
                  as={Link}
                  variant="primary"
                  className="animate-hover"
                  to={routes.HOME_PAGE.path}
                >
                  <Icon name="angle left" className="me-2"></Icon>
                  Go back home
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default NotFound;
