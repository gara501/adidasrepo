import React, { useContext } from 'react';
import { Context } from '../store';
import ListSizes from './listSizes';
import Button from './button';
import Like from './like';
import LinkBase from './link';

const ItemCart = () => {
    
    const { state, dispatch} = useContext(Context);

    const showModal = () => {
      dispatch({type: 'OPEN_MODAL', payload: 'open'});
    }  

    return(
      <div className="itemcart container-block">
        <div className="ruler">
          <LinkBase href="#" icon="straighten" text="Size Guide" />          
        </div>
        <div className="lists">
          <ListSizes options={state.availability.variation_list} quantity={state.quantity} size={state.size} title="US - Women size" category='complex' dispatch={dispatch}  />
          <ListSizes options={state.elements} quantity={state.quantity} size={state.size} category='simple' dispatch={dispatch} />
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
