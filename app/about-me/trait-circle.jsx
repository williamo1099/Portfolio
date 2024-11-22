"use client";
import { motion } from "framer-motion";

export default function TraitCircle({ text, href, color }) {
  const words = text.split(" ");
  const delay = (Math.random() * 2 + 1).toFixed(2);

  return (
    <a href={href} className="no-underline">
      <motion.div
        className={`flex items-center justify-center w-20 h-20 bg-${color} text-white rounded-full shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: delay,
          type: "spring",
        }}
      >
        <span className="text-base text-center font-bold">
          {words[0]}
          <br />
          {words[1]}
        </span>
      </motion.div>
    </a>
  );
}
