import React from 'react';
import Case from '../assets/image14.png';
import Case2 from '../assets/image15.png';

function CaseSection() {
  return (
    <section id="case-section">
      <div className="container">
        <h1 className="cases__title">CASES</h1>
        <div className="case-wrap">
          <a className="case" name="case">
            <object className="case__img" data={Case}></object>
            <div className="case__info">
              <h3 className="case__title">INSTAGRAM MODEL</h3>
              <p>3 THOUSAND SUBSCRIBERS → 15 THOUSAND SUBSCRIBERS</p>
            </div>
          </a>
          <a className="case">
            <object className="case__img" data={Case2}></object>
            <div className="case__info">
              <h3 className="case__title">ONLYFANS MODEL</h3>
              <p>3 THOUSAND SUBSCRIBERS → 15 THOUSAND SUBSCRIBERS</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CaseSection;
