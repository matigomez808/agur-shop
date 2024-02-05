import { Box, Typography } from '@mui/material';
import styles from './banner.module.css'

function BannerInfo() {
  return (
    <Box className={styles.bannerInfo}>
      <Typography>Bienvenide a la boutique de Agur. Esta vez podes encontrar las piezas de la colección &quot;Algodoncito&quot;. Un viajecito entre telas suaves y modelos cómodos.</Typography>
    </Box>
  )
}

export default BannerInfo;
