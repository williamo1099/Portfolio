import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 p-4 flex justify-center">
      <ul className="flex space-x-6">
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
