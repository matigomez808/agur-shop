import styles from '../page.module.css'
import Image from 'next/image'

function Navbar() {
    
  return (
    <>
      <div className={styles.navbar}>
            
        <div >
          <button>Hola!</button>
          <button>Shop</button>
          <button>Tabla de talles</button>
        </div>
        <div >
          <Image
            src="/agurLogoB.svg"
            alt="Next.js Logo"
            width={115}
            height={115}
            priority
          />
        </div>
        <button>Carrito</button>    
        
      </div>
    </>
  );
};

export default Navbar; 