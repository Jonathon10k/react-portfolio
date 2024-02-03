import React from 'react'
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Header = () => {
  return (
    <div className="header">
      < Navbar />
      <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <h1 className="mt-2 display-6 text-center text-white">Hi, I'm Jon Edward</h1>
          <h2 className="mt-2 mb-2 text-white mt-3 text-center fade-in-slow">Welcome to my online portfolio</h2>
        </div>
      </div>
      <div className="row flex-col">
        <div className="col-sm-12 col-md-12 col-lg-6 ms-auto text-center mb-3" id="jumbotron-about-section">
          <img src="./images/avatar.png" className="img-fluid"
            alt="An avatar of JG Edward" />
          <p className="lead text-center mb-3 md-auto">
            
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Header;