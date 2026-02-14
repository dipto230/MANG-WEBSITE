// src/components/common/ProjectsSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { dummyProjects } from "../../assets/assets";

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-6xl px-6">
      <h2 className="text-3xl font-semibold text-gray-800">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {dummyProjects.slice(0, 3).map(project => (
          <div
            key={project.id}
            className="border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img src={project.image} alt={project.title} />
            <div className="p-4 text-left">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/projects")}
        className="mt-10 px-6 py-2 border rounded-md hover:bg-gray-100"
      >
        Show all projects
      </button>
    </div>
  );
};

export default ProjectsSection;
