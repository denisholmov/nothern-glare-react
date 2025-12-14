import emailjs from "@emailjs/browser";
import React from "react";
import { createPortal } from "react-dom";

import { CallModalUI } from "@/components/ui/CallModalUi";

import type { CallModalProps } from "./types";

export const CallModal = ({ isOpen, setIsOpen }: CallModalProps) => {
  const handleClose = () => setIsOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;

    const templateParams = {
      from_name: name,
      phone_number: phone,
    };

    emailjs
      .send(
        "service_wg0lmmu", // Service ID
        "template_i9i18ae", // Template ID
        templateParams,
        "SL_s35RSIgD2svZIX", // Public Key
      )
      .then(
        (response) => {
          console.log("Письмо отправлено!", response.status, response.text);
        },
        (err) => {
          console.error("Ошибка при отправке:", err);
        },
      );

    handleClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <CallModalUI onSubmit={handleSubmit} onClose={handleClose} />,
    document.body,
  );
};
