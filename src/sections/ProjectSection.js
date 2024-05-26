import React from "react";

function ProjectSection({ title, description, link }) {
  return (
    <div className="w-full h-full flex place-content-center justify-items-center items-center">
      <h2 className="text-textPrimary text-5xl underline decoration-2">
        My Projects
      </h2>
    </div>
  );
}

export default ProjectSection;
