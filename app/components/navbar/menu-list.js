"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { menus } from "@/data/menus";

import MenuItem from "./menu-item";

export default function MenuList({ isMenuOpen }) {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <ul
      className={`lg:flex lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0 ${
        isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
      } lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto
    absolute lg:static left-0 w-full bg-background rounded-lg text-foreground lg:bg-transparent z-40 justify-center pt-52 pl-14 p-4 lg:p-0 transition-all duration-300 ease-in-out`}
    >
      {menus.map((menu, index) => (
        <MenuItem
          link={menu.link}
          title={menu.name}
          isActive={isActive(menu.link)}
          key={index}
        />
      ))}
    </ul>
  );
}
