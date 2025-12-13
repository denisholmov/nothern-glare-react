import type { ReactNode } from "react";

export type ModalProps = {
  opened: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};
