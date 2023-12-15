
import { PRODUCTS } from "../products"
import ItemCards from "./ItemCards";
import styles from '../page.module.css'

function Shop() {
 
    return (
        <>
            <p className={styles.titulo}>Agur lenceria</p>
            <p className={styles.subtitulo}>Ropa interior <em>hecha a mano</em></p>
                <div>                
                    {PRODUCTS.map((product) => {
                        return (   
                            <ItemCards key={product.id} data={product}/>  
                        );
                    })}
                </div>
            
        
        </>
    );
};

export default Shop;