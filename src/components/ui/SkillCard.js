import React from "react";

const SkillCard = ({
  skill,
  isHovered,
  isDarkMode,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className="relative group"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div
      className={`
        h-32 rounded-xl p-6 
        ${
          isDarkMode
            ? "bg-gray-800 hover:bg-gray-700"
            : "bg-white hover:bg-gray-100"
        }
        backdrop-blur-lg transform transition-all duration-300 ease-in-out
        ${isHovered ? "scale-105 shadow-xl" : ""}
        flex flex-col items-center justify-center cursor-pointer
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
        className={`absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500
          transform origin-left transition-transform duration-300 ${
            isHovered ? "scale-x-100" : "scale-x-0"
          }`}
      />
    </div>
  </div>
);

export default React.memo(SkillCard);
