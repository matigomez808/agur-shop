
import Shop from 'Components/Shop'
import Titulo from 'Components/Titulo'
import BannerCollage from 'Components/BannerCollage'
import BannerPago from 'Components/BannerPago';
import BannerInfo from 'Components/BannerInfo';
import { fetchProducts } from 'utils/api';



const shopData = await fetchProducts();

export default function Home() {
  

  return (
    <>
      <Titulo />
      <BannerInfo />
      <BannerCollage />
      <BannerPago />
      <Shop products={shopData}/>
    </>
  )
}



