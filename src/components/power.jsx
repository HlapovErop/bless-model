import React from 'react';
import Pow1 from '../assets/image.jpg'
import Pow2 from '../assets/cube-icon.svg'


function Power() {
  return (
    <section className="power container">
      <div className="powered">
      <div className="power__assets-wrappers">
        <img className="power__illustration" src={Pow1} alt="Photo of a man" />
      </div>
      <div className="power__text-content">
        <div className="power__text-content__inner">
          <div className="section-header section-power">
            <h1 className="section-header__subject power__subject">IT IS BLESS MODEL !</h1>
            <p className="section-header__subtitle power__suptitle">We help models to progress and earn more with the Telegram system</p>
                        <div className="power__assets-wrapper">
        <img className="power__illustration" src={Pow1} alt="Photo of a man" />
      </div>
          </div>
          
          <ul className="power-available__list">
            <li className="power-available__item">
              <a href="#contact"><button className="contact">CONTACT</button></a>
            </li>

            <li className="power-available__item">
              <a href="#contact"><button className="contact">CONTACT</button></a>
            </li>
          </ul>

        </div>
      </div>
      </div>
      
    </section>
  );
}

export default Power;
