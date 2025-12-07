import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
      // Positioning & Layout
      sticky bottom-0 w-full h-12 z-40

      // Spacing
      py-4

      // Typography
      text-xs lg:text-sm uppercase font-semibold text-center

      // Background & Appearance
      bg-primary text-foreground-dark
      "
    >
      © {currentYear} William Oktavianus. Made with ❤️ in Bandung.
    </footer>
  );
}
