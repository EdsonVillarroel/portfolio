import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div className="container-about">
        <div className="container-title">
          <div className="title">
            <h2 className="about-title">About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="container-personal-info">
            <ul className="info">
              <li className="personal-data">
                <span className="first-block span">Full Name:</span>
                <span className="second-block span">
                  Edson Villarroel Ricaldes
                </span>
              </li>
              <li className="personal-data">
                <span className="first-block span">Phone:</span>
                <span className="second-block span">+591 73690866</span>
              </li>
              <li className="personal-data">
                <span className="first-block span">Email:</span>
                <span className="second-block span">villarroel@gmail.com</span>
              </li>
              <li className="personal-data">
                <span className="first-block span">Website:</span>
                <span className="second-block span">www.yoursite.com</span>
              </li>
              <li className="personal-data">
                <span className="first-block span">Address:</span>
                <span className="second-block span">Santa Cruz de la sierra Av. libertad N.- 18</span>
              </li>
            </ul>
          </div>
          <div className="container-presentaion">
            <h2 className="title-hello">Hello There!</h2>
            <p className="content-presentacion">

            ¡Hola! Soy un apasionado desarrollador web con conocimientos en diseño web, Frontend con Angular y React.js y Backend con C#. Me encanta aprender cosas nuevas y estoy siempre en busca de nuevos desafíos para ampliar mis habilidades. Actualmente estoy enfocado en proyectos de desarrollo web, trabajando en aplicaciones de alta calidad y enfocado en el código limpio y la arquitectura basada en módulos. Como desarrollador, siempre me esfuerzo por mantenerme actualizado con las últimas tendencias y tecnologías, y me enorgullece mantener una sólida comprensión del ciclo de vida completo del desarrollo web. Me apasiona lo que hago y estoy emocionado de seguir creciendo y aprendiendo como desarrollador web. ¡Estoy abierto a nuevas oportunidades y espero poder hacer una contribución positiva en futuros proyectos!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
