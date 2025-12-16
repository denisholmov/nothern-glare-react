import * as yup from "yup";

export const callRequestSchema = yup.object({
  name: yup.string().trim(),

  phone: yup
    .string()
    .required("Введите номер телефона")
    .matches(
      /^(\+7|8)\s?\(?\d{3}\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
      "Введите номер в формате +79998887766",
    ),

  policy: yup
    .boolean()
    .oneOf([true], "Необходимо согласие на обработку данных"),
});
