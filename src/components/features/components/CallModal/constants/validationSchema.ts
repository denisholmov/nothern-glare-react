import * as yup from "yup";

export const callRequestSchema = yup.object({
  name: yup.string().trim().min(2, "Имя должно быть не короче 2 символов"),

  phone: yup
    .string()
    .required("Введите номер телефона")
    .matches(
      /^(\+7|8)\s?\(?\d{3}\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
      "Некорректный номер телефона",
    ),

  policy: yup
    .boolean()
    .oneOf([true], "Необходимо согласие на обработку данных"),
});
