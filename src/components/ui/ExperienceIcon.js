import { motion } from "framer-motion";
import { memo } from "react";

const ExperienceIcon = ({ icon }) => (
  <motion.div
    whileHover={{ scale: 1.2 }}
    className="absolute md:static left-[-17px] z-10 w-10 h-10 md:w-16 md:h-16 
               rounded-full bg-white dark:bg-gray-800 shadow-lg 
               flex items-center justify-center"
  >
    {icon}
  </motion.div>
);

export default memo(ExperienceIcon);
