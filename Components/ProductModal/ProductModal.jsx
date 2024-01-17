'use client'
import styles from './modal.module.css'
import Image from 'next/image'


export default function ProductModal({ product, handleClose }) {

  return (
    <div className={styles.modalDiv}>
      <button className={styles.modalExit} onClick={handleClose} >X</button>
      <h2 className={styles.modalName}>{product.nombre}</h2>
      <Image
        className={styles.modalImg}
        src={product.imagen}
        alt='Imagen no disponible'
        width={400}
        height={500} />
      <h3 className={styles.modalPrice}>${product.precio}</h3>
    </div>
  )
}

