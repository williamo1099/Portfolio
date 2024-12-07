"use client";
import React, { useState } from "react";

import ProjectSelector from "./project-selector";
import ProjectCard from "./project-card";

import { personalProjects, professionalProjects } from "@/data/projects";

export default function ProjectGrid() {
  const [showPersonal, setShowPersonal] = useState(false);

  return (
    <React.Fragment>
      {/* Selector */}
      <ProjectSelector
        showPersonal={() => setShowPersonal(true)}
        showProfessional={() => setShowPersonal(false)}
        isShowingPersonal={showPersonal}
      />

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 overflow-auto max-h-[60vh] sm:h-[70vh] w-full px-5 mt-8">
        {(showPersonal ? personalProjects : professionalProjects).map(
          (project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ),
        )}
      </div>
    </React.Fragment>
  );
}
