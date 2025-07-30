import SkillCard from "components/ui/SkillCard";
import { useDarkMode } from "context/DarkModeProvider";
import { useState } from "react";
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

const SkillsSection = () => {

    const [hoveredSkill, setHoveredSkill] = useState(null),
        {isDarkMode} = useDarkMode(),

        skillsData = [
            {"name": "Angular",
                "icon": SiAngular,
                "color": "text-red-500"},
            {"name": "React",
                "icon": FaReact,
                "color": "text-blue-500"},
            {"name": "Next.js",
                "icon": SiNextdotjs,
                "color": "text-black dark:text-white"},
            {"name": "JavaScript",
                "icon": SiJavascript,
                "color": "text-yellow-400"},
            {"name": "TypeScript",
                "icon": SiTypescript,
                "color": "text-blue-600"},
            {"name": "HTML5",
                "icon": FaHtml5,
                "color": "text-orange-500"},
            {"name": "CSS3",
                "icon": FaCss3Alt,
                "color": "text-blue-400"},
            {"name": "Tailwind CSS",
                "icon": SiTailwindcss,
                "color": "text-cyan-400"},
            {"name": ".NET",
                "icon": SiDotnet,
                "color": "text-purple-600"},
            {"name": "Node.js",
                "icon": FaNode,
                "color": "text-green-500"},
            {"name": "Redux",
                "icon": SiRedux,
                "color": "text-purple-600"},
            {"name": "Git",
                "icon": SiGit,
                "color": "text-orange-600"},
            {"name": "Docker",
                "icon": SiDocker,
                "color": "text-blue-500"},
            {"name": "MongoDB",
                "icon": SiMongodb,
                "color": "text-green-500"}
        ],

        handleMouseEnter = (index) => setHoveredSkill(index),
        handleMouseLeave = () => setHoveredSkill(null);

    return (
        <section id="skills" className="w-full py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold dark:text-white mb-4 text-gray-900">
            Habilidades Técnicas
                    </h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
                    <p className="dark:text-gray-400 max-w-2xl mx-auto text-gray-600">
            Tecnologías y herramientas que utilizo en mi desarrollo profesional
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
                    {skillsData.map((skill, index) => (
                        <SkillCard
                            key={index}
                            skill={skill}
                            isHovered={hoveredSkill === index}
                            isDarkMode={isDarkMode}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>
            </div>
        </section>
    );

};

export default SkillsSection;
