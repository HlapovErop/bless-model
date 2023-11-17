import React from 'react';
import Obj1 from '../assets/image1.png'
import Obj2 from '../assets/image2.png'
import Obj3 from '../assets/image3.png'
import Btn from '../assets/button.svg'

function ServiceSection() {
  return (
    <section id="service-section">
      <div className="container">
        <h1 className="section__title">START EARNING AND STOP GIVING AWAY 40% OF INCOME TO OTHER SERVISES</h1>
        <div className="service-wrap">
          <a className="service" href="#telegram">
            <object className="service__img hoverable" data={Obj1}></object>
            <h3 className="service__title">TELEGRAM SYSTEM</h3>
            <img className="serv__img" src={Btn} width="138" height="38" alt="Check mark" />
          </a>
          <a className="service" href="#promotion">
            <object className="service__img" data={Obj2}></object>
            <h3 className="service__title">PROMOTION AND ADVERTISING SETTINGS FOR MODELS</h3>
            <img className="serv__img" src={Btn} width="138" height="38" alt="Check mark" />
          </a>
          <a className="service" href="#models">
            <object className="service__img" data={Obj3}></object>
            <h3 className="service__title">MODELS ACCOUNT MANAGEMENT</h3>
            <img className="serv__img" src={Btn} width="138" height="38" alt="Check mark" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
