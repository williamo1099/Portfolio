"use client";
import { motion } from "motion/react";

interface ProjectSelector {
  showProfessional: () => void;
  showPersonal: () => void;
  isShowingPersonal: boolean;
}

export default function ProjectSelector({
  showProfessional,
  showPersonal,
  isShowingPersonal,
}: ProjectSelector) {
  return (
    <div className="relative flex flex-row bg-background-light dark:bg-background-dark w-4/6 lg:w-2/6 rounded-full p-0 mt-5">
      {/* Sliding background */}
      <motion.div
        className="absolute bg-primary rounded-full h-full w-1/2 transition-all duration-200"
        animate={{ x: isShowingPersonal ? "100%" : 0 }}
        transition={{ duration: 0.1, ease: "linear" }}
      />

      {/* Professional */}
      <div
        onClick={showProfessional}
        className={`cursor-pointer text-center font-bold w-1/2 py-2 rounded-full z-10 ${
          !isShowingPersonal
            ? "text-white"
            : "text-foreground-light dark:text-foreground-dark"
        } transition-all duration-300`}
      >
        Professional
      </div>

      {/* Personal */}
      <div
        onClick={showPersonal}
        className={`cursor-pointer text-center font-bold w-1/2 py-2 rounded-full z-10 ${
          isShowingPersonal
            ? "text-white"
            : "text-foreground-light dark:text-foreground-dark"
        } transition-all duration-300`}
      >
        Personal
      </div>
    </div>
  );
}
