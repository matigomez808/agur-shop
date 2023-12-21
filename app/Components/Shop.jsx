import ItemCards from '@Components/ItemCards';
import styles from '@Styles/page.module.css'



function Shop({ products }) {
  
    if (!products) return <h1>Loading... ef off why dont you?</h1>
    return (
        <div className={styles.shop}>
            {products && products.map((product) => {
                return (   
                    <ItemCards key={product.id} data={product}/>  
                );
            })}   
        </div>
    );
};

export default Shop;