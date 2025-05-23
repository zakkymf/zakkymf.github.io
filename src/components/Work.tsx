import { motion } from "framer-motion";
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
      ease: "easeOut",
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
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>

      <motion.div
        className="relative max-w-6xl mx-auto flex flex-col gap-16 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-white/30 -translate-x-1/2 rounded" />

        {works.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={exp.id}
              className={`relative w-full flex ${
                isLeft
                  ? "justify-start pr-4 sm:pr-20"
                  : "justify-end pl-4 sm:pl-20"
              }`}
              variants={cardVariants}
            >
              <span className="absolute left-1/2 -translate-x-1/2 top-0 sm:top-1/2 sm:-translate-y-1/2 w-5 h-5 rounded-full bg-white border-[6px] border-black z-10" />

              <div className="mt-4 sm:mt-0 backdrop-blur-sm card-background border border-white/20 rounded-xl p-6 shadow-md w-full max-w-md hover:scale-[1.01] transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-neutral-400">{exp.period}</span>
                </div>
                <p className="text-neutral-300 mt-1">{exp.company}</p>
                <ul className="text-neutral-400 mt-2 text-sm list-disc list-inside">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
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
