import React from 'react';

const Available = ({ colors }) => {
    return(
        <div className="available">
            <h5 className="title-available">Available Colors</h5>
            <ul className="available--tags">
              <li><span>cloud  white</span><span>/</span></li>
              <li><span>core black</span><span>/</span></li>
              <li><span>crystal  white</span></li>
            </ul>
            <div className="available--colors">
              {colors.map((item, index) => (
                <div key={index} className="available--item">
                  { index === 4 ?  
                    <div className="item-cover">
                      <div className="item--selected">
                        <img src={item} alt="item" />
                        <div className="item--check"><i className="material-icons">check</i></div>
                      </div>
                    </div> : 
                    <div className="item-cover">
                      <img src={item} alt="item" />
                    </div>
                  }
                </div>
              ))}
            </div>
        </div>
    );
}

export default Available;
