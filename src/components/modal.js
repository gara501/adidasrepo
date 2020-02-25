import React from 'react';
import Button from './button';

const Modal = (props) => {
    const {showModal, closeModal, product} = props;
    
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
                      <img src={product.image.src} alt={product.image.alt} ></img>
                      <div className="modal--product-left-info">
                        <h4>{product.name}</h4>
                        <span className="modal--price">{product.value}</span>
                        <span>Color: {product.color}</span>
                        <span>Size: {product.size}</span>
                        <span>Quantity: {product.quantity}</span>
                      </div>
                    </div>
                    <div className="modal--product-right">
                      <h5 className="title-available">Your Bag</h5>
                      <div className="modal--product-bag-price">
                        <div className="bag-block">7 Items</div>
                        <div className="bag-block">
                          <span>Total Product Cost:</span><span>$910</span>
                        </div>
                        <div className="bag-block">
                          <span>Total Delivery Cost: </span><span>FREE</span>
                        </div>
                      </div>
                      <div className="modal--product-bag-total">
                        <div className="bag-block bag-total">
                          <span className="bold">Total:</span><span className="bold total">$1040.00</span>
                        </div>
                        <div className="bag-blockv">
                          <span>Installment options</span>
                          <p>Prefer to spread out the payment? Select ‘Affirm’ at checkout to pay in 3 interest-free installments of $303.34</p>
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
