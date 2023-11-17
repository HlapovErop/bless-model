import React from 'react';
import Footer1 from '../assets/header_icon.png';
import Footer2 from '../assets/header_icon2.png';
import Logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="footer">
      <a className="footer__logo logo">
        <img className="logo__footer" src={Logo} width="222" height="40" alt="Shopiy logo" />
        <h1 className="logo__text">BLESS MODEL</h1>
      </a>
      <div className="footer__t">
        <h1 className='footer__h1'>X-xxx-xxx-xx-xx</h1>
        <a className="ff" href="#">Privacy Policy</a>
      </div>
      <div className="footer__f">
        <img className='footer__img' src={Footer2} />
        <img className='footer__img' src={Footer1} />
      </div>
    </footer>
  );
}

export default Footer;
