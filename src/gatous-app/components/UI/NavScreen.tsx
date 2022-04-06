import { BsClock, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

export const NavScreen = () => {
  return (
    <>
      <ul className='nav '>
        <li className='nav-item '>
          <a className='nav-link text-primary ' aria-current='page' href='#'>
            <BsClock /> Lun - Dom 9:00 - 20:00
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link text-primary'
            href='https://api.whatsapp.com/send?phone=+528127688513'
            rel='noopener noreferrer'
            target='_blank'
          >
            <BsWhatsapp /> Whatsapp
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-primary' href='#'>
            <BsInstagram /> Instagram
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-primary '>
            <BsFacebook /> Facebook
          </a>
        </li>
      </ul>

      {/* <nav className='d-flex justify-content-around'>
        <Nav.Item as='li'>
          <Nav.Link href='/#'>
            <BsClock /> Lun - Dom 9:00 - 20:00
          </Nav.Link>
        </Nav.Item>

        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip>Whatsapp</Tooltip>}
        >
          <Nav.Item as='li' className='mx-3'>
            <Nav.Link
              className='text-success'
              eventKey='https://api.whatsapp.com/send?phone=+528127688513'
              href='https://api.whatsapp.com/send?phone=+528127688513'
              target='_blank'
            >
              <BsWhatsapp />
            </Nav.Link>
          </Nav.Item>
        </OverlayTrigger>

        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip>Instagram</Tooltip>}
        >
          <Nav.Item as='li' className='mx-2 '>
            <Nav.Link
              eventKey='https://www.instagram.com/gatousbakery/'
              href='https://www.instagram.com/gatousbakery/'
              target='_blank'
            >
              <BsInstagram />
            </Nav.Link>
          </Nav.Item>
        </OverlayTrigger>

        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip>Facebook</Tooltip>}
        >
          <Nav.Item as='li' className='mx-2'>
            <Nav.Link
              eventKey='https://www.facebook.com/GatousBakery'
              href='https://www.facebook.com/GatousBakery'
              target='_blank'
            >
              <BsFacebook />
            </Nav.Link>
          </Nav.Item>
        </OverlayTrigger>
      </nav> */}
    </>
  );
};
