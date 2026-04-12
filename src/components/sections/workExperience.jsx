import ExperienceItem from "components/ui/ExperienceItem";
import { motion } from "framer-motion";
import { FaBuilding, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const experiences = [
    {
        "id": 1,
        "title": "Desarrollador Full Stack",
        "company": "BancoSol",
        "date": "Junio 2023 - Presente",
        "isCurrent": true,
        "description":
        "Trabajando en el proyecto de crédito de línea 100% online, pionero en Bolivia y próximamente en Latinoamérica. Como desarrollador Full Stack para el Centro Digital, mi enfoque abarca tanto el FrontEnd con NextJS como el BackEnd con .NET, asegurando una experiencia de usuario fluida y segura en nuestras plataformas.",
        "technologies": ["NextJS", ".NET", "TypeScript", "Clean Code", "Modular Architecture"],
        "icon": <FaLaptopCode />
    },
    {
        "id": 2,
        "title": "Ingeniero de Software",
        "company": "Banco Fassil S.A.",
        "date": "Diciembre 2021 - Abril 2023",
        "isCurrent": false,
        "description":
        "Desarrollé el proyecto de Apertura de cuenta online (ACR) utilizando Angular con reconocimiento facial y verificación biométrica (FacePhi). También trabajé en apertura de cuenta en agencia (Super Gestor) y citas médicas virtuales (Medic móvil) con videoconferencia en tiempo real (Agora).",
        "technologies": ["Angular", "TypeScript", "FacePhi", "Agora", "Clean Code", "Modular Architecture"],
        "icon": <FaBuilding />
    },
    {
        "id": 3,
        "title": "Analista de Sistema",
        "company": "Banco Fassil S.A.",
        "date": "Enero 2021 - Diciembre 2021",
        "isCurrent": false,
        "description":
        "Trabajé en el proyecto de citas médicas virtuales (Medic móvil) como desarrollador FrontEnd para el área de innovación y desarrollo utilizando Angular con arquitectura basada en módulos y Agora para la gestión de videollamadas.",
        "technologies": ["Angular", "TypeScript", "Agora", "Clean Code"],
        "icon": <FaLaptopCode />
    },
    {
        "id": 4,
        "title": "Desarrollador Web/Móvil",
        "company": "A2O Dev",
        "date": "Marzo 2020 - Diciembre 2020",
        "isCurrent": false,
        "description":
        "Desarrollé la aplicación móvil GoTitle con React Native para registro de títulos de documentos, y la aplicación web Alte con AngularJS y Laravel para el registro de títulos vía web.",
        "technologies": ["React Native", "AngularJS", "Laravel", "JavaScript"],
        "icon": <FaMobileAlt />
    }
];

const WorkExperience = () => (
    <section id="experience" className="py-24 px-4 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-5xl mx-auto">

            {/* Section Header */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
                    Trayectoria
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Experiencia Profesional
                </h2>
                <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full" />
            </motion.div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-orange-400/60 to-transparent md:-translate-x-px" />

                <div className="space-y-12">
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
