import { useEffect, useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa";
import {
  SiAngular,
  SiC,
  SiCsswizardry,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSass,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const getLanguageIcon = (language) => {
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
      return <FaGithub />;
  }
};

const getTechnologyIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case "reactjs":
      return <SiReact className="text-blue-400" />;
    case "node.js":
      return <SiNodedotjs className="text-green-600" />;
    case "tailwindcss":
    case "tailwind":
      return <SiTailwindcss className="text-cyan-400" />;
    case "angular":
      return <SiAngular className="text-red-500" />;
    case "nestjs":
      return <SiNestjs className="text-red-600" />;
    case "swagger":
      return <SiSwagger className="text-green-500" />;
    case "nextjs":
      return <SiNextdotjs className="text-black" />;
    case "typescript":
      return <SiTypescript className="text-blue-500" />;
    case "html5":
      return <SiHtml5 className="text-orange-500" />;
    case "css":
      return <SiCsswizardry className="text-blue-600" />;
    case "firebase":
      return <SiFirebase className="text-blue-600" />;
    case "scss":
      return <SiSass className="text-blue-600" />;
    case "c":
      return <SiC className="text-cyan-400" />;
    default:
      return null;
  }
};

const RepositoryItem = ({ repo }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
    <div className="flex items-start justify-between mb-4">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
      >
        <FaGithub />
        {repo.name}
      </a>
      <div className="flex items-center space-x-1">
        <FaStar className="text-yellow-400" />
        <span className="text-gray-600 dark:text-gray-300">
          {repo.stargazers_count}
        </span>
      </div>
    </div>
    <p className="text-gray-600 text-left dark:text-gray-300 mt-2">
      {repo.description || "No description provided."}
    </p>
    <div className="flex items-center space-x-4 mt-4">
      <div className="flex items-center space-x-2">
        {getLanguageIcon(repo.language)}
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {repo.language || "Unknown"}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {repo.topics?.map((tech, index) => (
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
);

const GitHubRepositoriesCarousel = () => {
  const [repositories, setRepositories] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/EdsonVillarroel/repos"
        );
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepositories();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000); 
    return () => clearInterval(interval);
  }, [currentSlide]);

  const totalSlides = Math.ceil(repositories.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            GitHub Repositories
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore my latest projects and contributions
          </p>
        </div>

        {repositories.length > 0 && (
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {repositories
                    .slice(index * itemsPerSlide, (index + 1) * itemsPerSlide)
                    .map((repo) => (
                      <RepositoryItem key={repo.id} repo={repo} />
                    ))}
                </div>
              ))}
            </div>

            {totalSlides > 1 && (
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevSlide}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  disabled={currentSlide === 0}
                >
                  Previous
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  disabled={currentSlide === totalSlides - 1}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubRepositoriesCarousel;
