import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import Dogs from './components/dogs';
import AddDog from './components/addDog';
import DogSitters from './pages/DogSitters';
import AddSitter from './components/AddSitter';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to="/">DogoSitter</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/sitters">Dog Sitters</Nav.Link>
                  <Nav.Link as={Link} to="/dogs">Dogs</Nav.Link>
                  <Nav.Link as={Link} to="/add-dog">Add Dog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sitters" element={<DogSitters />} />
              <Route path="/dogs" element={<Dogs />} />
              <Route path="/add-dog" element={<AddDog />} />
              <Route path="/add-sitter" element={<AddSitter />} />
            </Routes>
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;
