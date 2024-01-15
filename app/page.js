
import Shop from 'Components/Shop'
import Titulo from 'Components/Titulo'
import BannerCollage from 'Components/BannerCollage'
import BannerPago from 'Components/BannerPago';
import BannerInfo from 'Components/BannerInfo';

import { Suspense } from 'react';
import Loading from './loading';



export default function Home() {
  

  return (
    <>
      <Titulo />
      <BannerInfo />
      <BannerCollage />
      <BannerPago />
      
      <Suspense fallback={<Loading />}>
        <Shop />
      </Suspense>
      
    </>
  )
}



