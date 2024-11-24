"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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
        className={`lg:flex lg:flex-row flex-col lg:space-x-6 space-y-2 lg:space-y-0 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        } lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto 
        absolute lg:static top-16 left-0 w-full bg-background rounded-lg mx-2 text-foreground lg:bg-transparent justify-center p-4 lg:p-0 transition-all duration-300 ease-in-out`}
      >
        <li>
          <Link
            href="/"
            className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-me"
            className={`nav-link ${
              isActive("/about-me") ? "nav-link-active" : ""
            }`}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`nav-link ${
              isActive("/projects") ? "nav-link-active" : ""
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`nav-link ${
              isActive("/contact") ? "nav-link-active" : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
