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
    const policy = formData.get("policy") !== null;

    console.log({ name, phone, policy });

    handleClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <CallModalUI onSubmit={handleSubmit} onClose={handleClose} />,
    document.body,
  );
};
