import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Icon } from "semantic-ui-react";
import ReactLogo from "../assets/img/react-logo-transparent.svg";
import { routes } from "../routes.js";
import "../css/Header.css";

function Header() {
  const pageDropDownIcon = (
    <span>
      <Icon name="file alternate"></Icon>Pages
    </span>
  );
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
            <Nav.Link href={routes.DASHBOARD_OVERVIEW.path}>
              <Icon name="chart pie"></Icon>Overview
            </Nav.Link>
            <Nav.Link href={routes.SETTINGS.path}>
              <Icon name="setting"></Icon>Settings
            </Nav.Link>
            <Nav.Link href={routes.TABLES.path}>
              <Icon name="columns"></Icon>Tables
            </Nav.Link>
            <NavDropdown
              title={pageDropDownIcon}
              id="collasible-nav-dropdown"
              icon="file alternate"
            >
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
            <Nav.Link>
              <Icon name="user circle"></Icon>Username
            </Nav.Link>
            <Button className="btn-sign-out">
              <Icon name="log out"></Icon> Sign out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
