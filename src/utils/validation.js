import useMyBoundStore from "./store/store";
import validator from "validator";

export const errors = {};

export const validateRequiredFields = () => {
  const formValues = useMyBoundStore.getState().formValues;
  
  const requiredFields = [
    "nombre",
    "apellido",
    "telefono",
    "email",
    "calle",
    "numero",
    "pais",
    "provincia",
    "localidad",
  ];

  requiredFields.forEach((field) => {
    if (formValues[field].trim() === "") {
      errors[field] = "Campo obligatorio";
    } else if (field === "email" && !validator.isEmail(formValues.email)) {
      errors[field] = "Dirección de e-mail inválida.";
    } else if (
      field === "telefono" &&
      !validator.isNumeric(formValues.telefono)
    ) {
      errors[field] = "Numero de telefono inválido. Solo puede contener números";
    } else {
      errors[field] = false;
    }
  });

  useMyBoundStore.setState({validatoinErrors: errors});
  console.log(formValues)
  console.log(useMyBoundStore.getState().validationErrors)
  return Object.values(errors).every((error) => !error);
};
