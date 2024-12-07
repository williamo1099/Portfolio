"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import HighlightedText from "@/app/components/highlighted-text";

export default function Introduction({ name = "Wiilliam Oktavianus" }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingTimeout = () => {
      if (currentIndex < name.length - 1) {
        // Add the next character to the displayed text
        setDisplayedText((prev) => prev + name[currentIndex]);
        currentIndex++;

        // Call the next character typing after a delay
        setTimeout(typingTimeout, 150);
      }
    };

    typingTimeout(); // Start typing immediately

    // Cleanup function in case the component unmounts or `name` changes
    return () => clearTimeout(typingTimeout);
  }, [name]);

  return (
    <React.Fragment>
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
          <HighlightedText additionalClassNames="font-serif mr-2">
            Artist
          </HighlightedText>
          and
        </div>

        {/* Learner */}
        <span className="underline italic">Lifelong Learner</span>
      </div>
    </React.Fragment>
  );
}
