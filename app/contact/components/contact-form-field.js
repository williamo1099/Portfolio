import { motion } from "framer-motion";

export default function ContactFormField({
  labelName,
  inputName,
  fieldType = "input",
  inputType,
  placeholder,
  value,
  handleChange,
  index,
}) {
  const classNames =
    "appearance-none rounded-none border-b-2 border-foreground-light dark:border-foreground-dark bg-background-light dark:bg-background-dark w-full p-2 mt-1 focus:outline-none focus:rounded focus:border-b-4 focus:border-2 focus:border-primary";

  return (
    <motion.div
      initial={{ x: "-5%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: index * 0.2, ease: "easeInOut" }}
      className="mt-5"
    >
      <label className="font-semibold p-2">{labelName}</label>
      {fieldType === "textarea" ? (
        <textarea
          className={classNames}
          name={inputName}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
        />
      ) : (
        <input
          className={classNames}
          name={inputName}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
        />
      )}
    </motion.div>
  );
}
