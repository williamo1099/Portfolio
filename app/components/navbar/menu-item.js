"use client";
import Link from "next/link";

export default function MenuItem({ link, title, isActive }) {
  return (
    <li>
      <Link
        href={link}
        className={`nav-link ${isActive ? "nav-link-active" : ""}`}
      >
        {title}
      </Link>
    </li>
  );
}
