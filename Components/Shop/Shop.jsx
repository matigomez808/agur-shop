
import ItemCards from 'Components/ItemCards';
import styles from './shop.module.css';

async function getData() {
  const res = await fetch('http://localhost:3000/api/productos')
  console.log('fetchin')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data dude')
  }
  return res.json()
}

const Shop = async () => {
  const products = await getData();

  if (!products) {
    return <h1>Loading... Please wait a moment.</h1>;
  }

  return (
    <div className={styles.shop}>
      {products && products?.map((product, idx) => (

        <ItemCards key={idx} product={product} />
      ))
      }
    </div>
  );
}

export default Shop;