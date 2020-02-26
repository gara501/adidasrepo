import React, {useContext} from 'react';
import VerticalGallery from '../components/verticalgallery';
import Info from '../components/info';
import Available from '../components/available';
import ItemCart from '../components/itemcart';
import Breadcrumb from '../components/breadcrumb';


const Product = ({ dispatch, product, currentImage, state }) => {
    console.log('STATE IN PRODUCTS', state);

    return(
        <>
            { Object.keys(product).length <= 0 ? <h2>Loading...</h2>: <Breadcrumb items={product.breadcrumb_list} /> }  
            <div className="layout">
                
                <div className="shoes">
                
                { Object.keys(product).length <= 0 ? <h2>Loading...</h2>: <VerticalGallery dispatch={dispatch} images={product.view_list} /> }  
                </div>
                <div className="bigshoes">
                    { Object.keys(product).length <= 0 ? <h2>Loading...</h2>: <img src={currentImage} alt="data" /> }  
                    
                </div>
                <div className="detailshoes">
                    { Object.keys(product).length <= 0 ? <h2>Loading...</h2>: <Available product={product} /> }  
                    
                </div>
                <div className="infoshoes">
                    { Object.keys(product).length <= 0 ? <h2>Loading...</h2>: <Info product={product} /> }  
                </div>
                <div className="configproduct">
                    { Object.keys(state.availability).length <= 0 || Object.keys(state).length <= 0 ? <h2>Loading...</h2> : <ItemCart dispatch={dispatch} state={state}  /> }  
                </div>
                <div className="look">
                    
                </div>
            </div>
        </>
    );
    
    
}

export default Product;
