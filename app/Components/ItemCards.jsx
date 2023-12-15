import styles from '../page.module.css'

function ItemCards(product) {
    const newProd = {...product.data};

    return (
        <div className={styles.card} >
            
            
            <img className={styles.imagen} src={newProd.imagen} alt="imagen no disponible" />
            <p className="nombre">{newProd.nombre}</p>

            <p className="precio">${newProd.precio}</p>
            <button >Agregar al carrito</button>
        </div>
    );
};

export default ItemCards;