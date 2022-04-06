import { BannerSection } from '../homeComponents/BannerSection';
import { TiposComponent } from '../homeComponents/TiposComponent';

export const HomeScreen = () => {
  return (
    <>
      <div className='container-fluid py-5'>
        <BannerSection />
      </div>

      <div className='py-5 container'>
        <TiposComponent />
      </div>
    </>
  );
};
