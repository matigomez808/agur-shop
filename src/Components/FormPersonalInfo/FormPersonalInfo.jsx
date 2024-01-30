import { Box, Typography, FormControl, InputLabel, Input, Autocomplete, Divider, TextField, FormHelperText } from "@mui/material";
import theme from "src/theme";
import { useTheme } from "@mui/material";
import useFormStore from "src/utils/formStore";

const provincias = [
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Ciudad Autónoma de Buenos Aires',
  'Córdoba',
  'Corrientes',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego, Antártida e Islas del Atlántico Sur',
  'Tucumán'
];

const FormPersonalInfo = () => {
  const { formValues, validationErrors, handleInputChange, handleValidation } = useFormStore();
  
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h4" component="p" mt={2}>Información de contacto</Typography>
      <FormHelperText disabled>Los campos marcados con * son necesarios</FormHelperText>

      <FormControl required fullWidth variant="outlined" sx={{ mt: 2 }}>
        <InputLabel htmlFor="nombre">Nombre</InputLabel>
        <Input 
        id="nombre"
        onChange={(e) => handleInputChange('nombre', e.target.value)} />
      </FormControl>

      <FormControl required fullWidth variant="outlined" sx={{ mt: 2 }}>
        <InputLabel htmlFor="apellido">Apellido</InputLabel>
        <Input id="apellido" />
      </FormControl>

      <FormControl required fullWidth variant="outlined" sx={{ mt: 2 }}>
        <InputLabel htmlFor="telefono">Teléfono</InputLabel>
        <Input
          id="telefono"
          onChange={(e) => handleInputChange('telefono', e.target.value)}
          />
        <FormHelperText disabled >No vamos a divulgar tu télefono</FormHelperText>
      </FormControl>

      <FormControl required fullWidth variant="outlined" sx={{ mt: 2 }}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input 
        id="email"
        onChange={(e) => handleInputChange('email', e.target.value)} />
        <FormHelperText disabled>No vamos a divulgar tu email</FormHelperText>
      </FormControl>

      <Divider sx={{ mt: 4 }} />

      <Typography variant="h5" component="p" mt={2}>Dirección</Typography>

      <FormControl required fullWidth variant="outlined" sx={{ mt: 2 }}>
        <InputLabel htmlFor="calle">Calle</InputLabel>
        <Input 
        id="calle"
        onChange={(e) => handleInputChange('calle', e.target.value)} />
      </FormControl>

      <FormControl required fullWidth variant="outlined" sx={{ mt: 2 }}>
        <InputLabel htmlFor="numero">Número</InputLabel>
        <Input id="numero" />
      </FormControl>

      <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
        <InputLabel htmlFor="piso">Piso</InputLabel>
        <Input 
        id="piso"
        onChange={(e) => handleInputChange('piso', e.target.value)} />
      </FormControl>

      <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
        <InputLabel htmlFor="dpto">Departamento</InputLabel>
        <Input 
        id="dpto"
        onChange={(e) => handleInputChange('dpto', e.target.value)} />
      </FormControl>

      <FormControl required fullWidth variant="outlined" sx={{ mt: 3 }}>
        <InputLabel htmlFor="pais" shrink sx={{ top: -10 }}>País</InputLabel>
        <Autocomplete
          disablePortal
          id="pais"
          options={["Argentina"]}
          renderInput={(params) => <TextField {...params} />}
        />
        <FormHelperText disabled>De momento solo hacemos envíos a Argentina.</FormHelperText>
      </FormControl>

      <FormControl required fullWidth variant="outlined" sx={{ mt: 3 }}>
        <InputLabel htmlFor="provincia" shrink sx={{ top: -10 }}>Provincia</InputLabel>
        <Autocomplete
          disablePortal
          id="provincia"
          options={provincias}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormControl>

      <FormControl required fullWidth variant="outlined" sx={{ mt: 2 }}>
        <InputLabel htmlFor="localidad">Localidad</InputLabel>
        <Input 
        id="localidad"
        onChange={(e) => handleInputChange('localidad', e.target.value)} />
      </FormControl>
    </Box>
  );
};

export default FormPersonalInfo;
