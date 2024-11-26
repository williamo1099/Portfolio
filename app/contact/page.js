"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Sending status
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set sending status.
    setIsSending(true);
    setSuccess(false);
    setFailed(false);

    // Send email via EmailJS.
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          // Set sending status.
          setSuccess(true);
          setIsSending(false);

          // Reset form.
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          setFailed(true);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col w-5/6 lg:w-1/2">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold">
          Contact <span className="text-highlight">Me</span>
        </h2>

        {/* Name */}
        <motion.div
          initial={{ x: "-5%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
          className="mt-5"
        >
          <label className="font-semibold p-2">Name</label>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="What should I call you?"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ x: "-5%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          className="mt-3"
        >
          <label className="font-semibold p-2">E-mail</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Where can I reach you?"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ x: "-5%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          className="mt-3"
        >
          <label className="font-semibold p-2">Message</label>
          <textarea
            className="form-input"
            name="message"
            placeholder="How can I help you?"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </motion.div>

        {/* Send */}
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

        {/* Message */}
        <div className="mt-3 text-sm font-medium">
          {success && (
            <span className="text-success">
              Message sent successfully! I will respond ASAP.
            </span>
          )}
          {failed && (
            <span className="text-error">
              Failed to send message. Please try again.
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
