import React, { useState, useRef } from 'react';

const Available = ({ product, dispatch }) => {

    const itemRef = useRef();

    const changeProduct = (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log('target', e.target);
      e.target.classList.add('item--selected');
      console.log('ITEM REF', itemRef.current)
      //setSelected('item--selected');
      
      
    }

    return(
        <div className="available container-block">
            <h5 className="title-available">Available Colors</h5>
              <p>{product.attribute_list.color}</p>
            <div className="available--colors">
              {product.product_link_list.map((item, index) => (
                <div key={index} ref={itemRef} id={item.productId} className="available--item" onClick={changeProduct}>
                  <div className="item-cover">
                    <img src={item.image} alt={item.altImage} />
                    <div className="item--check"><i className="material-icons">check</i></div>
                  </div>                  
                </div>
              ))}
            </div>
        </div>
    );
}

export default Available;
