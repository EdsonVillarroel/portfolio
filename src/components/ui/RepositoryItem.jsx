import { FaGithub, FaStar } from "react-icons/fa";
import LanguageIcon from "./LanguageIcon";
import TechnologyIcon from "./TechnologyIcon";

const RepositoryItem = ({ repo }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
    <div className="flex items-start justify-between mb-4">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-2"
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
        <LanguageIcon language={repo.language} />
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
            <TechnologyIcon tech={tech} />
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default RepositoryItem;
