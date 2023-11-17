import React from 'react';
import Pro1 from '../assets/image9.png'
import Pro2 from '../assets/image10.png'
import Pro3 from '../assets/image11.png'


function Promotion() {
  return (
    <section className="promotion-container">
      <div className="promotion container">
        <div className="promotion__assets">
          <img className="product__foto foto111" src={Pro1} alt="Product foto" />
          <img className="product__foto foto222" src={Pro2} alt="Product foto" />
          <img className="product__foto foto333" src={Pro3} alt="Product foto" />
        </div>

        <div className="promotion__content">
          <div className="promotion-header promotion-header-product">
            <h2 className="promotion-header__subject promotion__subject">PROMOTION AND ADVERTISING SETTINGS FOR MODEL</h2>
          </div>

          <a name="promotion"></a>

          <ul className="promotion-avaliable__list">
            <li className="promotion-avaliable__item">
              TURNKEY MODEL PROMOTION
            </li>

            <li className="promotion-avaliable__item">
              OVER 150 SELECTED TELEGRAM CHANNELS WITH YOUR TERGET AUDIENCE
            </li>

            <li className="promotion-avaliable__item">
              YOUR ADVERTISING STRUCTURE
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
