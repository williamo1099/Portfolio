"use client";
import Link from "next/link";

export default function MenuItem({ link, title, isActive }) {
  return (
    <li>
      <Link
        href={link}
        className={`px-2 py-1 border-b-2 border-transparent text-foreground hover:border-primary hover:text-primary transition duration-300 ${
          isActive
            ? "px-4 py-2 bg-primary text-white font-bold rounded-md border-none hover:border-none hover:text-white"
            : ""
        }`}
      >
        {title}
      </Link>
    </li>
  );
}
