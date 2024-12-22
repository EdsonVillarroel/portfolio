import ExperienceItem from "components/ui/ExperienceItem";
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

const WorkExperience = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
        Mi Experiencia Profesional
      </h2>

      <div className="relative">
        {/* Línea de tiempo */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 
                        bg-gradient-to-b from-orange-600 via-orange-400 to-orange-200 
                        hidden md:block"
        ></div>

        <div
          className="absolute left-0 h-full w-1 bg-gradient-to-b from-orange-600 
                        via-orange-400 to-orange-200 md:hidden block"
        ></div>

        {/* Lista de experiencias */}
        <div className="space-y-24">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default WorkExperience;
