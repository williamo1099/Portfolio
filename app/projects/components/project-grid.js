"use client";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

import ProjectSelector from "./project-selector";
import ProjectCard from "./project-card";

// import { personalProjects, professionalProjects } from "@/data/projects";
import { fetchProjects } from "@/services/project-service";

export default function ProjectGrid() {
  const [personalProjects, setPersonalProjects] = useState([]);
  const [professionalProjects, setProfessionalProjects] = useState([]);
  const [showPersonal, setShowPersonal] = useState(false);

  useEffect(() => {
    // Fetch professional projects.
    const fetchProfessionalProjects = async () => {
      const data = await fetchProjects("professional");
      setProfessionalProjects(data);
    };

    fetchProfessionalProjects();
  }, []);

  useEffect(() => {
    // Fetch personal projects.
    const fetchPersonalProjects = async () => {
      const data = await fetchProjects("personal");
      setPersonalProjects(data);
    };

    if (showPersonal && personalProjects.length === 0) fetchPersonalProjects();
  }, [showPersonal, personalProjects]);

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
            )
          )}
        </Masonry>
      </div>
    </React.Fragment>
  );
}
