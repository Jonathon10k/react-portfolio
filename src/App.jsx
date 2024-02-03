import { useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import page components
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Router>
       <Header title="Hi, I'm Jonathon" description="Welcome to my portfolio" imgSrc="./pages/assets/images/my-avatar.png" />
      <div className="container">
            <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
