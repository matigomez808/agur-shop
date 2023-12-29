import styles from '@Styles/page.module.css'
import SVGCard from '@Icons/CreditCard'
import SVGBag from '@Icons/ShoppingBag';
import SVGTransfer from '@Icons/Transfer';

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