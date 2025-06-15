"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MenuItem({ link, title, index, isActive, isMenuOpen }) {
  return (
    <motion.li
      initial={{ x: 100, opacity: 0 }} // Start off-screen
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeInOut",
      }}
      className={`lg:!translate-x-0 lg:!opacity-100 lg:!transform-none`}
    >
      <Link
        href={link}
        className={`
          // Spacing
          border-b-2 border-transparent px-4 py-2

          // Typography
          hover:text-primary

          // Borders
          hover:border-primary

          // Transitions
          transition duration-300

          // Active State
          ${
            isActive
              ? `

                // Active Appearance
                bg-primary text-white font-bold rounded-md

                // Active Borders
                border-none hover:border-none hover:text-white
              `
              : ""
          }
        `}
      >
        {title}
      </Link>
    </motion.li>
  );
}
