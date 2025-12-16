import emailjs from "@emailjs/browser";

import type { CallRequestFormValues } from "../types";

import { EMAILJS } from "../constants/emailjs";

export const sendCallRequest = async (data: CallRequestFormValues) => {
  const templateParams = {
    from_name: data.name,
    phone_number: data.phone,
  };

  return emailjs.send(
    EMAILJS.SERVICE_ID,
    EMAILJS.TEMPLATE_ID,
    templateParams,
    EMAILJS.PUBLIC_KEY,
  );
};
