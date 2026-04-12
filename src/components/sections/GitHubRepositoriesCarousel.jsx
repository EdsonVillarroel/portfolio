import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
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
        if (repositories.length === 0) return;
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
        <section className="py-24 px-4 bg-gray-50 dark:bg-slate-800">
            <div className="max-w-5xl mx-auto">

                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
                        Open Source
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                        <FaGithub className="text-gray-800 dark:text-white" />
                        Repositorios
                    </h2>
                    <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mb-5" />
                    <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
                        Explora mis proyectos y contribuciones en GitHub
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-2 gap-5"
                            >
                                {repositories
                                    .slice(index * itemsPerSlide, (index + 1) * itemsPerSlide)
                                    .map((repo) => (
                                        <RepositoryItem key={repo.id} repo={repo} />
                                    ))}
                            </div>
                        ))}
                    </div>

                    {/* Navigation */}
                    {totalSlides > 1 && (
                        <div className="flex justify-center items-center mt-8 gap-4">
                            <button
                                onClick={prevSlide}
                                disabled={currentSlide === 0}
                                className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-orange-400 hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                                aria-label="Anterior"
                            >
                                <FaChevronLeft size={14} />
                            </button>

                            {/* Dots */}
                            <div className="flex gap-1.5">
                                {Array.from({ length: totalSlides }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentSlide(i)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            i === currentSlide
                                                ? "w-6 bg-orange-500"
                                                : "w-1.5 bg-gray-300 dark:bg-slate-600 hover:bg-orange-300"
                                        }`}
                                        aria-label={`Slide ${i + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                disabled={currentSlide === totalSlides - 1}
                                className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-orange-400 hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                                aria-label="Siguiente"
                            >
                                <FaChevronRight size={14} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GitHubRepositoriesCarousel;
