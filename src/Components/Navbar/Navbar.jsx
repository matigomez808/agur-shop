'use client'

import styles from './nav.module.css'
import SVGCart from 'src/Components/icons/ShoppingCart'
import Image from 'next/image'
import Link from 'next/link';
import { Button, Box } from '@mui/material';
import Cart from 'src/Components/Cart/Cart';

function Navbar() {
    
  return (
    
      <Box className={styles.navbar}>
        <Box className={styles.botonera}>
        <Box className={styles.logoNav} >
          <Image
          
            src="/agurLogoB.png"
            alt="Agur Logo"
            width={115}
            height={115}
            
          />
        </Box>
          <Button 
          variant='text' 
          typography='overline' 
          href={'/hola'} 
          className={styles.botonNav}>Hola!</Button>
          <Button href={'/'} className={styles.botonNav}>Shop</Button>
          <Button href={'/talles'} className={styles.botonNav}>Talles</Button>
        </Box>
        
        <Link href={'/cart'} className={styles.botonNav} ><SVGCart width='35' /></Link>    
        <Cart />
      </Box>
    
  );
};

export default Navbar; 