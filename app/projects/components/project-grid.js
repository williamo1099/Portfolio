"use server";
import React from "react";

import MasonryProjectGrid from "./masonry-project-grid";

import { fetchProjects } from "@/services/project-service";

export default async function ProjectGrid({ showPersonal }) {
  const projects = await fetchProjects(
    showPersonal ? "personal" : "professional"
  );

  return (
    <div className="mt-8 px-5 overflow-auto max-h-[60vh] w-screen">
      <MasonryProjectGrid projects={projects} />
    </div>
  );
}
