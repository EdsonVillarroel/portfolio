import { Component } from "react";
import "my-services/myServices.css";

class myServices extends Component {
  render() {
    const projects = [
      {
        title: "Micro-Frontend",
        description:
          "Prueba de Microfrontends. Código disponible en mi repositorio de GitHub. Se utilizó la arquitectura de microservicios para construir una aplicación web modular y escalable.",
        githubLink: "https://github.com/EdsonVillarroel/microfrontends",
      },
      {
        title: "Animacion-Maquetado-CSS",
        description: "Proyecto básico de HTML y CSS. Diseño web con código fuente disponible en mi repositorio de GitHub.",
        githubLink: "https://github.com/EdsonVillarroel/maquetacion-animacion-css/tree/master",
      },
      {
        title: "Todo List",
        description: "Todo list' en React, este proyecto incluye una lista de tareas interactiva donde puedes agregar, editar y eliminar tareas Código disponible en mi repositorio de GitHub.",
        githubLink: "https://github.com/EdsonVillarroel/react-task",
      },
    ];

    const projectCards = projects.map((project) => (
      <div className="card-container" key={project.title}>
        <div className="card-header">
          <h2>{project.title}</h2>
        </div>
        <div className="card-body">
          <p>{project.description}</p>
        </div>
        <div className="card-footer">
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            Ver en GitHub
          </a>
        </div>
      </div>
    ));

    return <div className="project-cards">{projectCards}</div>;
  }
}
export default myServices;
