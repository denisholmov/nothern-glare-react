import { Text } from "@mantine/core";

import { AppModal } from "@/components/ui/Modal";

import type { CallbackModalProps } from "./types";

export const CallbackModal = ({ opened, onClose }: CallbackModalProps) => {
  return (
    <AppModal opened={opened} onClose={onClose} title="Мы вам перезвоним">
      <Text>Оставьте номер, и мы вам перезвоним</Text>
    </AppModal>
  );
};
