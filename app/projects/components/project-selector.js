"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

export default function ProjectSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isShowingPersonal, setIsShowingPersonal] = useState(
    searchParams.view === "personal"
  );

  const handleChange = (type) => {
    router.push(`?view=${type}`, { scroll: false });

    setIsShowingPersonal(type === "personal");
  };

  return (
    <div className="relative flex flex-row bg-background-light dark:bg-background-dark w-4/6 lg:w-2/6 rounded-full p-0 mt-5">
      {/* Sliding background */}
      <motion.div
        className="absolute bg-primary rounded-full h-full w-1/2 transition-all duration-200"
        animate={{ x: isShowingPersonal ? "100%" : 0 }}
        transition={{ duration: 0.1, ease: "linear" }}
      />

      {/* Professional */}
      <div
        onClick={() => handleChange("professional")}
        className={`cursor-pointer text-center font-bold w-1/2 py-2 rounded-full z-10 ${
          !isShowingPersonal
            ? "text-white"
            : "text-foreground-light dark:text-foreground-dark"
        } transition-all duration-300`}
      >
        Professional
      </div>

      {/* Personal */}
      <div
        onClick={() => handleChange("personal")}
        className={`cursor-pointer text-center font-bold w-1/2 py-2 rounded-full z-10 ${
          isShowingPersonal
            ? "text-white"
            : "text-foreground-light dark:text-foreground-dark"
        } transition-all duration-300`}
      >
        Personal
      </div>
    </div>
  );
}
