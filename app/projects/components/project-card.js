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
      className="flex flex-col justify-between rounded-lg shadow-xl bg-background-light dark:bg-background-dark dark:border-2 dark:border-primary h-auto p-4"
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
      <h3 className="text-base lg:text-xl font-semibold mb-2 flex items-start justify-start truncate w-full">
        {project.title}
      </h3>

      {/* Description */}
      <div className="text-sm lg:text-base flex-grow">
        {project.description}
      </div>
    </motion.div>
  );
}
