import {
  SiAngular,
  SiC,
  SiCsswizardry,
  SiFirebase,
  SiHtml5,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const TechnologyIcon = ({ tech }) => {
  switch (tech.toLowerCase()) {
    case "reactjs":
      return <SiReact className="text-blue-400" />;
    case "node.js":
      return <SiNodedotjs className="text-green-600" />;
    case "tailwind":
    case "tailwindcss":
      return <SiTailwindcss className="text-cyan-400" />;
    case "angular":
      return <SiAngular className="text-red-600" />;
    case "nestjs":
      return <SiNestjs className="text-red-600" />;
    case "swagger":
      return <SiSwagger className="text-green-500" />;
    case "nextjs":
      return <SiNextdotjs className="text-black" />;
    case "typescript":
      return <SiTypescript className="text-blue-600" />;
    case "html5":
      return <SiHtml5 className="text-orange-500" />;
    case "css":
      return <SiCsswizardry className="text-blue-600" />;
    case "firebase":
      return <SiFirebase className="text-orange-500" />;
    case "scss":
      return <SiSass className="text-pink-400" />;
    case "c":
      return <SiC className="text-cyan-400" />;
    default:
      return null;
  }
};

export default TechnologyIcon;
