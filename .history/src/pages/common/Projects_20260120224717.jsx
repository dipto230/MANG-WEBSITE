import React, { useEffect, useState } from "react";
import { dummyProjects } from "../../assets/assets";

const Projects = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-serif">Project</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Showcasing our creative journey through impactful projects
          that bring ideas to life.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-28">
        {dummyProjects.map((project, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={project.id}
              className={`
                flex flex-col md:flex-row items-center gap-12
                ${isReverse ? "md:flex-row-reverse" : ""}
                transition-all duration-700 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 text-left">
                <h2 className="text-3xl font-semibold mb-4">
                  {project.title}
                </h2>

                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm border px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 text-sm font-medium">
                  <a
                    href={project.liveLink}
                    className="underline underline-offset-4"
                  >
                    Live Project
                  </a>
                  <a
                    href={project.githubLink}
                    className="underline underline-offset-4"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
