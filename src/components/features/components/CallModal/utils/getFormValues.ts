export const getFormValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  return {
    name: formData.get("name"),
    phone: formData.get("phone"),
  };
};
