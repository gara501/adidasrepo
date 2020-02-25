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
            <div className="item-block separated-items"><a href="#">MDR1 SHOES</a><span>$1,170</span></div>
            <div className="item-block"><span>CLOUD WHITE / CLOUD WHITE / CRYSTAL WHITE</span></div>
            <div className="item-block"><span>Size:</span><span>6</span></div>
            <div className="item-block"><span>QTY: 9</span></div>
            <div className="item-checkout-buttons">
              <button onClick={removeItem} ><i class="material-icons">close</i></button>
              <button onClick={editItem} ><i class="material-icons">edit</i></button>
              <button onClick={likeItem} ><i class="material-icons">favorite_border</i></button>
            </div>
          </div>
        </div>
    );
}

export default ItemCheckout;
