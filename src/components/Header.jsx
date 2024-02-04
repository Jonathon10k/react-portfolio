import React from 'react'
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Header = (props) => {
  return (
    <div className="header">
      < Navbar />
      <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
              <h1 className="mt-2 display-6 text-center text-white">{props.title}</h1>
              <h2 className="mt-2 mb-2 text-white mt-3 text-center fade-in-slow">{props.description}</h2>
        </div>
      </div>
      <div className="row flex-col">
        <div className="col-sm-12 col-md-12 col-lg-6 ms-auto text-center mb-3">
              <img src="src/components/pages/assets/images/my-avatar.png" width="200" className="img-fluid header-avatar"
            alt="An avatar of JG Edward" />
          </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Header;
