"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMePage() {
  const separatorBits = "011100100110010101101001".split("");

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen">
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
              className="text-gray-400 text-xs lg:[writing-mode:vertical-lr]"
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
      <div className="w-80">
        <h1 className="text-2xl font-bold">A Bit about Me</h1>
        <p className="text-sm text-gray-600 mt-1">
          I'm a graduate of the Computer Science at Parahyangan Catholic
          University, and I am currently a{" "}
          <span className="text-primary font-bold underline">
            full-stack web developer
          </span>{" "}
          and{" "}
          <span className="text-primary font-bold underline">
            mobile developer
          </span>
          . I primarily work on developing new features, building APIs,
          optimizing databases, and resolving application issues.
        </p>

        <div></div>
      </div>
    </div>
  );
}
