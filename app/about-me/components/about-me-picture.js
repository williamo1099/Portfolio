"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMePicture() {
  return (
    <div className="relative w-48 h-48 lg:w-80 lg:h-80">
      <motion.div
        className="absolute z-0 inset-0 rounded-full border-4 border-accent"
        style={{
          backgroundImage: `url('/images/blue-sky.jpg')`,
        }}
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
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
          width={400}
          height={400}
          className="relative z-10 -translate-y-[32px] lg:-translate-y-[53px] rounded-full"
        />
      </motion.div>
    </div>
  );
}
