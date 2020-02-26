import React from 'react';

const ItemCheckout = ({item}) => {

    const removeItem = () => {

    }

    const editItem = () => {

    }

    const likeItem = () => {

    }

    return(
        <div className="item-checkout">
          <img src={item.src} alt={item.alt} />
          <div className="item-checkout-info">
            <div className="col-2"><a href="#">MDR1 SHOES</a><span>$1,170</span></div>
            <div><span>CLOUD WHITE / CLOUD WHITE / CRYSTAL WHITE</span></div>
            <div><span>Size:</span><span>6</span></div>
            <div><span>QTY: 9</span></div>
            <div className="item-checkout-buttons">
              <button onClick={removeItem} ><i className="material-icons">close</i></button>
              <button onClick={editItem} ><i className="material-icons">edit</i></button>
              <button onClick={likeItem} ><i className="material-icons">favorite_border</i></button>
            </div>
          </div>
        </div>
    );
}

export default ItemCheckout;
