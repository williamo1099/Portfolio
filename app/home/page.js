"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import SocialMediaList from "./components/social-media-list";

export default function HomePage() {
  const fullName = "Wiilliam Oktavianus";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullName.length - 1) {
        setDisplayedText((prev) => prev + fullName[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Foreground Text */}
      <div className="relative z-10 m-5 lg:m-0 text-left">
        {/* Name */}
        <h1 className="text-2xl font-bold">
          I&apos;m{" "}
          <motion.span
            className="ml-1 text-4xl lg:text-5xl font-mono font-bold text-primary hover:underline cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayedText}
          </motion.span>
        </h1>

        {/*  Position */}
        <div className="flex flex-col lg:flex-row lg:space-x-2 text-xl lg:text-2xl mt-3 w-auto mx-auto">
          {/* Software Developer */}
          <div>
            <span className="font-mono">Software Developer</span>,
          </div>

          {/* Artist */}
          <div className="space-x-2">
            <span className="text-highlight font-serif mr-2">Artist</span>
            and
          </div>

          {/* Learner */}
          <span className="underline italic">Lifelong Learner</span>
        </div>

        {/* Social Media */}
        <SocialMediaList />
      </div>
    </div>
  );
}
