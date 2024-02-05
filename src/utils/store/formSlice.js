

export const createFormSlice = (set) => ({
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

  setFormValues: (field, value) =>
    set((state) => ({
      formValues: {
        ...state.formValues,
        [field]: value,
      },
    })),
});

export const setValidationErrors = (errors) => createFormSlice.setState({errors});