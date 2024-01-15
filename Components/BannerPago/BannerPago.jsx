import styles from './banner.module.css'
import SVGCard from 'Components/icons/CreditCard'
import SVGBag from 'Components/icons/ShoppingBag';
import SVGTransfer from 'Components/icons/Transfer';

function BannerPago() {
  return (
    <div className={styles.bannerPago}>
      <SVGBag />
      <p><SVGCard /> Podes pagar tu compra con: débito  crédito  y transferencia. También tenés un 20% off si pagas con transferencia!<SVGTransfer /></p>
      <SVGBag />
    </div>
  )
}

export default BannerPago;