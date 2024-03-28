import { Component } from "react";
import { FaBriefcase } from "react-icons/fa";
import "./WorkExperience.css";

class workExperience extends Component {
  render() {
    return (
      <div>
        <div className="title-work-experience"><h3>My Resume</h3></div>
        <div>
          <div className="container-experience">
            <ul className="timeline">
              <li className="timeline-heading">
                <div>
                  <h3>Work Experience</h3>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <FaBriefcase color="white" size={"1.5rem"} />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Semi-Senior Developer</h3>
                    <span className="company">
                      Banco Fassil - 2021 - Actual
                    </span>
                  </div>
                  <div className="timeline-body">
                  <p>
                    Trabajo como ingeniero de software en el Banco Fassil, donde me desempeño como desarrollador FrontEnd para el área de innovación y desarrollo en varios proyectos. Entre ellos, destaca el proyecto de citas médicas virtuales (Medic movil) utilizando Angular, C# y Agora para el manejo de llamadas, y el proyecto de apertura de cuenta online (ACR) con reconocimiento facial y verificación biométrica mediante FacePhi.
                    </p>
                    <p>
                    Además, he trabajado en el proyecto de apertura de cuenta en agencia y en el mantenimiento del proyecto de sorteo Fabulosa, ambos utilizando Angular y C#. También he colaborado en la creación de la librería de componentes Pionus, utilizando Angular y StoryBook para su documentación.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge">
                  <FaBriefcase color="white" size={"1.5rem"} />
                </div>
                <div className="timeline-panel text-start">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Freelancer</h3>
                    <span className="company">Company Name - Mayo 2022 - Mayo 2022</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                    Trabajé en el desarrollo en el proyecto de ecommerce, mi trabajo consiste en utilizar Vue.js para el frontend y .NET para el backend, en colaboración con el equipo de diseño y de back-end, para crear una experiencia de compra en línea fluida y segura.
                    </p>
                   
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <FaBriefcase color="white" size={"1.5rem"} />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Junior Developer</h3>
                    <span className="company">
                      A2Odev - Marzo 2020 - Diciembre 2020 
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                    Trabajé en el desarrollo de la aplicación móvil GoTitle utilizando React Native para el registro de títulos de documentos vía móvil, y en la aplicación web Alte utilizando AngularJS y Laravel para el registro de títulos de documentos vía web.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default workExperience;
