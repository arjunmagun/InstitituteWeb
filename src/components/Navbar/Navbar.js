import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import './navbar.css';

 const NavApp = () => {
    return (
        <div>
            <Navbar bg="transparent" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand id="brand_name" href="/">SCA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link id="home" href="/">Home</Nav.Link>
                    <Nav.Link id="about" href="/about">About</Nav.Link>
                    <Nav.Link id="contact" href="/contact">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavApp;