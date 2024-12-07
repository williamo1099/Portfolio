"use client";
import { motion } from "framer-motion";

import HighlightedText from "@/app/components/highlighted-text";
import Title from "@/app/components/title";

export default function AboutMeStory() {
  return (
    <div className="mx-5 w-4/6 lg:w-2/6">
      {/* Title */}
      <Title>
        A Bit about <HighlightedText>Me</HighlightedText>
      </Title>

      {/* Background */}
      <p className="text-sm lg:text-base mt-2">
        A graduate of the Computer Science from Parahyangan Catholic University
        with a deep passion for{" "}
        <span className="text-primary font-bold underline">
          front-end development
        </span>{" "}
        and{" "}
        <span className="text-primary font-bold underline">
          clean code architecture
        </span>
        . Currently employed as a{" "}
        <span className="text-primary font-bold underline">full-stack web</span>{" "}
        and{" "}
        <span className="text-primary font-bold underline">
          mobile developer
        </span>
        , designing and building business application solutions for clients.
      </p>

      {/* CV */}
      <motion.div
        initial={{ x: "-10%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
        className="mt-3"
      >
        <a
          href="/documents/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Curriculum Vitae in a new tab"
          className="text-primary text-lg font-bold cursor-pointer"
        >
          Curriculum Vitae
        </a>
      </motion.div>
    </div>
  );
}
