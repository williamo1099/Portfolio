"use client";
import { usePathname } from "next/navigation";
import { menus } from "@/data/menus";

import MenuItem from "./menu-item";

export default function MenuList({ isMenuOpen }) {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const filteredMenus = menus.filter(
    (menu) => menu.link !== "/misc" || pathname === "/misc"
  );

  return (
    <ul
      className={`
        // Layout
        absolute lg:static flex flex-col lg:flex-row
        top-0 left-0 z-40 w-screen h-screen lg:h-fit

        // Spacing
        justify-center items-center
        gap-y-6 lg:gap-y-0 lg:gap-x-4

        // Typography
        text-lg lg:text-base font-medium text-center lg:text-left

        // Background & Appearance
        bg-background-light dark:bg-background-dark lg:bg-transparent lg:dark:bg-transparent rounded-lg

        // Visibility & Animation
        ${
          isMenuOpen
            ? "opacity-95 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }
        lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto

        // Transition
        transition-all duration-300 ease-in-out
      `}
    >
      {filteredMenus.map((menu, index) => (
        <MenuItem
          link={menu.link}
          title={menu.name}
          index={index}
          isActive={isActive(menu.link)}
          isMenuOpen={isMenuOpen}
          key={index}
        />
      ))}
    </ul>
  );
}
