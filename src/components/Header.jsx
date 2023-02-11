import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ReactLogo from "../assets/img/react-logo-transparent.svg";
import { routes } from "../routes.js";

function Header() {
  return (
    <Navbar variant="dark" expand="lg" bg="dark" className="d-md-none">
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
            <Nav.Link href={routes.DASHBOARD_OVERVIEW.path}>Overview</Nav.Link>
            <Nav.Link href={routes.SETTINGS.path}>Settings</Nav.Link>
            <Nav.Link href={routes.TABLES.path}>Tables</Nav.Link>
            <NavDropdown title="Pages" id="collasible-nav-dropdown">
              <NavDropdown.Item href={routes.SIGN_IN.path}>
                Sign In
              </NavDropdown.Item>
              <NavDropdown.Item href={routes.SIGN_UP.path}>
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Item href={routes.FORGOT_PASSWORD.path}>
                Forget Password
              </NavDropdown.Item>
              <NavDropdown.Item href={routes.NOT_FOUND.path}>
                404 Not Found
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
