import React, { Component } from "react";
import "./styles/Navbar.css";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__img">
          <img src={Logo} alt="" />
        </div>
        <div className="nav__title">
          <h1>Países</h1>
          {/* <h2>Eduardo M. González</h2> */}
        </div>
        <nav>
          <ul>
            <li>
              <Link className="nav-links" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-links" to="/about">Acerca de mi</Link>
            </li>
            <li>
              <Link className="nav-links" to="/paises">Paises</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
