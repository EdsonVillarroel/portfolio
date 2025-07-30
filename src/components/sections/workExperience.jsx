import ExperienceItem from "components/ui/ExperienceItem";
import { FaBuilding, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const experiences = [
  {
    "id": 1,
    "title": "Desarrollador Frontend",
    "company": "BancoSol",
    "date": "Junio 2023 - Presente",
    "description":
      "Trabajando en el proyecto de crédito de línea 100% online, pionero en Bolivia y próximamente en Latinoamérica. Como desarrollador Full Stack para el Centro Digital, mi enfoque abarca tanto el FrontEnd con NextJS como el BackEnd con .NET, asegurando una experiencia de usuario fluida y segura en nuestras plataformas.",
    "technologies": ["NextJS", ".NET", "TypeScript", "Clean Code", "Modular Architecture"],
    "icon": <FaLaptopCode className="text-3xl text-orange-500" />
  },
  {
    "id": 2,
    "title": "Ingeniero de Software",
    "company": "Banco Fassil S.A.",
    "date": "Diciembre 2021 - Abril 2023",
    "description":
      "Trabajé en múltiples proyectos como desarrollador FrontEnd para el área de innovación y Sistemas. Desarrollé el proyecto de Apertura de cuenta online (ACR) utilizando Angular, clean code, arquitectura basada en módulos, estándares de código de Angular y FacePhi para el reconocimiento facial y verificación biométrica. También trabajé en el proyecto de Apertura de cuenta en agencia (Super Gestor) y en el proyecto de citas médicas virtuales (Medic móvil) con Agora para la gestión de llamadas.",
    "technologies": ["Angular", "TypeScript", "FacePhi", "Agora", "Clean Code", "Modular Architecture"],
    "icon": <FaBuilding className="text-3xl text-orange-500" />
  },
  {
    "id": 3,
    "title": "Analista de Sistema",
    "company": "Banco Fassil S.A.",
    "date": "Enero 2021 - Diciembre 2021",
    "description":
      "Trabajé en el proyecto de citas médicas virtuales (Medic móvil) como desarrollador FrontEnd para el área de innovación y desarrollo utilizando Angular, clean code, arquitectura basada en módulos, estándares de código de Angular y Agora para la gestión de llamadas.",
    "technologies": ["Angular", "TypeScript", "Agora", "Clean Code"],
    "icon": <FaLaptopCode className="text-3xl text-orange-500" />
  },
  {
    "id": 4,
    "title": "Desarrollador Web/Móvil",
    "company": "A2O Dev",
    "date": "Marzo 2020 - Diciembre 2020",
    "description":
      "Desarrollé la aplicación móvil GoTitle utilizando React Native para el registro de títulos de documentos vía móvil, y la aplicación web Alte utilizando AngularJS y Laravel para el registro de títulos de documentos vía web.",
    "technologies": ["React Native", "AngularJS", "Laravel", "JavaScript"],
    "icon": <FaMobileAlt className="text-3xl text-orange-500" />
  }
];

const WorkExperience = () => (
  <section id="experience" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Experiencia Profesional
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto" />
      </div>

      <div className="relative">
        {/* Línea de tiempo */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-1
                        bg-gradient-to-b from-orange-600 via-orange-400 to-orange-200
                        hidden md:block"
         />

        <div
          className="absolute left-0 h-full w-1 bg-gradient-to-b from-orange-600
                        via-orange-400 to-orange-200 md:hidden block"
         />

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
  </section>
);

export default WorkExperience;
