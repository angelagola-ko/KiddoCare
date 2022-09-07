import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../App.css";
import kiddoCareLogo from "../images/KiddoCare.svg";

const Navigation = (props) => {
  return (
    <Navbar className="bg text-white py-4">
      <Container>
        <Navbar.Brand className="">
          <img src={kiddoCareLogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="nav">
          <Nav.Link className="text-white" as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link className="text-white" as={Link} to="/">
            Logout
          </Nav.Link>
          <Nav.Link className="text-white" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-white" as={Link} to="/Classroom">
            Classroom
          </Nav.Link>
          <Nav.Link className="text-white" as={Link} to="/ContactForm">
            Contact Us
          </Nav.Link>
          <Nav.Link className="text-white" as={Link} to="/Profile">
            Profile
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
