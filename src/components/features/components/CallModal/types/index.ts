export type CallModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CallRequestFormValues = {
  name: string;
  phone: string;
  policy: boolean;
};
