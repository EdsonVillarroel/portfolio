import { motion } from "framer-motion";
import { memo } from "react";

const ExperienceItem = ({ experience, isEven }) => (
    <motion.div
        initial={{"opacity": 0, "y": 40}}
        whileInView={{"opacity": 1, "y": 0}}
        viewport={{"once": true}}
        transition={{"duration": 0.5, "delay": experience.id * 0.1}}
        className={`relative flex items-start gap-6 md:gap-0 ${
            isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
    >
        {/* Mobile: left dot | Desktop: center dot */}
        <div className="flex-shrink-0 relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-5">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-800 ${
                experience.isCurrent
                    ? "bg-orange-500 text-white"
                    : "bg-white dark:bg-slate-700 text-orange-500 border-orange-200 dark:border-slate-600"
            }`}>
                <span className="text-lg">{experience.icon}</span>
            </div>
            {experience.isCurrent && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-slate-800 animate-pulse" />
            )}
        </div>

        {/* Content */}
        <div className={`flex-1 md:w-5/12 ${isEven ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"} md:max-w-none`}>
            <div className={`bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md hover:border-orange-200 dark:hover:border-orange-800/50 transition-all duration-300 ${
                isEven ? "md:text-right" : "md:text-left"
            }`}>

                {/* Header */}
                <div className="mb-3">
                    <div className={`flex items-center gap-2 mb-1 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                        <h3 className="text-base font-bold text-gray-900 dark:text-white">
                            {experience.title}
                        </h3>
                        {experience.isCurrent && (
                            <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold rounded-full uppercase tracking-wide">
                                Actual
                            </span>
                        )}
                    </div>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold text-sm">
                        {experience.company}
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-0.5 font-medium">
                        {experience.date}
                    </p>
                </div>

                {/* Divider */}
                <div className={`w-8 h-0.5 bg-orange-200 dark:bg-orange-800/50 mb-3 ${isEven ? "md:ml-auto" : ""}`} />

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {experience.description}
                </p>

                {/* Tech tags */}
                {experience.technologies && (
                    <div className={`flex flex-wrap gap-1.5 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                        {experience.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2.5 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 rounded-lg text-[11px] font-semibold border border-orange-100 dark:border-orange-800/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>

        {/* Empty spacer for desktop alternating layout */}
        <div className="hidden md:block md:w-5/12" />
    </motion.div>
);

export default memo(ExperienceItem);
