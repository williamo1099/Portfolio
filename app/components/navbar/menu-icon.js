"use client";
import Image from "next/image";

export default function MenuIcon({ isMenuOpen, toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden text-2xl p-2 z-50"
      aria-label="Toggle menu"
    >
      <div className="relative w-8 h-8">
        {isMenuOpen ? (
          // Close icon.
          <Image src="/icons/close.svg" alt="Close Icon" layout="fill" />
        ) : (
          // Open icon.
          <Image src="/icons/menu.svg" alt="Menu Icon" layout="fill" />
        )}
      </div>
    </button>
  );
}
