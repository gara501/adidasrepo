import React from 'react';
import PaypalImage from '../Images/paypal.svg';

const Button = ({theme, text, action}) => {

    const handlerClick = (e) => {
        action();
    }

    return(
        <button className={theme + ' button'} onClick={handlerClick}>{text}
            {theme === 'paypal'? <><img src={PaypalImage} alt="paypal" /><i className="material-icons">keyboard_backspace</i></>: <i className="material-icons">keyboard_backspace</i>}
        </button>
    );
}

export default Button;
