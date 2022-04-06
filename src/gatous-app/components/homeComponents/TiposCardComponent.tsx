import { RiCake3Line } from 'react-icons/ri';
import { HiOutlineCake } from 'react-icons/hi';
import { MdOutlineDesignServices } from 'react-icons/md';
import { WiDaySnowThunderstorm } from 'react-icons/wi';
interface props {
  title: string;
  icon: string;
}

const RenderIcon = ({ icon }: { icon: string }) => {
  if (icon === 'RiCake3Line') {
    return <RiCake3Line size='6rem' />;
  }
  if (icon === 'HiOutlineCake') {
    return <HiOutlineCake size='6rem' />;
  }
  if (icon === 'MdOutlineDesignServices') {
    return <MdOutlineDesignServices size='6rem' />;
  }
  return <WiDaySnowThunderstorm size='6rem' />;
};

export const TiposCardComponent = (card: props): JSX.Element => {
  console.log(card);
  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>
      <div className='card border-primary shadow bg-secondary'>
        <div className='card-body d-flex justify-content-center'>
          <RenderIcon icon={card.icon} />
        </div>
        <h3 className='card-title m-auto my-3'>{card.title}</h3>
      </div>
    </div>
  );
};
