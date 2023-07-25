import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home/Home';
import Aboutus from './pages/Aboutus/About';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);


