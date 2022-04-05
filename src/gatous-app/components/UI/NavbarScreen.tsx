import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavbarScreen = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
      <Container>
        <Navbar.Brand href='#home'>Gatous-bakery</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink className='nav-link' to='/'>
              Inicio
            </NavLink>
            <NavLink className='nav-link' to='/cakes'>
              Cakes
            </NavLink>
            <NavLink className='nav-link' to='/pasteles'>
              Pasteles
            </NavLink>
            <NavLink className='nav-link' to='/temporada'>
              Pasteles Por Temporada
            </NavLink>
          </Nav>
          <Nav>
            <NavLink className='nav-link' to='/personalizado'>
              Personalizados
            </NavLink>
            <NavLink className='nav-link' to='/carrito-de-compras'>
              Carrito
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
