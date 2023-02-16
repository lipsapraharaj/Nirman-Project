import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav id="mainnavbar" className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* <img id="mainlogo" src="images/logo90.jpeg" alt=""> */}
          <a id="mainnav" className="navbar-brand text-white" href="#">MOSQ-Shield</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink id="navbarlink" className="nav-link active" aria-current="page" to="/"
                >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink id="navbarlink" className="nav-link active" aria-current="page"
                  to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink id="navbarlink" className="nav-link active" aria-current="page" to="/map">Map</NavLink>
              </li>
            </ul>
            <NavLink type="button" className="btn btn-outline-light btn-sm" id="loginbtn" to="/login">Login</NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar