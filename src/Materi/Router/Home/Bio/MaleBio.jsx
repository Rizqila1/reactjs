import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MaleBio = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("../bio");
    };

    return (
        <div>
             <br/>
            <Container>
                <Row>
                    <Col className="col-md-4 p-3">
                        <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" style={{width: "100%"}}
                        src="https://www.wikihow.com/images_en/thumb/e/e7/Become-an-Alpha-Male-Step-1-Version-2.jpg/v4-460px-Become-an-Alpha-Male-Step-1-Version-2.jpg.webp"/>
                            <Card.Body>
                                <Card.Title>Rodney Erickson</Card.Title>
                                    <p style={{color: "grey"}}>35 Years Old</p>
                                    <Card.Text>
                                    "Rodney Erickson is a content marketing professional at HubSpot, a CRM platform that helps companies attract visitors, 
                                    convert leads, and close customers. He graduated with honors from Columbia University with a dual degree in 
                                    Business Administration and Creative Writing."
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-md-4 p-3">
                        <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" style={{width: "100%"}}
                        src="https://www.wikihow.com/images_en/thumb/6/66/Get-Into-Male-Modeling-Step-1-Version-3.jpg/v4-460px-Get-Into-Male-Modeling-Step-1-Version-3.jpg.webp"/>
                            <Card.Body>
                                <Card.Title>John Grayson</Card.Title>
                                    <p style={{color: "grey"}}>30 Years Old</p>
                                    <Card.Text>
                                    "I'm John Grayson, and I'm a recent college graduate with a Bachelor's Degree in Web Design. 
                                    I'm seeking a full-time opportunity where I can employ my programming skills."
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-md-4 p-3">
                        <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" style={{width: "100%"}}
                        src="https://www.wikihow.com/images_en/thumb/f/fb/Get-Into-Male-Modeling-Step-15-Version-2.jpg/v4-460px-Get-Into-Male-Modeling-Step-15-Version-2.jpg.webp"/>
                            <Card.Body>
                                <Card.Title>Anton Rodriguez</Card.Title>
                                    <p style={{color: "grey"}}>32 Years Old</p>
                                    <Card.Text>
                                    "Anton Rodriguez collects and analyses data to offer well-informed suggestions to businesses.
                                     He's seeking a full-time job to apply her extensive data science skills."
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <button onClick={handleClick}>Back to Choose</button>
            </Container>
        </div>
    )
}

export default MaleBio;