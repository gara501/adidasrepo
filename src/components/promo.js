import React, { useState, useRef } from 'react';
import Button from './button';

const Promo = () => {

  const promoRef = useRef();
  const [haveText, setHaveText] = useState(false);
  

  const handlerFocus = (e) => {
    const itemLabel = promoRef.current.querySelector('label');
    const icon = promoRef.current.querySelector('i');  
    itemLabel.classList.add('label-move');
    icon.classList.add('hidden');
  }

  const handlerBlur = () => {
    if (!haveText) {
      const itemLabel = promoRef.current.querySelector('label');
      const icon = promoRef.current.querySelector('i');
      itemLabel.classList.remove('label-move');
      icon.classList.remove('hidden');
    }
    
  }

  const handlerChange = (e) => {
    if (e.target.value.length > 0) {
      setHaveText(true);
    } else {
      setHaveText(false);
    }
    
  }

  return(
      <>
      <div className="promo-code" ref={promoRef}>
        <input type="text" name="promo" onFocus={handlerFocus} onChange={handlerChange} onBlur={handlerBlur} ></input>
        <label>enter your promo code</label>
        <i className="material-icons">close</i>
      </div>
      {haveText && <Button theme='dark' text='apply' /> }
      </>
  );
}

export default Promo;
