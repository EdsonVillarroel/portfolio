import { motion } from "framer-motion";
import { memo } from "react";
import ExperienceIcon from "./ExperienceIcon";

const ExperienceItem = ({experience, isEven}) => (
    <motion.div
        initial={{"opacity": 0,
            "y": 50}}
        whileInView={{"opacity": 1,
            "y": 0}}
        viewport={{"once": true}}
        transition={{"duration": 0.5,
            "delay": experience.id * 0.2}}
        className={`relative flex items-center ${
            isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
        // style={{"padding": "0px 0px 0px 35px"}}
    >
        {/* Content */}
        <div
            className={`md:w-1/2 w-full ${
                isEven ? "md:pr-8 text-right" : "md:pl-8 text-left"
            }`}
        >
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400">
                        {experience.title}
                    </h3>
                    <div className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        {experience.company}
                    </div>
                    {experience.date && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            {experience.date}
                        </span>
                    )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {experience.description}
                </p>

                {experience.technologies && (
                    <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>

        {/* Icon */}
        <ExperienceIcon icon={experience.icon} />

        {/* Empty space */}
        <div className="md:w-1/2 hidden md:block" />
    </motion.div>
);

export default memo(ExperienceItem);
