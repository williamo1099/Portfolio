"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-16 right-5 p-3 rounded-full bg-primary shadow-lg text-white flex items-center justify-center"
      aria-label="Toggle Theme"
      initial={{ width: 50, height: 50 }}
      whileHover={{ width: 180, height: 50 }}
      transition={{ type: "linear" }}
    >
      {/* Text */}
      <AnimatePresence>
        {isHovered && <span className="truncate mr-4">Switch Theme</span>}
      </AnimatePresence>

      {/* Icon */}
      <img
        src={`/icons/${theme === "light" ? "light-mode" : "dark-mode"}.svg`}
        alt={`${theme === "light" ? "Light Mode Icon" : "Dark Mode Icon"}`}
        className="w-8 h-8"
      />
    </motion.button>
  );
}
