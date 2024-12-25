const About = () => {
  return (
    <div className="min-h-screen p-10 dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-900 bg-gradient-to-b dark:bg-gray-800 from-orange-200  opacity-0 animate-fadeIn py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-black-300">
          About Me
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Información Personal */}
        <div className=" dark:bg-gray-800  p-6 rounded-lg shadow-md">
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span className="font-semibold text-lg text-black-300">
                Nombre:
              </span>
              <span className="text-black-300">Edson Villarroel Ricaldes</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold text-lg  text-black-300">
                Celular:
              </span>
              <span className="text-black-300">+591 73690866</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold text-lg  text-black-300">
                Correo:
              </span>
              <span className="text-black-300">villarroel@gmail.com</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold text-lg text-black-300">
                Dirección:
              </span>
              <span className="text-black-300">
                Santa Cruz de la Sierra, Av. Libertad N.- 18
              </span>
            </li>
          </ul>
        </div>

        {/* Presentación */}
        <div className="dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
          <h2 className="text-3xl font-semibold text-black-300 mb-4">
            Hello There!
          </h2>
          <p className="text-black-300 leading-relaxed text-justify">
            ¡Hola! Soy un apasionado desarrollador web con conocimientos en
            diseño web, Frontend con Angular y React.js, y Backend con C#. Me
            encanta aprender cosas nuevas y siempre estoy en busca de nuevos
            desafíos para ampliar mis habilidades. Actualmente, me enfoco en
            proyectos de desarrollo web, trabajando en aplicaciones de alta
            calidad con código limpio y arquitectura modular. Me esfuerzo por
            mantenerme actualizado con las últimas tendencias y tecnologías, y
            tengo una sólida comprensión del ciclo de vida completo del
            desarrollo web. Estoy emocionado de seguir creciendo y aprendiendo
            como desarrollador, ¡y espero contribuir positivamente en futuros
            proyectos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
