import React from 'react';
import Img from '../assets/image6.png'

function Telegram() {
  return (
    <section id="telegram">
      <div className="container">
        <div className="telegram__assets">
          <img className="telegram__foto foto4" src={Img} alt="Product foto" />
        </div>

        <div className="telegram__content">
          {/* <div className="telegram-header-product"> */}
            <h2 className="telegram-header__subject">TELEGRAM SYSTEM</h2>
          {/* </div> */}
          <a name="telegram"></a>
          <ul className="telegram-avaliable__list">
            {/* <p>A BOT FOR MODELS THAT</p> */}
            <li className="product-avaliable__item">
              <h3 className="telegram-avaliable__subject">HELPS TRACK INCOME SOURSES</h3>
            </li>

            <li className="product-avaliable__item">
              <h3 className="telegram-avaliable__subject">SHOWS ADVERTISING STATISTICS AND CHANNELS IN WHICH IT IS PURSHASED</h3>
            </li>

            <li className="product-avaliable__item">
              <h3 className="telegram-avaliable__subject">TRACKS EARNINGS</h3>
            </li>
          </ul>
          {/* <div className="telegram__asset"> */}
          <img className="telegram__foto telegram__asset foto4" src={Img} alt="Product foto" />
        {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default Telegram;
