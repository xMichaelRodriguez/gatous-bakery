import { BannerSection } from '../homeComponents/BannerSection';
import { TiposComponent } from '../homeComponents/TiposComponent';

export const HomeScreen = () => {
  return (
    <>
      <div className='py-5 container-fluid'>
        <BannerSection />
      </div>
      <div className='py-5'>
        <TiposComponent />
      </div>
    </>
  );
};
