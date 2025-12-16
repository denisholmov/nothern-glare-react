import type { CallRequestFormValues } from "../types";

export const getCallRequestFormValues = (
  form: HTMLFormElement,
): CallRequestFormValues => {
  const formData = new FormData(form);

  return {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    policy: Boolean(formData.get("policy")),
  };
};
