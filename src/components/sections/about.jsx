import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const stats = [
    { value: "4+", label: "Años de\nExperiencia", color: "text-orange-500" },
    { value: "4", label: "Empresas\nFintech", color: "text-orange-500" },
    { value: "14+", label: "Tecnologías\nDominadas", color: "text-orange-500" },
    { value: "100%", label: "Dedicación\nFull Stack", color: "text-orange-500" },
];

const personalInfo = [
    { icon: <FaPhone />, label: "Celular", value: "+591 73690866", href: "tel:+59173690866" },
    { icon: <FaEnvelope />, label: "Correo", value: "villarroel.dev@gmail.com", href: "mailto:villarroel.dev@gmail.com" },
    { icon: <FaMapMarkerAlt />, label: "Ubicación", value: "Santa Cruz de la Sierra, Bolivia" },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "edsonvillarroelricaldes", href: "https://www.linkedin.com/in/edsonvillarroelricaldes/" },
    { icon: <FaGithub />, label: "GitHub", value: "EdsonVillarroel", href: "https://github.com/EdsonVillarroel" },
];

const specialties = [
    { label: "Angular", category: "Frontend" },
    { label: "React.js", category: "Frontend" },
    { label: "Next.js", category: "Frontend" },
    { label: "TypeScript", category: "Lenguaje" },
    { label: ".NET", category: "Backend" },
    { label: "Clean Code", category: "Práctica" },
    { label: "Arquitectura Modular", category: "Práctica" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => (
    <section id="about" className="py-24 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
                    Conóceme
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Sobre Mí
                </h2>
                <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full" />
            </motion.div>

            {/* Stats Row */}
            <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="text-center p-6 rounded-2xl bg-orange-50 dark:bg-slate-800 border border-orange-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                            {stat.value}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-xs font-medium leading-snug whitespace-pre-line">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Bio Card */}
                <motion.div
                    className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                        <span className="w-1 h-5 bg-orange-500 rounded-full inline-block" />
                        Presentación
                    </h3>

                    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                        <p>
                            Soy un <strong className="text-orange-500 font-semibold">Desarrollador Full Stack</strong> con
                            más de 4 años de experiencia en el sector fintech boliviano. Me especializo en{" "}
                            <strong className="text-gray-800 dark:text-gray-100">Angular</strong>,{" "}
                            <strong className="text-gray-800 dark:text-gray-100">React.js</strong> y{" "}
                            <strong className="text-gray-800 dark:text-gray-100">Next.js</strong> en el frontend, y{" "}
                            <strong className="text-gray-800 dark:text-gray-100">.NET</strong> en el backend.
                        </p>
                        <p>
                            Actualmente en <strong className="text-orange-500">BancoSol</strong>, trabajo en el
                            proyecto de crédito de línea 100% online —{" "}
                            <em>pionero en Bolivia y en expansión hacia Latinoamérica</em> — aplicando
                            Clean Code y arquitectura modular para garantizar escalabilidad y mantenibilidad.
                        </p>
                        <p>
                            Mi enfoque es entregar código de calidad, experiencias de usuario fluidas y
                            soluciones que generen impacto real en el negocio.
                        </p>
                    </div>

                    {/* Specialty tags */}
                    <div className="mt-7 pt-6 border-t border-gray-200 dark:border-slate-600">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
                            Especialidades
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {specialties.map((s, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
                                >
                                    {s.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Info Card */}
                <motion.div
                    className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                        <span className="w-1 h-5 bg-orange-500 rounded-full inline-block" />
                        Información de Contacto
                    </h3>

                    <div className="space-y-4">
                        {personalInfo.map((info, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-200">
                                    {info.icon}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                        {info.label}
                                    </p>
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            target={info.href.startsWith("http") ? "_blank" : undefined}
                                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 truncate block"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
                                            {info.value}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8">
                        <a
                            href="mailto:villarroel.dev@gmail.com"
                            className="flex items-center justify-center gap-2 w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 text-sm"
                        >
                            Enviar un mensaje
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default About;
