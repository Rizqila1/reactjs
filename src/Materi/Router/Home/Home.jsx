import React, { useEffect, useState } from "react";
import "../CSS/home.css"
import Accordion from 'react-bootstrap/Accordion';
import { Container } from "react-bootstrap";

const Home = () => {
    const [time, setTime] = useState("");
    const [seconds, setSeconds] = useState(0);
    
    const clock = () => {
        const options = {
            weekday: "long",
            year: "numeric",
            day: "numeric",
            month: "long",
            hour: "2-digit",
            minute: "numeric",
            second: "numeric",
            hourCycle: "h23"
        };

        let date = new Date()
        let time = date.toLocaleString("en-US", options)
        setTime(time);
    }
    
    setInterval(() => {
        setSeconds(seconds + 1);
    }, 1000);

    useEffect(() => {
        clock();
    }, [seconds]);

    return (
        <div>
            <br/>
            <h1 className="title">{time}</h1> 
            <br/> <br/>
                <div className="d-flex justify-content-center align-items-center mb-2">
                    <h2>Welcome to Routing Website</h2>
                    <iframe src="https://giphy.com/embed/du3J3cXyzhj75IOgvA" title="i" style={{width: "480", height:"469", frameBorder:"0"}} className="giphy-embed" allowFullScreen></iframe>
                </div>
                <br/> <br/>

            <Container fluid>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Description</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Missions</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Vision</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>About Us</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </Container>
        </div>
    )
}

export default Home;