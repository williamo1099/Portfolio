"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      key={index}
      initial={{ y: "-10%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: index * 0.2, ease: "easeInOut" }}
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
}
