"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MenuItem({ link, title, index, isActive, isMenuOpen }) {
  return (
    <motion.li
      initial={{ x: "100%", opacity: 0 }} // Start off-screen
      animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
      transition={{
        duration: 1,
        delay: index * 0.2,
        ease: "easeInOut",
      }}
      className={`lg:!translate-x-0 lg:!opacity-100`}
    >
      <Link
        href={link}
        className={`px-2 py-1 border-b-2 border-transparent text-foreground hover:border-primary hover:text-primary transition duration-300 ${
          isActive
            ? "px-4 py-2 bg-primary text-white font-bold rounded-md border-none hover:border-none hover:text-white"
            : ""
        }`}
      >
        {title}
      </Link>
    </motion.li>
  );
}
