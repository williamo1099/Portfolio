"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

import { menus } from "@/data/menus";

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
    <nav className="absolute top-0 w-full z-40 p-4 flex justify-between items-center">
      {/* Hamburger icon */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-2xl p-2 z-50"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <img src="/icons/close.svg" alt="Close Icon" className="w-8 h-8" />
        ) : (
          <img src="/icons/menu.svg" alt="Menu Icon" className="w-8 h-8" />
        )}
      </button>

      {/* Navigation links */}

      <ul
        className={`lg:flex lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        } lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto 
        absolute lg:static left-0 w-full bg-background rounded-lg text-foreground lg:bg-transparent z-40 justify-center pt-52 pl-14 p-4 lg:p-0 transition-all duration-300 ease-in-out`}
      >
        {menus.map((menu, index) => (
          <li key={index}>
            <Link
              href={menu.link}
              className={`nav-link ${
                isActive(menu.link) ? "nav-link-active" : ""
              }`}
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
