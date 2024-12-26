"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import TraitModal from "./trait-modal";

export default function TraitCircle({ trait }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const words = trait.title.split(/[\s\W_]+/);
  const delay = (Math.random() * 2 + 1).toFixed(2);

  return (
    <React.Fragment>
      <motion.div
        className={`flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-primary dark:border-2 dark:border-foreground-dark rounded-full shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: delay,
          type: "spring",
        }}
        style={{
          backgroundColor: trait.backgroundColor,
          color: trait.textColor,
        }}
        onTap={() => setIsModalOpen(true)}
      >
        <span className="text-sm lg:text-base text-center text-foreground-dark font-bold">
          {words[0]}
          <br />
          {words[1]}
        </span>
      </motion.div>

      {/* Modal */}
      <TraitModal
        trait={trait}
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </React.Fragment>
  );
}
