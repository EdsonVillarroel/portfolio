import { useEffect, useState } from "react";
import { fetchRepositories } from "services/github";
import RepositoryItem from "../ui/RepositoryItem";

const GitHubRepositoriesCarousel = ({ username }) => {
  const [repositories, setRepositories] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;

  useEffect(() => {
    fetchRepositories(username).then(setRepositories);
  }, [username]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.ceil(repositories.length / itemsPerSlide)
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [repositories]);

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
                className="bg-orange-500 text-gray-900 px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
                disabled={currentSlide === 0}
              >
                Previous
              </button>
              <button
                onClick={nextSlide}
                className="bg-orange-500 text-gray-900 px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
                disabled={currentSlide === totalSlides - 1}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GitHubRepositoriesCarousel;
