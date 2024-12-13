"use client";
import dynamic from "next/dynamic";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ThemeToggle from "./components/theme-toggle";
import TriangleBackground from "./components/triangle-background";

import "./globals.css";

// ThemeProvider with SSR disabled.
const ThemeProvider = dynamic(
  () => import("next-themes").then((mod) => mod.ThemeProvider),
  { ssr: false },
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          // Layout
          h-screen w-screen

          // Overflow & Spacing
          overflow-hidden m-0 p-0

          // Typography
          text-foreground-light dark:text-foreground-dark

          // Background
          bg-background-light dark:bg-background-dark
        `}
      >
        <ThemeProvider attribute="class" enableSystem={true}>
          {/* Modal */}
          <div id="modal-root"></div>

          {/* Navigation Bar */}
          <Navbar />
          <TriangleBackground />

          {/* Content */}
          <main className="z-10 relative">
            <div
              className="
                // Layout
                flex flex-col justify-center items-center
                h-[calc(100dvh-3rem)]

                // Overflow & Spacing
                overflow-auto
                pt-20 lg:pt-0
              "
            >
              {children}
            </div>

            <ThemeToggle />
          </main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
