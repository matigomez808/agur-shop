import styles from '@Styles/page.module.css'
import Image from 'next/image';

function ItemCards(product) {
    const newProd = {...product.data};

    return (
        <div className={styles.card} >
            
            
            <Image 
            className={styles.cardImg} 
            src={newProd.imagen} 
            alt="imagen no disponible"
            
            
            />
            <p className={styles.cardName}>{newProd.nombre}</p>

            <p className={styles.cardPrecio}>${newProd.precio}</p>
            <button className={styles.cardBtn}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCards;