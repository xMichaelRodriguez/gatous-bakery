import { Link } from 'react-router-dom';
export const ListMenu = () => {
  return (
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
  );
};
