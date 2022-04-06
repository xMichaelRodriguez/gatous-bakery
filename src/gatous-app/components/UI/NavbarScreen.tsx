import { Link, NavLink } from 'react-router-dom';

export const NavbarScreen = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm '>
      <div className='container'>
        <Link className='navbar-brand text-primary fw-bold' to='/'>
          {/* <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap */}
          Gatous Bakery
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto'>
            <NavLink className='nav-link ' to='/'>
              Inicio
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: 400,
                transition: ' 0.1s',
              }}
              activeClassName='active'
              className='nav-link '
              to='/cakes'
            >
              Cakes
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: 400,
                transition: ' 0.1s',
              }}
              activeClassName='active'
              className='nav-link '
              to='/pasteles'
            >
              Pasteles
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: 400,
                transition: ' 0.1s',
              }}
              activeClassName='active'
              className='nav-link '
              to='/temporada'
            >
              Temporada
            </NavLink>
          </ul>
          <ul className='navbar-nav'>
            <NavLink
              activeStyle={{
                fontWeight: 400,
                transition: ' 0.1s',
              }}
              activeClassName='active'
              className='nav-link '
              to='/personalizado'
            >
              Personalizados
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: 400,
                transition: ' 0.1s',
              }}
              activeClassName='active'
              className='nav-link '
              to='/carrito-de-compras'
            >
              Carrito
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
