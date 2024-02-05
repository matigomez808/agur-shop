import { Box, Typography } from '@mui/material';
import styles from './footer.module.css'
import { GitHub } from '@mui/icons-material';
import {Link} from '@mui/material';

function Footer() {
  return (
    <Box className={styles.footer}>
      <Typography variant='subtitle2'>Todo lo que podes ver en este sitio es confeccionado a mano en Santa Rosa, La Pampa, Argentina</Typography>
      <Typography variant='subtitle2'>Podes ver mas fotos en <a href="https://www.instagram.com/agurlenceria/" target='_blank'>Instagram</a></Typography>
      <a href="https://github.com/matigomez808" target='_blank'><GitHub /></a>
    </Box>
  )
}

export default Footer;