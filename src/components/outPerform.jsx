import React from 'react';
import Per from '../assets/image12.png'

function OutPerform() {
  return (
    <section className="out-perfom container">
      <div className="out__container">
        <div className="section-header__out-perfom">
          <h2 className='out__h2'>LEAVE A REQUEST AND<br />WE WILL CONTACT YOU</h2>
        </div>

        <form id="contact-form">
          <label htmlFor="name">NAME</label><br />
          <input type="text" id="name" name="user_name" required /><br />
          
          <label htmlFor="phone">PHONE</label><br />
          <div className="form__container">
            <input type="number" id="phone" name="user_phone" required /><br />
            <a name="contact"></a>
            <button className="btn__f" type="submit">SEND</button>
          </div>
        </form>
      </div>

      <div className="out-perfom__/assets-wrapper">
        <img className="out-perfom__foto" src={Per} alt="Man holding a tablet" />
      </div>
    </section>
  );
}

export default OutPerform;
