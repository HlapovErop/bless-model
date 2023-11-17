import React from 'react';
import Img1 from '../assets/image7.png'
import Img2 from '../assets/image8.png'
import Btn from '../assets/button2.png'

function Work() {
  return (
    <section className="work container">
      <div className="work__/assets">
        <img className="work__foto foto11" src={Img1} alt="Product foto" />
        <img className="work__foto foto22" src={Img2} alt="Product foto" />
      </div>

      <div className="work__content">
        <div className="section-header section-header-product">
          <h2 className="section-header__subject product__subject">HOW IT WORK</h2>	
        </div>
        <a name="work"></a>
        <ul className="work-avaliable__list">
          <li className="work-avaliable__item list1">
            <h3 className="work-avaliable__subject">STEP 1</h3>
            <p className="work_txt">CONNECT TO OUR ADMIN SYSTEM ON TELEGRAM</p>
          </li>
          <li className="work-avaliable__item list2">
            <h3 className="work-avaliable__subject">STEP 2</h3>
            <p className="work_txt">POST PRIVATE CONTENT</p>
          </li>
          <li className="work-avaliable__item list3">
            <h3 className="work-avaliable__subject">STEP 3</h3>
            <p className="work_txt">GET PAID FOR IT</p>
          </li>
        </ul>

        <a href="#contact"><img className="img_btn" src={Btn} width="380" height="57" alt="Check mark" /></a>
      </div>
    </section>
  );
}

export default Work;
