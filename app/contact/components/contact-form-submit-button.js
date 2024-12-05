"use client";
import { motion } from "framer-motion";

export default function ContactFormSubmitButton({ isSending }) {
  return (
    <button
      className="bg-primary text-white font-medium rounded-lg py-2 mt-5 disabled:cursor-wait disabled:opacity-50 flex items-center justify-center"
      type="submit"
      disabled={isSending}
    >
      {isSending ? (
        <div className="flex items-center">
          Sending the message
          <motion.div
            className="flex space-x-1 ml-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.3,
                },
              },
            }}
          >
            {[0, 1, 2].map((_, index) => (
              <motion.span
                key={index}
                className="w-2 h-2 bg-white rounded-full"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  },
                }}
              />
            ))}
          </motion.div>
        </div>
      ) : (
        "Send"
      )}
    </button>
  );
}
