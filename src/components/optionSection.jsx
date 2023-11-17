import React from 'react';

function OptionSection() {
  return (
    <section id="opt-section">
      <div className="container">
        <h1 className="option__title">COOPERATION OPTIONS</h1>
        <div className="opt-wrap">
          <div className="option optes" href="#">
            <h3 className="opt__title">NOVICE</h3>
            <ul className="opt__list ">
              <li className="opt__item option-avaliable__subject">SELLING PRIVATE MATERIALS WITH A SERVICE FEE PAYMENT</li>
              <li className="opt__item option-avaliable__subject item__list">CONNECTION TO THE BLESS MODEL SYSTEM FOR MONITORING TRAFFIC OF ADVERTISING CHANNELS</li>
              <li className="opt__item item__list">POSSIBILITY OF PAYMENT FOR PROMOTION FROM THE MODEL'S SYSTEM ACCOUNT</li>
              <li className="opt__item item__list">SUPPORT CHAT WITH A PERSONAL MANAGER</li>
            </ul>
          </div>
          <div className="option opts" href="#">
            <h3 className="opt__title">STANDARD</h3>
            <ul className="opt__list">
              <li className="opt__item">SELLING PRIVATE MATERIALS WITH A SERVICE FEE PAYMENT</li>
              <li className="opt__item">CONNECTION TO THE BLESS MODEL SYSTEM FOR MONITORING TRAFFIC OF ADVERTISING CHANNELS</li>
              <li className="opt__item item__list">POSSIBILITY OF PAYMENT FOR PROMOTION FROM THE MODEL'S SYSTEM ACCOUNT</li>
              <li className="opt__item item__list">SUPPORT CHAT WITH A PERSONAL MANAGER</li>
            </ul>
          </div>
          <div className="option opt__obj" href="#">
            <h3 className="opt__title">BLESS MODEL ELITE</h3>
            <ul className="opt__list">
              <li className="opt__item">SELLING PRIVATE MATERIALS WITH A SERVICE FEE PAYMENT</li>
              <li className="opt__item">CONNECTION TO THE BLESS MODEL SYSTEM FOR MONITORING TRAFFIC OF ADVERTISING CHANNELS</li>
              <li className="opt__item">POSSIBILITY OF PAYMENT FOR PROMOTION FROM THE MODEL'S SYSTEM ACCOUNT</li>
              <li className="opt__item">SUPPORT CHAT WITH A PERSONAL MANAGER</li>
            </ul>
          </div>
          <div className="opt__ref">
            <p className="opt_rf">Referral system:<br />With each new model brought to our system, the percentage that the bot takes from the inviting model decreases. Decrease up to 5%</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default OptionSection;
