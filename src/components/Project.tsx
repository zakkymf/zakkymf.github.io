import "../App.css";
import { projects } from "../constants/project";

function Project() {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Project
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="backdrop-blur-sm card-background border border-white/10 rounded-2xl p-4 shadow-lg transition-transform hover:scale-[1.02] duration-300"
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
