import React from 'react';
import CheckoutButtons from '../components/checkoutButtons';
import ItemCheckout from '../components/itemcheckout';
import Summary from '../components/summary';

const Bag = () => {
    return(
        <div className="checkout">
            <div className="container-short container-checkout">
                <h1 className="title-checkout">Your bag</h1>
                <p className="checkout-total">TOTAL: (11 items) <span>$1,430</span></p>
                <div className="checkout-detail">
                    <div className="checkout-items">
                        <ItemCheckout item={{src:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/c103b488d08d4fd78e9ea8fe0100ecbb_9366/B37649_570_01_standard.jpg?sh=364&strip=false&sw=364', alt:'nada'}} />
                        <ItemCheckout item={{src:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/c103b488d08d4fd78e9ea8fe0100ecbb_9366/B37649_570_01_standard.jpg?sh=364&strip=false&sw=364', alt:'nada'}} />
                        <div className="checkout-payment-horizontal">
                            <CheckoutButtons orientation="horizontal" />
                        </div>
                    </div>
                    <div className="checkout-payment">
                        <CheckoutButtons orientation="vertical" />
                        <Summary />
                    </div>
                </div>
            </div>    
        </div>
        
    );
}

export default Bag;
