import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ReactLogo from "../assets/img/react-logo-transparent.svg";
import { routes } from "../routes.js";

function Header() {
  return (
    <Navbar variant="dark" expand="lg" bg="dark">
      <Container className="position-relative">
        <Navbar.Brand href="/">
          <Image
            src={ReactLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-default-primary" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Pages" id="collasible-nav-dropdown">
              <NavDropdown.Item href={routes.SIGN_IN.path}>
                Sign in
              </NavDropdown.Item>
              <NavDropdown.Item href={routes.SIGN_UP.path}>
                Sign up
              </NavDropdown.Item>
              <NavDropdown.Item href={routes.FORGOT_PASSWORD.path}>
                Forget password
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Reset password
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
