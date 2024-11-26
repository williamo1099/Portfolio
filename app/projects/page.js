"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

import { personalProjects, professionalProjects } from "@/data/projects";

const ProjectCard = ({ project, index }) => (
  <motion.div
    key={index}
    initial={{ y: "-10%", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
    className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 flex flex-col justify-between"
  >
    {/* Image */}
    <div className="w-full h-24 lg:h-48 relative mb-4">
      <Image
        className="rounded"
        src={project.image}
        alt={project.title}
        layout="fill"
        objectFit="cover"
      />
    </div>

    {/* Title */}
    <h3 className="text-base lg:text-xl font-semibold text-gray-800 mb-3 h-12 flex items-center justify-center">
      {project.title}
    </h3>

    {/* Description */}
    <p className="text-sm lg:text-base text-gray-600 mb-2 lg:mb-4 flex-grow">
      {project.description}
    </p>

    {/* See More */}
    <a
      href={project.link}
      className="text-sm lg:text-base text-primary hover:underline mt-auto"
    >
      See more
    </a>
  </motion.div>
);

export default function ProjectsPage() {
  const [showPersonal, setShowPersonal] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* Title */}
      <h1 className="text-3xl lg:text-4xl font-bold">
        Some of{" "}
        <span className="bg-primary text-white px-2 rounded-md">My</span>{" "}
        Projects
      </h1>

      {/* Selection */}
      <div className="relative flex flex-row bg-white w-4/6 lg:w-2/6 rounded-full p-0 mt-5">
        {/* Sliding background */}
        <motion.div
          className="absolute bg-primary rounded-full h-full w-1/2 transition-all duration-200"
          animate={{ x: showPersonal ? "100%" : 0 }}
          transition={{ duration: 0.1, ease: "linear" }}
        />

        {/* Professional */}
        <div
          onClick={() => setShowPersonal(false)}
          className={`cursor-pointer text-center font-bold w-1/2 py-2 rounded-full z-10 ${
            !showPersonal ? "text-white" : "text-gray-700"
          } transition-all duration-300`}
        >
          Professional
        </div>

        {/* Personal */}
        <div
          onClick={() => setShowPersonal(true)}
          className={`cursor-pointer text-center font-bold w-1/2 py-2 rounded-full z-10 ${
            showPersonal ? "text-white" : "text-gray-700"
          } transition-all duration-300`}
        >
          Personal
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 overflow-auto max-h-[60vh] sm:h-[70vh] w-full px-5 mt-8">
        {(showPersonal ? personalProjects : professionalProjects).map(
          (project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          )
        )}
      </div>
    </div>
  );
}
