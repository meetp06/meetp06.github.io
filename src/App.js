import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/homePage/home';
import About from './pages/aboutMePage/about';
import Resume from './pages/resumePage/resume';
import Contact from './pages/contactPage/contact';
import Navbar from './containers/navbar';


const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route element={<p>Path not resolved</p>} />
      </Routes>
    </HashRouter>
  );
};

export default App;