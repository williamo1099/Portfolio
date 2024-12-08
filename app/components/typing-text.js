import { motion } from "framer-motion";

export const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

export default function TypingText({ text, classNames }) {
  return (
    <motion.span
      key={text}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      className={classNames}
    >
      {text.split("").map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Shoutout to andrewpjames13!
// https://codesandbox.io/p/sandbox/typewriter-component-react-framer-motion-fct3y6?file=%2Fsrc%2Ftypewriter.jsx%3A15%2C1-27%2C14
