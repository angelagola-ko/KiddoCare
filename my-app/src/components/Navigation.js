import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom";
import '../App.css';

const Navigation = (props) => {
    return (
        <Navbar className="bg text-white py-4">
            <Container>
                <Navbar.Brand className="text-white">KiddoCare</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="nav">
                    <Nav.Link className="text-white" as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/Classroom">Classroom</Nav.Link>
            
                </Nav>

            </Container>
        </Navbar>
    )
}

export default Navigation