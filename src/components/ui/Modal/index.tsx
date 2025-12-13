import { Modal } from "@mantine/core";

import type { ModalProps } from "./types";

export const AppModal = ({ opened, onClose, title, children }: ModalProps) => {
  return (
    <Modal opened={opened} onClose={onClose} title={title} centered>
      {children}
    </Modal>
  );
};
