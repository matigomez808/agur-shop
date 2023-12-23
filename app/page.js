
import Shop from '@Components/Shop'
import Titulo from '@Components/Titulo'
import BannerCollage from '@Components/BannerCollage'
import { fetchProducts } from 'utils/api';



const shopData = await fetchProducts();

export default function Home() {
  
  return (
    
    <>
      <BannerCollage />
      <Titulo />
      <Shop products={shopData} />
    </>
    
  )
}



