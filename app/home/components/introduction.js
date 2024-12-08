"use client";
import React from "react";

import HighlightedText from "@/app/components/highlighted-text";
import TypingText from "@/app/components/typing-text";

export default function Introduction({ name = "William Oktavianus" }) {
  return (
    <React.Fragment>
      {/* Name */}
      <h1 className="text-2xl font-bold">
        I&apos;m{" "}
        <TypingText
          text={name}
          classNames={
            "ml-1 text-4xl lg:text-5xl font-mono font-bold text-primary hover:underline cursor-pointer"
          }
        />
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
