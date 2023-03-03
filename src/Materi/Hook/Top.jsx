import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./css/index.css"

const Top = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">US News</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Trending</Nav.Link>
            <Nav.Link href="#features">Up To Date</Nav.Link>
            <Nav.Link href="#pricing">Most Viewed</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      )};
  
export default Top;