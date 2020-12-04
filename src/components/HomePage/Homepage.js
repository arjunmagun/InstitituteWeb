import React from 'react'
import "./homepage.css";
import Navbar from '../Navbar/Navbar';
import { Container, Button, Col, Row } from 'react-bootstrap';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';

const Homepage = () => {
    return (
        <div>
        <div className="top-container">
        <Navbar />
          <h1 className="ssca">
            Students Science Commerce Academy
          </h1>
          <h1 className="main-line">
            We make learning Easy and Effective for you.
          </h1>
          <p className="free-class">
            For your First and Trial class:
          </p>
          <Button id="button" variant="primary">
            Book now
          </Button>
          <Button id="button2" variant="secondary" href="/about">
            Learn More
          </Button>
        </div>
        <div className="middle-container">
          <h1>
            Our Courses.
          </h1>
          <Container>
          <Row md={12}>
            <Col><Card /></Col>
            <Col><Card /></Col>
            <Col><Card /></Col>
            <Col><Card /></Col>
          </Row>
          </Container>
        </div>
        <div className="bottom-container">
          <Footer />
        </div>
        </div>
    )
}

export default Homepage;