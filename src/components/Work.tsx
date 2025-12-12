import { motion, easeOut } from "framer-motion";
import "../App.css";
import { works } from "../constants/work";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: easeOut,
    },
  },
};

function WorkExperience() {
  return (
    <div>
      <motion.h2
        className="text-3xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>
      <motion.div
        className="relative max-w-6xl mx-auto flex flex-col gap-8 sm:gap-16 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Timeline line - center on desktop, left on mobile */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[3px] sm:w-[4px] bg-white/30 sm:-translate-x-1/2 rounded" />

        {works.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={exp.id}
              className={`relative w-full flex justify-start pl-12 sm:pl-0 ${
                isLeft ? "sm:justify-start sm:pr-20" : "sm:justify-end sm:pl-20"
              }`}
              variants={cardVariants}
            >
              {/* Timeline dot - left on mobile, center on desktop */}
              <span className="absolute left-[9px] top-6 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-5 h-5 rounded-full bg-white border-[6px] border-black z-10" />

              <div className="backdrop-blur-sm card-background border border-white/20 rounded-xl p-5 sm:p-6 shadow-md w-full sm:max-w-md hover:scale-[1.01] transition-transform duration-300">
                <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-xs sm:text-sm text-neutral-400 font-medium bg-white/10 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-neutral-300 text-sm sm:text-base font-medium mb-3">
                  {exp.company}
                </p>
                <ul className="text-neutral-400 text-xs sm:text-sm list-disc list-inside space-y-1.5">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default WorkExperience;
