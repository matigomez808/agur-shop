import { Box, Typography } from '@mui/material';
import styles from './banner.module.css'
import SVGCard from 'src/Components/icons/CreditCard'
import SVGBag from 'src/Components/icons/ShoppingBag';
import SVGTransfer from 'src/Components/icons/Transfer';

function BannerPago() {
  return (
    <Box className={styles.bannerPago}>
      <SVGBag />
      <Typography
        variant='body1'
        component='p'
        textAlign='center'>
        Podes pagar tu compra con: débito  crédito  y transferencia. También tenés un 20% off si pagas con transferencia!
      </Typography>
      <SVGBag />
    </Box>
  )
}

export default BannerPago;