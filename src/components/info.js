import React from 'react';
import Rating from './rating';

const Info = () => {
    return(
      <div className="info">
        <div className="info--rating">
          <Rating stars={3} />
          <a href="#" >Read all 33 reviews</a>
        </div>
        <div className="info--titles">
          <h3 className="subtitle-product">Women's Originals</h3>
          <h2 className="title-product">NMD SHOES</h2>
        </div>
        <p><span className="value">$130</span>
        or 3 interest-free payments of<span className="bold"> $43.34 </span> with Affirm.
        </p>
        <a href="#">Learn more</a>

      </div>
    );
}

export default Info;
