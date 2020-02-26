import React from 'react';
import Promo from './promo';
import LinkCmp from './link';

const Summary = () => {
    return(
        <div className="summary-component">
          <div className="summary">
            <h2 className="title-available">order summary</h2>
            <div className="col-2">
              <span>1 item</span>
              <span>$220</span>
            </div>
            <div className="col-2">
              <span>Delivery</span>
              <span>free</span>
            </div>
            <div className="col-2">
              <span className="lowercase">Sales tax</span>
              <span className="lowercase">-</span>
            </div>
            <div className="col-2">
              <span className="bold">Total</span>
              <span className="bold summary-total">$220</span>
            </div>
          </div>
          <Promo />
          <div className="help">
            <h5 className="title-small">Need help?</h5>
            <LinkCmp href='#' text="Shipping" />
            <LinkCmp href='#' text="Returns & Exchanges" />
            <h5 className="title-small">Accepted payment methods</h5>
            <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/visa-master-amex-disc-pp-apple-affirm_tcm221-444412.png" alt="cards" />
          </div>
        </div>
    );
}

export default Summary;
