"use client";
import React, { useState } from "react";
import Masonry from "react-masonry-css";

import ProjectSelector from "./project-selector";
import ProjectCard from "./project-card";

import { personalProjects, professionalProjects } from "@/data/projects";

export default function ProjectGrid() {
  const [showPersonal, setShowPersonal] = useState(false);

  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <React.Fragment>
      {/* Selector */}
      <ProjectSelector
        showPersonal={() => setShowPersonal(true)}
        showProfessional={() => setShowPersonal(false)}
        isShowingPersonal={showPersonal}
      />

      {/* Grid */}
      <div className="mt-8 px-5 overflow-auto max-h-[60vh] w-screen">
        <Masonry
          breakpointCols={{ default: 5, 640: 2 }}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {(showPersonal ? personalProjects : professionalProjects).map(
            (project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ),
          )}
        </Masonry>
      </div>
    </React.Fragment>
  );
}
