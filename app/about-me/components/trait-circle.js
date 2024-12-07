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
        className={`flex items-center justify-center w-20 h-20 bg-primary text-white rounded-full shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: delay,
          type: "spring",
        }}
        onTap={() => setIsModalOpen(true)}
      >
        <span className="text-base text-center font-bold">
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
