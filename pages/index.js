
import Shop from '@Components/Shop'
import Titulo from '@Components/Titulo'
import BannerCollage from '@Components/BannerCollage'
import PRODUCTOS from '@Data/products';
import RootLayout from '../app/layout';



export async function getServerSideProps() {
  const shopData = await PRODUCTOS;
  return {
    props: {
      shopData,
    },
  };
}

export default function Home({ shopData }) {
  return (
    
    <RootLayout>
      <BannerCollage />
      <Titulo />
      <Shop products={shopData} />
    </RootLayout>
    
  )
}



