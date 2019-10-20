import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../img/logo.png";

class MainNavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <img style={{}} id="logo2" src={logo}></img>
        <Navbar.Brand href="#home">Dank Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavBar;
