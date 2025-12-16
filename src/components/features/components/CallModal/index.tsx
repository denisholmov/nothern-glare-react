// CallModal/index.tsx
import React from "react";
import { createPortal } from "react-dom";

import { CallModalUI } from "@/components/ui/CallModalUi";

import type { CallModalProps, CallRequestFormValues } from "./types";

import { sendCallRequest } from "./api/sendCallRequest";
import { callRequestSchema } from "./constants/validationSchema";
import { getCallRequestFormValues } from "./utils/getCallRequestFormValues";

export const CallModal = ({ isOpen, setIsOpen }: CallModalProps) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const values: CallRequestFormValues = getCallRequestFormValues(
        e.currentTarget,
      );

      await callRequestSchema.validate(values, {
        abortEarly: false,
      });

      await sendCallRequest(values);

      handleClose();
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "ValidationError") {
        const yupError = err as import("yup").ValidationError;
        alert(yupError.errors.join("\n"));
        return;
      }

      alert(
        "Ведутся технические работы. Можете связаться с нами по указанному на сайте телефону!",
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
