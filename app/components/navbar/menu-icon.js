"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MenuIcon({ isMenuOpen, toggleMenu }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden p-2 z-50"
      aria-label="Toggle menu"
    >
      <div className="relative w-8 h-8">
        {isMenuOpen ? (
          // Close icon.
          <Image
            src={`/icons/close${theme === "dark" ? "_dark" : ""}.svg`}
            alt="Close Icon"
            layout="fill"
          />
        ) : (
          // Open icon.
          <Image
            src={`/icons/menu${theme === "dark" ? "_dark" : ""}.svg`}
            alt="Menu Icon"
            layout="fill"
          />
        )}
      </div>
    </button>
  );
}
