import React, { Component } from "react";
import "./styles/About.css";
import ImagenAbout from "../images/logo.png";

class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="row about__container justify-content-around">
          <div className="col-md-12 col-lg-5 about__container-details">
            <h1>Hola! Soy Eduardo González</h1>
            <h2>Soy estudiante de la Unpaz y Desarrollador Web</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              inventore quam officiis delectus accusantium vel reprehenderit,
              magni suscipit at expedita voluptates animi? A quasi quo dolor,
              quod iure nisi sunt sapiente labore nam inventore aliquam
              consequatur itaque nesciunt nostrum illo!
            </p>
          </div>
          <div className="col-md-12 col-lg-5 about__container-image">
            <img src={ImagenAbout} alt="" />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
