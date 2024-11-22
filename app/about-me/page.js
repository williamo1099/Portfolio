"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import TraitCircle from "./trait-circle";

export default function AboutMePage() {
  const separatorBits = "011100100110010101101001".split("");

  return (
    <div className="flex flex-col space-y-2 justify-center items-center min-h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        {/* Picture */}
        <div className="relative w-48 h-48 lg:w-80 lg:h-80">
          <motion.div
            className="absolute z-0 inset-0 rounded-full border-2 border-accent"
            style={{
              backgroundImage: `url('/images/blue-sky.jpg')`,
            }}
            initial={{ x: "-20%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: "easeIn",
            }}
          >
            <Image
              src="/images/me.png"
              alt="Profile Picture"
              width={350}
              height={350}
              className="relative z-10 -translate-y-8 lg:-translate-y-14 rounded-full"
            />
          </motion.div>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center my-3 lg:my-0 lg:mx-10">
          <div className="flex flex-row lg:flex-col">
            {separatorBits.map((bit, index) => (
              <motion.span
                key={index}
                className="text-gray-500 text-xs lg:[writing-mode:vertical-lr]"
                animate={{
                  opacity: Math.random(),
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {bit}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="mx-5 w-4/6 lg:w-2/6">
          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold">
            A Bit about{" "}
            <span className="bg-primary text-white px-2 mr-2 rounded-md">
              Me
            </span>
          </h1>

          {/* Background */}
          <p className="text-sm lg:text-base text-gray-600 mt-2">
            A graduate of the Computer Science from Parahyangan Catholic
            University with a deep passion for{" "}
            <span className="text-primary font-bold underline">
              front-end development
            </span>{" "}
            and{" "}
            <span className="text-primary font-bold underline">
              clean code architecture
            </span>
            . Currently employed as a{" "}
            <span className="text-primary font-bold underline">
              full-stack web
            </span>{" "}
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
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
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
      </div>

      <div className="flex flex-row space-x-4 items-center justify-center w-full">
        <TraitCircle text="Clean Code" color="primary" />
        <TraitCircle text="Detail Focused" color="primary" />
        <TraitCircle text="Team Work" color="primary" />
        <TraitCircle text="Tech- Driven" color="primary" />
      </div>
    </div>
  );
}
