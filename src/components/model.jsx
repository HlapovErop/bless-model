import React from 'react';
import Product from '../assets/image13.png'

function Model() {
  return (
    <section className="model">
      <div className="container">
        <a name="models"></a>
        <img className="model__foto foto1111" src={Product} alt="Product foto" />
        <h2 className="model__ph">FULL RANGE OF SERVICES FOR SOCIAL NETWORK MANAGEMENT, AS WELL AS VIDEO MAKERS WORK AND CONTENT CREATION</h2>
        <h2 className="model-header__subject model__t">MODELS ACCOUNT MANAGEMENT</h2>
      </div>
    </section>
  );
}

export default Model;
