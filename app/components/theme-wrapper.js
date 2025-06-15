"use client";
import dynamic from "next/dynamic";

import ThemeToggle from "./theme-toggle";

// ThemeProvider with SSR disabled.
const ThemeProvider = dynamic(
  () => import("next-themes").then((mod) => mod.ThemeProvider),
  { ssr: false }
);

export default function ThemeWrapper({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      {children}
      <ThemeToggle />
    </ThemeProvider>
  );
}
