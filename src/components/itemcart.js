import React from 'react';
import ListSizes from './listSizes';
import Button from './button';
import Like from './like';
import LinkBase from './link';

const ItemCart = ({ dispatch }) => {

    const showModal = () => {
      dispatch({type: 'OPEN_MODAL', payload: 'open'});
    }

    return(
      <div className="itemcart container-block">
        <div className="ruler">
          <LinkBase href="#" icon="straighten" text="Size Guide" />          
        </div>
        <div className="lists">
          <ListSizes options={[2,3,4,7.5, 7.7, 12]} title="US - Women size" category='complex'  />
          <ListSizes options={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]} category='simple' />
        </div>
        <div className="action-buttons">
          <Button theme='dark' text='add to bag' action={showModal} />
          <Like />
        </div>
        <div className="shipping-links">
          <LinkBase href="#" icon="airport_shuttle" text="Free shipping over $49 + free returns & exchanges" extraclass="uppercase" />
          <LinkBase href="#" icon="done" text="Buy now, pay over time with PayPal CREDIT" />          
        </div>
      </div>
    );
}

export default ItemCart;
