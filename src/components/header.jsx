import React, { useState } from 'react';
import Logo from '../assets/logo.png'
import HeaderIcon1 from '../assets/header_icon.png'
import HeaderIcon2 from '../assets/header_icon2.png'
import Logo1 from '../assets/logo1.png'



function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  const handleCloseClick = () => {
    setIsActive(false);
  };

  return (
    <header className="header">
      <a className="header__logo logo">
        <img src={Logo} width="222" height="40" alt="Shopiy logo" />
      </a>

      <div className="burger-menu" onClick={handleBurgerClick}>
        <div className="burger-button">
          <span></span>
        </div>
      </div>

      <nav className={`header-navigation navigation ${isActive ? 'header-navigation-active header-footer' : ''}`}>
        <button className="close__button" onClick={handleCloseClick}>Close</button>
        <img className="logo__i" src={Logo1} width="222" height="40" alt="Shopiy logo" style={{display: isActive ? 'initial' : 'none'}} />

        <ul className="header-navigation__list navigation__list" style={{minWidth: isActive ? '300px' : '0', marginTop: isActive ? '100px' : '0'}}>
          <li className="header-navigation__item navigation__item header-about">
            <a className="header-navigation__link navigation__link hoverable" href="#work">ABOUT US</a>
          </li>

          <li className="header-navigation__item navigation__item">
            <a className="header-navigation__link navigation__link" href="#telegram">TELEGRAM SYSTEM</a>
          </li>

          <li className="header-navigation__item navigation__item">
            <a className="header-navigation__link navigation__link" href="#promotion">PROMOTION</a>
          </li>

          <li className="header-navigation__item navigation__item">
            <a className="header-navigation__link navigation__link" href="#models">Account managing</a>
          </li>

          <li className="header-navigation__item navigation__item">
            <a className="header-navigation__link navigation__link" href="#case">CASES 💋</a>
          </li>
        </ul>

        <div className={`header-footer ${isActive ? '' : 'hidden'}`}>
          <h1>X-xxx-xxx-xx-xx</h1>
          <img src={HeaderIcon1} />
          <img src={HeaderIcon2} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
