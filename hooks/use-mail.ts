import { useState } from "react";

import { sendMail } from "@/services/mail-service";
import useAPI from "./use-api";

export default function useMail() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { loading: isSending, error, request, data } = useAPI<boolean>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await request(() => sendMail(formData));
      setFormData({ name: "", email: "", message: "" });
    } catch {}
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSending,
    success: data !== null && !error,
    failed: !!error,
  };
}
