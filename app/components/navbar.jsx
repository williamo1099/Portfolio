"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 w-full z-50 p-4 flex justify-between items-center">
      {/* Hamburger icon */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-2xl p-2"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navigation links */}
      <ul
        className={`lg:flex lg:space-x-6 ${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex-row space-y-2 flex-col absolute lg:static top-16 left-0 w-full bg-background rounded-lg mx-2 text-foreground lg:bg-transparent justify-center p-4 lg:p-0`}
      >
        <li>
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="nav-link">
            About Me
          </Link>
        </li>
        <li>
          <Link href="/" className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
