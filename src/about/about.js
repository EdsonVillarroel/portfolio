import "./about.css";

const About = () => {
  return (
    <div className="container-about">
      <div className="title">
        <h2 className="about-title">About Me</h2>
      </div>
      <div className="row">
        <div className="container-personal-info">
          <ul className="info">
            <li className="personal-data">
              <span className="first-block span">Nombre:</span>
              <span className="second-block span">
                Edson Villarroel Ricaldes
              </span>
            </li>
            <li className="personal-data">
              <span className="first-block span">Celular:</span>
              <span className="second-block span">+591 73690866</span>
            </li>
            <li className="personal-data">
              <span className="first-block span">Correo:</span>
              <span className="second-block span">villarroel@gmail.com</span>
            </li>
            <li className="personal-data">
              <span className="first-block span">Address:</span>
              <span className="second-block span">
                Santa Cruz de la Sierra Av. libertad N.- 18
              </span>
            </li>
          </ul>
        </div>
        <div className="container-presentaion">
          <h2 className="title-hello">Hello There!</h2>
          <p className="content-presentacion">
            ¡Hola! Soy un apasionado desarrollador web con conocimientos en
            diseño web, Frontend con Angular y React.js y Backend con C#. Me
            encanta aprender cosas nuevas y estoy siempre en busca de nuevos
            desafíos para ampliar mis habilidades. Actualmente estoy enfocado en
            proyectos de desarrollo web, trabajando en aplicaciones de alta
            calidad y enfocado en el código limpio y la arquitectura basada en
            módulos. Como desarrollador, siempre me esfuerzo por mantenerme
            actualizado con las últimas tendencias y tecnologías, y me
            enorgullece mantener una sólida comprensión del ciclo de vida
            completo del desarrollo web. Me apasiona lo que hago y estoy
            emocionado de seguir creciendo y aprendiendo como desarrollador web.
            ¡Estoy abierto a nuevas oportunidades y espero poder hacer una
            contribución positiva en futuros proyectos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
