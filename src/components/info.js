import React from 'react';
import Rating from './rating';

const Info = ({product}) => {

    console.log('INFO', product)

    return(
      <div className="info container-block">
        <div className="info--rating">
          <Rating stars={3} />
          <a href="#" >Read all 33 reviews</a>
        </div>
        <div className="info--titles">
          <h3 className="subtitle-product">{product.attribute_list.brand}</h3>
          <h2 className="title-product">{product.name}</h2>
        </div>
        <p><span className="value">${product.pricing_information.currentPrice}</span>
        or 3 interest-free payments of<span className="bold"> ${Math.ceil(product.pricing_information.currentPrice/3)}</span> with Affirm.
        </p>
        <a href="#">Learn more</a>

      </div>
    );
}

export default Info;
