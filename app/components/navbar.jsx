import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 p-4 flex justify-center">
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/about-me" className="nav-link">
            About Me
          </a>
        </li>
        <li>
          <a href="/projects" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
