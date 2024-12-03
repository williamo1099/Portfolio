"use client";
import React from "react";

export default function MenuIcon({ isMenuOpen, toggleMenu }) {
  return (
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
  );
}
