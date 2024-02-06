import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Hello from "./Hello";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
