import React from "react";

export default function Footer() {
  return (
    <footer
      className="
      // Positioning & Layout
      sticky bottom-0 w-full h-12 z-50

      // Spacing
      py-4

      // Typography
      text-xs lg:text-sm uppercase font-semibold text-center

      // Background & Appearance
      bg-primary text-foreground-dark
      "
    >
      © 2024 William Oktavianus. Made with ❤️ in Bandung.
    </footer>
  );
}
