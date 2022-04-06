import { DescriptionFooter } from './DescriptionFooter';
import { ListMenu } from './ListMenu';

export const FooterComponent = () => {
  return (
    // footer with bootstrap
    <footer className=' bg-light text-muted'>
      <div className='container justify-content-between'>
        <div className='row'>
          <DescriptionFooter />
          <ListMenu />
        </div>
      </div>
    </footer>
  );
};
