import React from 'react';
import Pro1 from '../assets/image3.png'
import Pro2 from '../assets/image4.png'
import Pro3 from '../assets/image5.png'

function Product() {
  return (
    <section className="product container">
      {/* <div className="product__assets">
        <img className="product__foto foto1" src={Pro1} alt="Product foto" />
        <img className="product__foto foto2" src={Pro2} alt="Product foto" />
        <img className="product__foto foto3" src={Pro3} alt="Product foto" />
      </div> */}

{/* <div className="product__title">
          <h2 className="prod__h">ADVANTAGES</h2>
        </div> */}

      <div className="product__content">
      <div className="product__title">
          <h2 className="prod__h">ADVANTAGES</h2>
        </div>
        <div className="product__assets">
        <img className="product__foto foto1" src={Pro1} alt="Product foto" />
        <img className="product__foto foto2" src={Pro2} alt="Product foto" />
        <img className="product__foto foto3" src={Pro3} alt="Product foto" />
      </div>

        <ul className="product-avaliable__list">
          <li className="product-avaliable__item">
            <h3 className="product-avaliable__subject">LOW SERVICE FEE</h3>
          </li>

          <li className="product-avaliable__item">
            <h3 className="product-avaliable__subject">BEST PROMOTION STRATEGIES</h3>
          </li>

          <li className="product-avaliable__item">
            <h3 className="product-avaliable__subject">WE TAKE CARE OF THE TECHNICAL PART</h3>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Product;
