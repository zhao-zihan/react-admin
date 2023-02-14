import SimpleBar from "simplebar-react";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { Icon } from "semantic-ui-react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/Sidebar.css";
import ReactLogo from "../assets/img/react-logo-transparent.svg";
import { CSSTransition } from "react-transition-group";
import Header from "./Header";

function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button
            as={Nav.Link}
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <span className="sidebar-icon">
                <Icon name={icon} className="me-2"></Icon>
              </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">{children}</Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const {
      title,
      link,
      external,
      target,
      icon,
      image,
      badgeText,
      badgeBg = "secondary",
      badgeColor = "primary",
    } = props;
    const classNames = badgeText
      ? "d-flex justify-content-start align-items-center justify-content-between"
      : "";
    // const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? (
              <span className="sidebar-icon">
                <Icon name={icon} className="me-2"></Icon>
              </span>
            ) : null}
            {image ? (
              <Image
                src={image}
                width={20}
                height={20}
                className="sidebar-icon svg-icon"
              />
            ) : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge
              pill
              bg={badgeBg}
              text={badgeColor}
              className="badge-md notification-count ms-2"
            >
              {badgeText}
            </Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Header />
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar
          className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}
        >
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Icon name="user circle" className="me-2"></Icon>
                </div>
                <div className="d-block">
                  <h6>Hi, User</h6>
                  <Button
                    as={Link}
                    variant="secondary"
                    size="xs"
                    to={routes.SIGN_IN.path}
                    className="text-dark"
                  >
                    <Icon name="sign out" className="me-2"></Icon>
                    Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link
                className="collapse-close d-md-none"
                onClick={onCollapse}
              >
                <Icon name="close" className="me-2"></Icon>
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem
                title=" Order"
                link={routes.DASHBOARD_OVERVIEW.path}
                image={ReactLogo}
              />
              <NavItem
                title="Overview"
                link={routes.DASHBOARD_OVERVIEW.path}
                icon="chart pie"
              />
              <NavItem
                title="Settings"
                icon="setting"
                link={routes.SETTINGS.path}
              />
              <NavItem
                title="Tables"
                icon="columns"
                link={routes.TABLES.path}
              />
              <CollapsableNavItem
                eventKey="examples/"
                title="Page Examples"
                icon="file alternate"
              >
                <NavItem title="Sign In" link={routes.SIGN_IN.path} />
                <NavItem title="Sign Up" link={routes.SIGN_UP.path} />
                <NavItem
                  title="Forgot password"
                  link={routes.FORGOT_PASSWORD.path}
                />
                <NavItem title="404 Not Found" link={routes.NOT_FOUND.path} />
              </CollapsableNavItem>
              <NavItem
                title="Username"
                icon="user circle"
                link={routes.PROFILE.path}
              />
              <Button className="btn-sign-out">
                <Icon name="log out"></Icon> Sign out
              </Button>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
}

export default Sidebar;
