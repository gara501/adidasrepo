import React from 'react';


const VerticalGallery = ({images, dispatch}) => {

    const setImage = (e) => {
      e.preventDefault();
      dispatch({type: 'SET_IMAGE', payload: e.target.src})
    }

    return(
        <div className="vertical-gallery">
          { images.map((item, index) => (
            <img key={index} src={item.image_url} onClick={setImage} alt="Item Detail" />
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
