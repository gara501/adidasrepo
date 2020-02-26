import React from 'react';
import Button from './button';

const Modal = (props) => {
    const {showModal, closeModal, dispatch, state} = props;

    console.log('MODAL STATE', state);
    const totalValue = Math.round(state.quantity * state.product.pricing_information.currentPrice).toFixed(2);
    const payments = Math.round(totalValue / 3).toFixed(2);

    return(
        <div className={showModal ? 'overlay': ''}>
          <div className={showModal ? 'modal modal__show': 'modal__hide'}>
              <button className="modal--button-close" onClick={closeModal}><i className="material-icons">
              close
              </i></button>
              <div className="modal--content">
                  <h1>SUCCESSFULLY ADDED TO BAG!</h1>
                  <div className="modal--product-data">
                    <div className="modal--product-left">
                      <img src={state.product.product_description.description_assets.image_url} alt='product' />
                      <div className="modal--product-left-info">
                        <h4>{state.product.name}</h4>
                        <span className="modal--price">${state.product.pricing_information.currentPrice}</span>
                        <span>Color: {state.product.attribute_list.color}</span>
                        <span>Size: {state.size}</span>
                        <span>Quantity: {state.quantity}</span>
                      </div>
                    </div>
                    <div className="modal--product-right">
                      <h5 className="title-available">Your Bag</h5>
                      <div className="modal--product-bag-price">
                        <div className="bag-block">{state.quantity} Items</div>
                        <div className="bag-block">
                          <span>Total Product Cost:</span><span>${totalValue}</span>
                        </div>
                        <div className="bag-block">
                          <span>Total Delivery Cost: </span><span>FREE</span>
                        </div>
                      </div>
                      <div className="modal--product-bag-total">
                        <div className="bag-block bag-total">
                          <span className="bold">Total:</span><span className="bold total">${totalValue}</span>
                        </div>
                        <div className="bag-blockv">
                          <span>Installment options</span>
                          <p>Prefer to spread out the payment? Select ‘Affirm’ at checkout to pay in 3 interest-free installments of ${payments}</p>
                        </div>
                        <div className="bag-buttons">
                          <Button theme='dark' text='add to bag' />
                          <Button theme='light' text='go to checkout' />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default Modal;
