// CallModal/index.tsx
import React from "react";
import { createPortal } from "react-dom";

import { CallModalUI } from "@/components/ui/CallModalUi";

import type { CallModalProps } from "./types";

import { sendCallRequest } from "./api/sendCallRequest";

export const CallModal = ({ isOpen, setIsOpen }: CallModalProps) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await sendCallRequest(e.currentTarget);
      handleClose();
    } catch (err) {
      alert(
        `${JSON.stringify(err)}! Ведутся технические работы. Можете связаться с нами по указанному на сайте телефону!`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <CallModalUI
      onSubmit={handleSubmit}
      onClose={handleClose}
      isLoading={isLoading}
    />,
    document.body,
  );
};
