import React, { Component } from "react";
import "./styles/Home.css";

class Home extends Component {
  render() {
    return (
      <section className="home">
        <div className="home__container">
          <h1>Materia: Práctica Integradora</h1>
          <h3>Tecnología: React.js</h3>
          <h3>Profesor: Gerardo González Tulián</h3>
          <h3>Alumno: Eduardo González</h3>
          <h3>
            Universidad:{" "}
            <a href="https://www.unpaz.edu.ar/" target="blank">
              {" "}
              UNPAZ
            </a>
          </h3>
        </div>
      </section>
    );
  }
}

export default Home;
