import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const contactMethods = [
    {
        icon: <FaEnvelope />,
        label: "Email",
        value: "villarroel@gmail.com",
        href: "mailto:villarroel@gmail.com",
        description: "Respondo en menos de 24 horas",
    },
    {
        icon: <FaPhone />,
        label: "Teléfono",
        value: "+591 73690866",
        href: "tel:+59173690866",
        description: "Lunes a Viernes, 9am - 6pm",
    },
    {
        icon: <FaLinkedin />,
        label: "LinkedIn",
        value: "edsonvillarroelricaldes",
        href: "https://www.linkedin.com/in/edsonvillarroelricaldes/",
        description: "Conectemos profesionalmente",
    },
    {
        icon: <FaGithub />,
        label: "GitHub",
        value: "EdsonVillarroel",
        href: "https://github.com/EdsonVillarroel",
        description: "Explora mis proyectos",
    },
    {
        icon: <FaMapMarkerAlt />,
        label: "Ubicación",
        value: "Santa Cruz de la Sierra",
        href: null,
        description: "Bolivia · Disponible remoto",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Contact = () => (
    <section id="contact" className="py-24 px-4 bg-gray-50 dark:bg-slate-800">
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
                    Hablemos
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Contacto
                </h2>
                <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mb-5" />
                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
                    ¿Tienes un proyecto interesante o quieres explorar nuevas oportunidades?
                    Estoy disponible y abierto a conversarlo.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                {/* CTA Card - Left/Top */}
                <motion.div
                    className="lg:col-span-2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white h-full flex flex-col justify-between min-h-[280px] shadow-xl shadow-orange-500/20">
                        <div>
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                                <FaEnvelope className="text-white text-xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">
                                ¡Trabajemos Juntos!
                            </h3>
                            <p className="text-white/85 text-sm leading-relaxed">
                                Estoy siempre abierto a nuevas oportunidades de trabajo, proyectos freelance
                                o simplemente una charla sobre tecnología.
                            </p>
                        </div>
                        <a
                            href="mailto:villarroel@gmail.com"
                            className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 text-sm shadow-sm"
                        >
                            <FaEnvelope />
                            Enviar Email
                        </a>
                    </div>
                </motion.div>

                {/* Contact Methods - Right/Bottom */}
                <motion.div
                    className="lg:col-span-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-gray-100 dark:border-slate-700 hover:border-orange-200 dark:hover:border-orange-700/50 hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                        {method.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                                            {method.label}
                                        </p>
                                        {method.href ? (
                                            <a
                                                href={method.href}
                                                target={method.href.startsWith("http") ? "_blank" : undefined}
                                                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 truncate block"
                                            >
                                                {method.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
                                                {method.value}
                                            </p>
                                        )}
                                        <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                                            {method.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default Contact;
