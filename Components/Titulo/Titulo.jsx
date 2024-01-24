import { Typography } from "@mui/material";


function Titulo() {
  return (
    <>
      <Typography variant="h2" 
      component="h1" 
      sx={{
        textAlign: 'center'
      }}>Agur</Typography>
      <Typography 
      variant="h5" 
      component="h1"
      sx={{
        textAlign: 'center'
      }}>Ropa interior <em>hecha a mano</em></Typography>
    </>
  )
}

export default Titulo;