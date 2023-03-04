import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FemaleBio = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("../bio")
    }

    return (
        <div>
             <br/>
            <Container>
                <Row>
                    <Col className="col-md-4 p-3">
                        <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" style={{width: "100%"}}
                        src="https://wikihow.com/images/thumb/a/aa/Date-an-Aries-Female-Step-13.jpg/aid189481-v4-728px-Date-an-Aries-Female-Step-13.jpg.webp"/>
                            <Card.Body>
                                <Card.Title>Mary Han</Card.Title>
                                    <p style={{color: "grey"}}>28 Years Old</p>
                                    <Card.Text>
                                    "Mary Han is an administrative assistant with eight years of experience. 
                                    She's responsible for educating other employees on using progressive systems and applications."
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-md-4 p-3">
                        <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" style={{width: "100%"}}
                        src="https://www.wikihow.com/images/thumb/0/09/Dress-With-Style-Step-1-Version-2.jpg/aid566979-v4-728px-Dress-With-Style-Step-1-Version-2.jpg.webp"/>
                            <Card.Body>
                                <Card.Title>Jane Hong</Card.Title>
                                    <p style={{color: "grey"}}>30 Years Old</p>
                                    <Card.Text>
                                    "I'm Jane Hong, and I recently graduated with an advanced diploma from Smith secondary school. 
                                    I'm seeking an internship where I can apply my skills in content creation and increase my experience in digital marketing."
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-md-4 p-3">
                        <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" style={{width: "100%"}}
                        src="https://www.wikihow.com/images/thumb/7/76/Be-the-Alpha-Female-Step-18.jpg/aid156166-v4-728px-Be-the-Alpha-Female-Step-18.jpg.webp"/>
                            <Card.Body>
                                <Card.Title>Nur Elijah</Card.Title>
                                    <p style={{color: "grey"}}>27 Years Old</p>
                                    <Card.Text>
                                    "I'm Nur Elijah, and I have extensive experience in retail and service. 
                                    I'm known for my friendliness and enthusiasm about my work."
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

export default FemaleBio;