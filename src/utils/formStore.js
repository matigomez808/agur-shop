import { create } from "zustand";


const useFormStore = create((set) => ({

  formValues: {
    telefono: "",
    email: "",
    nombre: "",
    apellido: "",
    calle: "",
    numero: "",
    piso: "",
    dpto: "",
    pais: "",
    provincia: "",
    localidad: "",
  },

  validationErrors: {
    telefono: false,
    email: false,
    nombre: false,
    apellido: false,
    calle: false,
    numero: false,
    pais: false,
    provincia: false,
    localidad: false,
  },

  handleInputChange: (field, value) => {
    set((state) => ({
      formValues: {
        ...state.formValues,
        [field]: value,
      },
    }));
  },

  handleValidation: () => {
    set((state) => {
      const errors = {};
      const allowedEmptyFields = ['piso', 'dpto'];

      Object.keys(state.formValues).forEach((field) => {
        if (!allowedEmptyFields.includes(field)) {

          errors[field] = state.formValues[field] === '';
        }
      });
      set({ validationErrors: errors });

      return !Object.values(errors).some((error) => error);
    });
  },
}));

export default useFormStore;
