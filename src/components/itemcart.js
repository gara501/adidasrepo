import React from 'react';
import ListSizes from './listSizes';

const ItemCart = () => {
    return(
      <div className="itemcart">
        <div className="ruler">
          <i className="material-icons">straighten</i>
          <a href="#">Size Guide</a>
        </div>
        <div className="lists">
          <ListSizes options={[2,3,4,7.5, 7.7, 12]} title="US - Women size" category='complex'  />
          <ListSizes options={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]} category='simple' />
        </div>
      </div>
    );
}

export default ItemCart;
