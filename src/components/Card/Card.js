import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router";
import './Card.css';

const CardShow = () => {

    const history = useHistory();

    return (
        <Row>
        <div>
        <Col lg={4} md={6} sm={12}>
            <Card id="card">
                <Card.Img variant="top" src={require('../../assets/images/neonbrand-1-aA2Fadydc-unsplash.jpg')} />
                <Card.Body>
                    <Card.Title>Course Name</Card.Title>
                    <Card.Text>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae"
                    </Card.Text>
                    <Button variant="primary" onClick={()=> history.push("/course")}>Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
        </div>
        </Row>
    )
}

export default CardShow;