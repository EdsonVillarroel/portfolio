import { useDarkMode } from "hooks/DarkModeProvider";
import { useEffect, useState } from "react";
import { FaCss3Alt, FaHtml5, FaNode, FaPython, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);

  const skillsData = [
    { name: "React", icon: FaReact, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
    { name: "Node.js", icon: FaNode, color: "text-green-500" },
    { name: "Python", icon: FaPython, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Redux", icon: SiRedux, color: "text-purple-600" },
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-b dark:from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold dark:text-white mb-4 text-black">
            Technical Skills
          </h2>
          <p className="dark:text-gray-400 max-w-2xl mx-auto text-black">
            A showcase of my technical expertise and professional skillset
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`
                  h-32 rounded-xl p-6
                  ${isDarkMode ? "bg-gray-800" : "bg-white"}
                  backdrop-blur-lg
                  transform transition-all duration-300 ease-in-out
                  ${hoveredSkill === index ? "scale-105 shadow-xl" : ""}
                  ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}
                  flex flex-col items-center justify-center
                  cursor-pointer
                `}
              >
                <skill.icon
                  className={`text-4xl ${skill.color} mb-3 transform transition-transform group-hover:scale-110`}
                />
                <span
                  className={`font-medium text-sm text-center ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {skill.name}
                </span>

                <div
                  className={`
                    absolute -bottom-2 left-0 right-0
                    h-1 bg-gradient-to-r from-blue-500 to-purple-500
                    transform origin-left transition-transform duration-300
                    ${hoveredSkill === index ? "scale-x-100" : "scale-x-0"}
                  `}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
