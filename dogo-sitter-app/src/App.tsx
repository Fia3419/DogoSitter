import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dogs from './components/dogs';
import AddDog from './components/addDog';
import DogSitters from './pages/DogSitters';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sitters">Dog Sitters</Link></li>
              <li><Link to="/dogs">Dogs</Link></li>
              <li><Link to="/add-dog">Add Dog</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sitters" element={<DogSitters />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/add-dog" element={<AddDog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
