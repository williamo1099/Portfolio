"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import MenuIcon from "./menu-icon";
import MenuList from "./menu-list";

export default function Navbar() {
  const pathname = usePathname();

  // Menu drawer state (for small screens).
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu drawer after changing page.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="absolute top-0 w-full z-40 p-4 flex justify-between items-center">
      <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MenuList isMenuOpen={isMenuOpen} />
    </nav>
  );
}
