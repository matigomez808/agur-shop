
import Shop from 'Components/Shop/Shop'
import Titulo from 'Components/Titulo/Titulo'
import BannerCollage from '@Components/BannerCollage/BannerCollage'
import BannerPago from 'Components/BannerPago/BannerPago';
import BannerInfo from 'Components/BannerInfo/BannerInfo';

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



