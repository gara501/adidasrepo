import React, { useContext } from 'react';
import { Context } from '../store';
import VerticalGallery from '../components/verticalgallery';
import Info from '../components/info';
import Available from '../components/available';
import ItemCart from '../components/itemcart';
import Breadcrumb from '../components/breadcrumb';
import Loading from '../components/loading';


const Product = ({ product, currentImage }) => {
    const { state, dispatch} = useContext(Context);

    return(
        <>
            { Object.keys(product).length <= 0 ? <Loading /> : <Breadcrumb items={product.breadcrumb_list} /> }  
            <div className="layout">
                
                <div className="shoes">
                
                { Object.keys(product).length <= 0 ? <Loading /> : <VerticalGallery images={product.view_list} /> }
                </div>
                <div className="bigshoes">
                    { Object.keys(product).length <= 0 ? <Loading /> : <img src={currentImage} alt="data" /> }  
                    
                </div>
                <div className="detailshoes">
                    { Object.keys(product).length <= 0 ? <Loading /> : <Available product={product} /> }  
                    
                </div>
                <div className="infoshoes">
                    { Object.keys(product).length <= 0 ? <Loading /> : <Info product={product} /> }  
                </div>
                <div className="configproduct">
                    { Object.keys(state.availability).length <= 0 || Object.keys(state).length <= 0 ? <Loading /> : <ItemCart /> }  
                </div>
                <div className="look">
                    
                </div>
            </div>
        </>
    );
    
    
}

export default Product;
