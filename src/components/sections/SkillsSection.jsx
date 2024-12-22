import { useDarkMode } from "context/DarkModeProvider";
import { useState } from "react";
import { FaCss3Alt, FaHtml5, FaNode, FaPython, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import SkillCard from "../ui/SkillCard";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { isDarkMode } = useDarkMode();

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

  const handleMouseEnter = (index) => setHoveredSkill(index);
  const handleMouseLeave = () => setHoveredSkill(null);

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
    </div>
  );
};

export default SkillsSection;
