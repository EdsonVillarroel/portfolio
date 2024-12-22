import { motion } from "framer-motion";
import { memo } from "react";
import ExperienceIcon from "./ExperienceIcon";

const ExperienceItem = ({ experience, isEven }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: experience.id * 0.2 }}
    className={`relative flex items-center ${
      isEven ? "md:flex-row" : "md:flex-row-reverse"
    }`}
  >
    {/* Content */}
    <div
      className={`md:w-1/2 w-full ${
        isEven ? "md:pr-8 text-right" : "md:pl-8 text-left"
      }`}
    >
      <div className="space-y-2">
        <h4 className="text-xl font-semibold text-orange-600 dark:text-orange-400">
          {experience.title}
        </h4>
        <div className="text-lg text-gray-600 dark:text-gray-300">
          {experience.company}
        </div>
        {experience.date && (
          <span className="text-gray-500">{experience.date}</span>
        )}
        <p className="text-gray-500 dark:text-gray-400">
          {experience.description}
        </p>
      </div>
    </div>

    {/* Icon */}
    <ExperienceIcon icon={experience.icon} />

    {/* Empty space */}
    <div className="md:w-1/2 hidden md:block"></div>
  </motion.div>
);

export default memo(ExperienceItem);
