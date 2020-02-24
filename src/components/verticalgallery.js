import React from 'react';


const VerticalGallery = ({images}) => {
    return(
        <div className="vertical-gallery">
          { images.map((item, index) => (
            <img key={index} src={item} alt="Item Detail" />
          )) }
          <div className="icon-more">
            <div className="expand">
              <i className="material-icons">
                expand_more
              </i>
            </div>
          </div>
        </div>
    );
}

export default VerticalGallery;
