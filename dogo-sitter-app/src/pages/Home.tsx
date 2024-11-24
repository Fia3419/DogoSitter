// filepath: /c:/Users/Fia/source/repos/DogoSitter/DogoSitter.Client/src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Home: React.FC = () => {
    return (
        <Container className="home-container">
            <h1 className="home-header">Welcome to DogoSitter</h1>
            <Navbar bg="light" expand="lg" className="home-navbar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto home-nav">
                        <Nav.Link as={Link} to="/sitters" className="home-nav-link">Dog Sitters</Nav.Link>
                        <Nav.Link as={Link} to="/dogs" className="home-nav-link">Dogs</Nav.Link>
                        <Nav.Link as={Link} to="/add-dog" className="home-nav-link">Add Dog</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="home-nav-link">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Home;