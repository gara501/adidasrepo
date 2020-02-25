import React from 'react';
import Button from './button';

const CheckoutButtons = ({orientation}) => {

    return(
      <div className={orientation + " checkout-buttons--template"}>
        <Button theme='dark' text='go to checkout' />
        <span>OR</span>
        <Button theme='paypal' text='' />
      </div>
    );
}

export default CheckoutButtons;
