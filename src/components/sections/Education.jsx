import { motion } from "framer-motion";
import { FaCalendarAlt, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

const educationData = [
    {
        "id": 1,
        "degree": "Programación Informática – Aplicaciones Específicas",
        "institution": "Universidad Tecnológica Privada de Santa Cruz",
        "period": "Enero 2015 - Enero 2020",
        "location": "Santa Cruz de la Sierra, Bolivia",
        "description": "Formación académica en programación informática con enfoque en aplicaciones específicas, proporcionando una base sólida en desarrollo de software, estructuras de datos y tecnologías informáticas.",
    }
];

const Education = () => (
    <section id="education" className="py-24 px-4 bg-white dark:bg-slate-900">
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
                    Formación
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Educación
                </h2>
                <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full" />
            </motion.div>

            <div className="max-w-2xl mx-auto">
                {educationData.map((education, index) => (
                    <motion.div
                        key={education.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700 hover:shadow-md hover:border-orange-200 dark:hover:border-orange-800/50 transition-all duration-300"
                    >
                        {/* Icon + Degree */}
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                                <FaGraduationCap className="text-2xl text-orange-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-1">
                                    {education.degree}
                                </h3>
                                <p className="text-orange-600 dark:text-orange-400 font-semibold text-sm">
                                    {education.institution}
                                </p>
                            </div>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-4 mb-5">
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                                <FaCalendarAlt className="text-orange-400 text-xs" />
                                <span>{education.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                                <FaMapMarkerAlt className="text-orange-400 text-xs" />
                                <span>{education.location}</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-slate-600 mb-5" />

                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {education.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Education;
