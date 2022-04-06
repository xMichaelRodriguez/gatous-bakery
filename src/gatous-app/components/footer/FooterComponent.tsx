import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const FooterComponent = () => {
  return (
    // footer with bootstrap
    <footer className=' bg-light text-muted'>
      <div className='container justify-content-between'>
        <div className='row'>
          <div className='col-lg-5 col-md-6 col-sm-6'>
            <h5 className='fw-bold mb-4'>Gatous Bakery</h5>
            <p className='mb-4'>
              Pasteleria al norte de mexico dedicada a hacer pasteles al dia con
              diseños totalmente personalizados para cualquier tipo de eventos.
            </p>
          </div>
          <div className=' d-inline-flex  justify-content-around col-lg-3 col-md-6 col-sm-6'>
            <ul className='list-unstyled '>
              <h5 className='fw-bold '>Menu</h5>
              <li className='mb-2'>
                <Link className='link-primary' to='/'>
                  Inicio
                </Link>
              </li>
              <li className='mb-2'>
                <Link className='link-primary' to='/cakes'>
                  Cakes
                </Link>
              </li>
              <li className='mb-2'>
                <Link className='link-primary' to='/pasteles'>
                  Pasteles
                </Link>
              </li>
              <li className='mb-2'>
                <Link className='link-primary' to='temporada'>
                  Temporada
                </Link>
              </li>
            </ul>
          </div>
          <div className=' col-lg-2 col-md-6 col-sm-6'>
            <h5 className='fw-bold mb-4'>Contacto</h5>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <a
                  className='link-primary'
                  href='https://api.whatsapp.com/send?phone=+528127688513'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <BsWhatsapp /> Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
