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
          className="form-input"
          name={inputName}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
        />
      ) : (
        <input
          className="form-input"
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
