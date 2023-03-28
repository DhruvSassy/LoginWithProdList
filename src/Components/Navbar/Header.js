import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = (onClick) => {
  const navigate = useNavigate();
  const Name = localStorage.getItem("Name");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="info">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/add">Add</Nav.Link>
          </Nav>
          <Nav collapseOnSelect>
            <Navbar.Brand href=".">{Name}</Navbar.Brand>
            <Navbar.Brand eventKey={2} href="." onClick={logoutHandler}>
              Log Out
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;