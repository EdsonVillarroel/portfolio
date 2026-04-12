import { motion } from "framer-motion";
import { memo } from "react";

const IconCircle = ({ experience }) => (
    <div className="relative flex-shrink-0 z-10">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-800 ${
            experience.isCurrent
                ? "bg-orange-500 text-white"
                : "bg-white dark:bg-slate-700 text-orange-500 border-orange-200 dark:border-slate-600"
        }`}>
            <span className="text-xl">{experience.icon}</span>
        </div>
        {experience.isCurrent && (
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white dark:border-slate-800 animate-pulse" />
        )}
    </div>
);

const ContentCard = ({ experience, align }) => (
    <div className={`bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md hover:border-orange-200 dark:hover:border-orange-800/50 transition-all duration-300 ${
        align === "right" ? "text-right" : "text-left"
    }`}>
        {/* Header */}
        <div className="mb-3">
            <div className={`flex items-center gap-2 mb-1 ${align === "right" ? "justify-end" : "justify-start"}`}>
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
        <div className={`w-8 h-0.5 bg-orange-200 dark:bg-orange-800/50 mb-3 ${align === "right" ? "ml-auto" : ""}`} />

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {experience.description}
        </p>

        {/* Tech tags */}
        {experience.technologies && (
            <div className={`flex flex-wrap gap-1.5 ${align === "right" ? "justify-end" : "justify-start"}`}>
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
);

const ExperienceItem = ({ experience, isEven }) => (
    <motion.div
        initial={{"opacity": 0, "y": 40}}
        whileInView={{"opacity": 1, "y": 0}}
        viewport={{"once": true}}
        transition={{"duration": 0.5, "delay": experience.id * 0.1}}
        className="relative"
    >
        {/* ── Mobile layout ── */}
        <div className="flex md:hidden items-start gap-4 pl-2">
            <IconCircle experience={experience} />
            <div className="flex-1 min-w-0">
                <ContentCard experience={experience} align="left" />
            </div>
        </div>

        {/* ── Desktop layout: 3-column grid ── */}
        <div className="hidden md:grid md:items-start" style={{"gridTemplateColumns": "1fr 64px 1fr"}}>
            {/* Left slot */}
            <div className="pr-6">
                {isEven && <ContentCard experience={experience} align="right" />}
            </div>

            {/* Center icon */}
            <div className="flex justify-center pt-5">
                <IconCircle experience={experience} />
            </div>

            {/* Right slot */}
            <div className="pl-6">
                {!isEven && <ContentCard experience={experience} align="left" />}
            </div>
        </div>
    </motion.div>
);

export default memo(ExperienceItem);
