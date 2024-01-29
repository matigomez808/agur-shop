import Shop from "src/Components/Shop/Shop";
import Titulo from "src/Components/Titulo/Titulo";
import BannerCollage from "src/Components/BannerCollage/BannerCollage";
import BannerPago from "src/Components/BannerPago/BannerPago";
import BannerInfo from "src/Components/BannerInfo/BannerInfo";
import { Suspense } from "react";
import Loading from "./loading";

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
  );
}
