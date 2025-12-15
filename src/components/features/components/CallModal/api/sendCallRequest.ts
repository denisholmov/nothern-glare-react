import emailjs from "@emailjs/browser";

import { EMAILJS } from "../constants/emailjs.ts";
import { getFormValues } from "../utils/getFormValues.ts";

export const sendCallRequest = async (form: HTMLFormElement) => {
  const formData = getFormValues(form);

  const templateParams = {
    from_name: formData.name,
    phone_number: formData.phone,
  };

  return emailjs.send(
    EMAILJS.SERVICE_ID,
    EMAILJS.TEMPLATE_ID,
    templateParams,
    EMAILJS.PUBLIC_KEY,
  );
};
