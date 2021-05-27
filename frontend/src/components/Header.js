import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav} from "react-bootstrap";

const Header = () => {
  return (
    <header className="mb-4">
      <Navbar bg="dark" variant="dark" expand="lg">
        <LinkContainer to="/proshop">
          <Navbar.Brand>Proshop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/proshop/cart">
              <Nav.Link>cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/proshop/login">
              <Nav.Link>sign in</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
