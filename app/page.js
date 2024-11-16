"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function HomePage() {
  //
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
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-96 h-96 bg-blue-300 rounded-full absolute -top-10 -left-20 opacity-50"></div>
        <div className="w-72 h-72 bg-green-300 rounded-full absolute bottom-20 lg:bottom-0 lg:top-20 right-0 lg:right-10 opacity-50"></div>
      </div>

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
            <span className="bg-primary text-white font-serif px-2 mr-2 rounded-md">
              Artist
            </span>
            and
          </div>

          {/* Learner */}
          <span className="underline italic">Lifelong Learner</span>
        </div>

        {/* Social Media */}
        <div className="flex space-x-2 mt-6">
          {/* GitHub */}
          <a
            href="https://github.com/williamo1099"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub"
              className="rounded-lg hover:opacity-75"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/williamo1099/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="GitHub"
              className="rounded-lg hover:opacity-75"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
