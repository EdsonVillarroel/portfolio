import { FaGithub } from "react-icons/fa";
import {
    SiC,
    SiCsswizardry,
    SiHtml5,
    SiJavascript,
    SiPython,
    SiTypescript,
} from "react-icons/si";

const LanguageIcon = ({ language }) => {
  switch (language) {
    case "JavaScript":
      return <SiJavascript className="text-yellow-400" />;
    case "Python":
      return <SiPython className="text-blue-500" />;
    case "TypeScript":
      return <SiTypescript className="text-blue-600" />;
    case "HTML":
      return <SiHtml5 className="text-orange-500" />;
    case "CSS":
      return <SiCsswizardry className="text-blue-600" />;
    case "C":
      return <SiC className="text-cyan-400" />;
    default:
      return <FaGithub className="text-gray-600" />;
  }
};

export default LanguageIcon;
