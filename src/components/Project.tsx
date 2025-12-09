import { motion, easeOut } from "framer-motion";
import "../App.css";
import { projects } from "../constants/project";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

function Project() {
  return (
    <div className="flex flex-col">
      <motion.h2
        className="text-3xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        viewport={{ once: true }}
      >
        Project
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="backdrop-blur-sm card-background border border-white/10 rounded-2xl p-4 shadow-lg hover:scale-[1.02] transition-transform duration-300"
            variants={cardVariants}
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-xl w-full object-contain h-90"
            />
            <h3 className="text-xl font-bold text-white mt-4">
              {project.name}
            </h3>
            <p className="text-sm text-neutral-300 mt-2 min-h-16">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <p key={tech} className="text-sm text-blue-500">
                  #{tech}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Project;
