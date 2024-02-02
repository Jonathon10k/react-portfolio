import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          JG Edward
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              <Link to="/Home">Home</Link>
            </a>
            <a className="nav-link" href="#">
              <Link to="/projects">Projects</Link>
            </a>
            <a className="nav-link" href="#">
              <Link to="/contact">Contact</Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
