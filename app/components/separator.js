"use client";
import { motion } from "motion/react";

export default function Separator({
  separatorBits = "011100100110010101101001",
  isVertical = false,
  additionalClassNames = "",
}) {
  return (
    <div className={`flex items-center justify-center ${additionalClassNames}`}>
      <div
        className={`flex ${isVertical ? "flex-row lg:flex-col" : "flex-row"}`}
      >
        {separatorBits.split("").map((bit, index) => (
          <motion.span
            key={index}
            className={`text-xs ${
              isVertical ? "lg:[writing-mode:vertical-lr]" : ""
            }`}
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
  );
}
