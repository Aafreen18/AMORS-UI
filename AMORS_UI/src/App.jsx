import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './Components/Landing';
import About from './Components/About';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import LearnMore from './Components/LearnMore';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Landing name="landing" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
