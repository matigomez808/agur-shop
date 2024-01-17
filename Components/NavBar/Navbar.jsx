import styles from './nav.module.css'
import SVGCart from 'Components/icons/ShoppingCart'
import Image from 'next/image'
import Link from 'next/link';

function Navbar() {
    
  return (
    
      <div className={styles.navbar}>
        <div className={styles.botonera}>
        <div className={styles.logoNav} >
          <Image
          
            src="/agurLogoB.png"
            alt="Agur Logo"
            width={115}
            height={115}
            
          />
        </div>
          <Link href={'/hola'} className={styles.botonNav}>Hola!</Link>
          <Link href={'/'} className={styles.botonNav}>Shop</Link>
          <Link href={'/talles'} className={styles.botonNav}>Talles</Link>
        </div>
        
        <Link href={'/cart'} className={styles.botonNav} ><SVGCart width='35' /></Link>    
      </div>
    
  );
};

export default Navbar; 