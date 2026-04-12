import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import {
    SiAngular,
    SiDocker,
    SiDotnet,
    SiGit,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiRedux,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend",
        color: "blue",
        badgeColor: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
        skills: [
            { name: "Angular", icon: SiAngular, color: "text-red-500" },
            { name: "React", icon: FaReact, color: "text-blue-500" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-slate-700 dark:text-slate-200" },
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
            { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
            { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
        ],
    },
    {
        title: "Backend & BD",
        color: "green",
        badgeColor: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
        skills: [
            { name: ".NET", icon: SiDotnet, color: "text-purple-600" },
            { name: "Node.js", icon: FaNode, color: "text-green-500" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        ],
    },
    {
        title: "Herramientas",
        color: "orange",
        badgeColor: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
        skills: [
            { name: "Redux", icon: SiRedux, color: "text-purple-600" },
            { name: "Git", icon: SiGit, color: "text-orange-600" },
            { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const SkillCard = ({ skill }) => (
    <motion.div
        variants={cardVariants}
        whileHover={{
        "y": -4,
        "scale": 1.05
    }}
        className="group relative bg-white dark:bg-slate-900 rounded-xl p-4 border border-gray-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600/50 hover:shadow-md transition-all duration-300 cursor-default flex flex-col items-center gap-2"
    >
        <skill.icon className={`text-3xl ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight">
            {skill.name}
        </span>
        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 h-0.5 bg-orange-500 rounded-full transition-all duration-300" />
    </motion.div>
);

const SkillsSection = () => (
    <section id="skills" className="py-24 px-4 bg-white dark:bg-slate-900">
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
                    Stack Tecnológico
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Habilidades Técnicas
                </h2>
                <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mb-5" />
                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
                    Tecnologías y herramientas que utilizo profesionalmente día a día
                </p>
            </motion.div>

            {/* Categories */}
            <div className="space-y-10">
                {skillCategories.map((category, catIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                    >
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-5">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${category.badgeColor}`}>
                                {category.title}
                            </span>
                            <div className="flex-1 h-px bg-gray-200 dark:bg-slate-700" />
                        </div>

                        {/* Skills Grid */}
                        <motion.div
                            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {category.skills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default SkillsSection;
