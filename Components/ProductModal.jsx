'use client'
import styles from '@Styles/page.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function ProductModal({product}) {
    const router = useRouter();
    return(
        <div className={styles.modalDiv}>
            <span className={styles.modalExit} onClick={() => router.back()}>X</span>
            <h2 className={styles.modalName}>{product.name}</h2>
            <Image
            className={styles.modalImg}
            src={product.image}
            alt='Imagen no disponible'
            width={400}
            height={500} />
            <h3 className={styles.modalPrice}>{product.precio}</h3>
        </div>
    )
}

