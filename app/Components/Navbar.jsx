import styles from '@Styles/page.module.css'
import SVGCart from '@Icons/ShoppingBag'
import Image from 'next/image'
import Link from 'next/link';

function Navbar() {
    
  return (
    
      <div className={styles.navbar}>
        <div className={styles.botonera}>
          <Link href={'/hola'} className={styles.botonNav} on>Hola!</Link>
          <Link href={'/'} className={styles.botonNav}>Shop</Link>
          <Link href={'/talles'} className={styles.botonNav}>Talles</Link>
        </div>
        <div className={styles.logoNav} >
          <Image
          
            src="/agurLogoB.svg"
            alt="Agur Logo"
            width={115}
            height={115}
            priority
          />
        </div>
        <Link href={'/cart'} className={styles.botonNav} ><SVGCart width='35' /></Link>    
      </div>
    
  );
};

export default Navbar; 