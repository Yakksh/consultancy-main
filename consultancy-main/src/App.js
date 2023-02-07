import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Technologies from "./Technologies/Technologies";
import Portfolio from "./Portfolio/Portfolio";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import NavBar from "./Navbar/NavBar"
import Footer from './Footer/Footer';

import "./App.css";

function App() {

  return (
    <Router>
    <div className="App">
      <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
    </div>
    </Router>
  );
}

export default App;
