import type { Dispatch, SetStateAction } from "react";

export type CallModalUIProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClose: Dispatch<SetStateAction<boolean>>;
};
