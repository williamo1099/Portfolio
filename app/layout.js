import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ThemeToggle from "./components/theme-toggle";
import TriangleBackground from "./components/triangle-background";

import "./globals.css";

export const metadata = {
  title: "William Oktavianus",
  description: "My portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>William Oktavianus</title>
        <meta name="description" content="My portfolio app." />
      </head>

      <body className="m-0 p-0 h-screen w-screen overflow-hidden bg-gray-100">
        {/* Navigation Bar */}
        <Navbar />
        <TriangleBackground />

        {/* Content */}
        <main className="flex-grow">
          {children}
          <ThemeToggle />
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
