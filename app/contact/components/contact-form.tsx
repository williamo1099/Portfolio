"use client";
import ContactFormField from "./contact-form-field";
import ContactFormSubmitButton from "./contact-form-submit-button";
import ContactFormMessage from "./contact-form-message";

import useMail from "@/hooks/use-mail";

export default function ContactForm() {
  const { formData, isSending, success, failed, handleChange, handleSubmit } =
    useMail();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-5/6 lg:w-1/2">
      {/* Name */}
      <ContactFormField
        labelName="Name"
        inputName="name"
        inputType="text"
        placeholder="What should I call you?"
        value={formData.name}
        handleChange={handleChange}
        index={0}
      />

      {/* E-mail */}
      <ContactFormField
        labelName="E-mail"
        inputName="email"
        inputType="email"
        placeholder="Where can I reach you?"
        value={formData.email}
        handleChange={handleChange}
        index={1}
      />

      {/* Message */}
      <ContactFormField
        labelName="Message"
        inputName="message"
        fieldType="textarea"
        placeholder="How can I help you?"
        value={formData.message}
        handleChange={handleChange}
        index={2}
      />

      {/* Submission button */}
      <ContactFormSubmitButton isSending={isSending} />

      {/* Message */}
      <ContactFormMessage success={success} failed={failed} />
    </form>
  );
}
