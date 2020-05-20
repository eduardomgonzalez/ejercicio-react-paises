import React, { Component } from "react";
import "./styles/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__container">
          <h1>Materia: Práctica Integradora</h1>
          <h3>Tecnología: React.js</h3>
          <h3>Profesor: Gerardo González Tulián</h3>
          <h3>Alumno: Eduardo González</h3>
          <h3>Universidad: <span>UNPAZ</span></h3>
        </div>
      </div>
    );
  }
}

export default Home;
