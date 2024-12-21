import { FaCode, FaGithub, FaStar } from "react-icons/fa";
import { SiJavascript, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const mockRepositories = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with modern technologies and best practices",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    language: "JavaScript",
    stars: 156,
    url: "https://github.com/username/e-commerce-platform"
  },
  {
    id: 2,
    name: "AI Image Generator",
    description: "An artificial intelligence-powered image generation tool using deep learning",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    language: "Python",
    stars: 342,
    url: "https://github.com/username/ai-image-generator"
  },
  {
    id: 3,
    name: "Task Management System",
    description: "A comprehensive task management system with real-time updates and collaboration features",
    technologies: ["TypeScript", "React", "Node.js", "Socket.io"],
    language: "TypeScript",
    stars: 89,
    url: "https://github.com/username/task-management"
  },
  {
    id: 4,
    name: "Portfolio Template",
    description: "A modern and responsive portfolio template built with React and Tailwind CSS",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    language: "JavaScript",
    stars: 267,
    url: "https://github.com/username/portfolio-template"
  }
];

const getLanguageIcon = (language) => {
  switch (language) {
    case "JavaScript":
      return <SiJavascript className="text-yellow-400" />;
    case "Python":
      return <SiPython className="text-blue-500" />;
    case "TypeScript":
      return <SiTypescript className="text-blue-600" />;
    default:
      return <FaCode />;
  }
};

const getTechnologyIcon = (tech) => {
  switch (tech) {
    case "React":
      return <SiReact className="text-blue-400" />;
    case "Node.js":
      return <SiNodedotjs className="text-green-600" />;
    case "Tailwind CSS":
      return <SiTailwindcss className="text-cyan-400" />;
    default:
      return null;
  }
};

const RepositoryItem = ({ repo }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-start justify-between mb-4">
        <div>
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
          >
            <FaGithub />
            {repo.name}
          </a>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{repo.description}</p>
        </div>
        <div className="flex items-center space-x-1">
          <FaStar className="text-yellow-400" />
          <span className="text-gray-600 dark:text-gray-300">{repo.stars}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 mt-4">
        <div className="flex items-center space-x-2">
          {getLanguageIcon(repo.language)}
          <span className="text-sm text-gray-600 dark:text-gray-300">{repo.language}</span>
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap gap-2">
            {repo.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full flex items-center gap-1"
              >
                {getTechnologyIcon(tech)}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GitHubRepositories = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            GitHub Repositories
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore my latest projects and contributions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {mockRepositories.map((repo) => (
            <RepositoryItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubRepositories;
