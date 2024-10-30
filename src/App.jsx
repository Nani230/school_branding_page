// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar className="Navbar_container" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
