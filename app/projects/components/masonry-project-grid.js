"use client";

import Masonry from "react-masonry-css";
import ProjectCard from "./project-card";

export default function MasonryProjectGrid({ projects }) {
  return (
    <Masonry
      breakpointCols={{ default: 5, 640: 2 }}
      className="flex gap-4"
      columnClassName="masonry-column"
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </Masonry>
  );
}
