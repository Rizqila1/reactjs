import { Link, Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Materi/Router/CSS/index.css"


function App() {
  return (
    <div className="App">
      <div>
            <Navbar bg="success" variant="dark">
                <Container>
                <Nav className="me-auto">
                        <Link to="/home" className="header0">Home</Link>
                        <Link to='/data' className="header">Data Client</Link>
                        <Link to='/bio' className="header">Bio</Link>
                        <Link to='/about/company' className="header">About Company</Link>
                        <Link to='/about/us' className="header">About Us</Link>
                        <Link to='/empty/paramsSatu' className="header">Empty(Show Use Params)</Link>
                        <Link to='/empty/paramsDua' className="header">Empty(Params2)</Link>
                </Nav>
                </Container>
            </Navbar>
            <Outlet/>
                <div className="footer">React JS</div>
        </div>
    </div>
  );
}

export default App;
