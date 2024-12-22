import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "FullStack Developer",
    company: "Banco Sol",
    date: "Junio 2023 - Actual",
    description:
      "Trabajando en el proyecto de crédito de línea 100% online, pionero en Bolivia y próximamente en Latinoamérica. Como desarrollador Full Stack para el Centro Digital, mi enfoque abarca tanto el FrontEnd con ReactJS y NextJS como el BackEnd con .NET, asegurando una experiencia de usuario fluida y segura en nuestras plataformas.",
    icon: <FaLaptopCode className="text-3xl text-orange-500" />,
  },
  {
    id: 2,
    title: "FullStack Developer",
    company: "Banco Fassil",
    date: "2021 - Mayo 2023",
    description:
      "Trabajo como ingeniero de software en el Banco Fassil, donde me desempeño como desarrollador FrontEnd para el área de innovación y desarrollo en varios proyectos. Entre ellos, destaca el proyecto de citas médicas virtuales (Medic movil) utilizando Angular, C# y Agora para el manejo de llamadas, y el proyecto de apertura de cuenta online (ACR) con reconocimiento facial y verificación biométrica mediante FacePhi. Además, he trabajado en el proyecto de apertura de cuenta en agencia y en el mantenimiento del proyecto de sorteo Fabulosa, ambos utilizando Angular y C#. También he colaborado en la creación de la librería de componentes Pionus, utilizando Angular y StoryBook para su documentación.",
    icon: <FaLaptopCode className="text-3xl text-orange-500" />,
  },
  {
    id: 3,
    title: "FrontEnd Developer",
    company: "Mayo 2022 - Mayo 2022",
    description:
      "Trabajé en el desarrollo en el proyecto de ecommerce, utilizando Vue.js para el frontend y .NET para el backend, colaborando con el equipo de diseño y de back-end, para crear una experiencia de compra en línea fluida y segura.",
    icon: <FaLaptopCode className="text-3xl text-orange-500" />,
  },
  {
    id: 4,
    title: "FrontEnd Web/Mobile Developer",
    company: "A2Odev",
    date: "Marzo 2020 - Diciembre 2020",
    description:
      "Trabajé en el desarrollo de la aplicación móvil GoTitle utilizando React Native para el registro de títulos de documentos vía móvil, y en la aplicación web Alte utilizando AngularJS y Laravel para el registro de títulos de documentos vía web.",
    icon: <FaMobileAlt className="text-3xl text-orange-500" />,
  },
];

const WorkExperience = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
          Mi Experiencia Profesional
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-600 via-orange-400 to-orange-200"></div>

          <div className="space-y-24">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-orange-600 dark:text-orange-400">
                      {experience.title}
                    </h4>
                    <div className="text-lg text-gray-600 dark:text-gray-300">
                      {experience.company}
                    </div>
                    {experience.date && (
                      <span className="text-gray-500">{experience.date}</span>
                    )}
                    <p className="text-gray-500 dark:text-gray-400">
                      {experience.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="relative z-10 w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center"
                >
                  {experience.icon}
                </motion.div>

                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pl-8" : "pr-8 text-right"
                  }`}
                >
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
