import React from 'react';
import VerticalGallery from '../components/verticalgallery';
import Info from '../components/info';
import Available from '../components/available';
import ItemCart from '../components/itemcart';

const Product = () => {

    let miniImages = [
        'https://assets.adidas.com/images/w_54,h_54,f_auto,q_auto:sensitive,fl_lossy/5d74fb5597854343ad3aab1b010fdadc_9366/NMD_R1_Shoes_White_FU9350_010_hover_standard.jpg',
        'https://assets.adidas.com/images/w_54,h_54,f_auto,q_auto:sensitive,fl_lossy/5d74fb5597854343ad3aab1b010fdadc_9366/NMD_R1_Shoes_White_FU9350_010_hover_standard.jpg',
        'https://assets.adidas.com/images/w_54,h_54,f_auto,q_auto:sensitive,fl_lossy/5d74fb5597854343ad3aab1b010fdadc_9366/NMD_R1_Shoes_White_FU9350_010_hover_standard.jpg',
        'https://assets.adidas.com/images/w_54,h_54,f_auto,q_auto:sensitive,fl_lossy/5d74fb5597854343ad3aab1b010fdadc_9366/NMD_R1_Shoes_White_FU9350_010_hover_standard.jpg',
        'https://assets.adidas.com/images/w_54,h_54,f_auto,q_auto:sensitive,fl_lossy/5d74fb5597854343ad3aab1b010fdadc_9366/NMD_R1_Shoes_White_FU9350_010_hover_standard.jpg',
        'https://assets.adidas.com/images/w_54,h_54,f_auto,q_auto:sensitive,fl_lossy/5d74fb5597854343ad3aab1b010fdadc_9366/NMD_R1_Shoes_White_FU9350_010_hover_standard.jpg',
        'https://assets.adidas.com/images/w_54,h_54,f_auto,q_auto:sensitive,fl_lossy/5d74fb5597854343ad3aab1b010fdadc_9366/NMD_R1_Shoes_White_FU9350_010_hover_standard.jpg',
        'https://assets.adidas.com/images/w_54,h_54,f_auto,q_auto:sensitive,fl_lossy/5d74fb5597854343ad3aab1b010fdadc_9366/NMD_R1_Shoes_White_FU9350_010_hover_standard.jpg',
        'https://assets.adidas.com/images/w_54,h_54,f_auto,q_auto:sensitive,fl_lossy/5d74fb5597854343ad3aab1b010fdadc_9366/NMD_R1_Shoes_White_FU9350_010_hover_standard.jpg',
        'https://assets.adidas.com/images/w_54,h_54,f_auto,q_auto:sensitive,fl_lossy/5d74fb5597854343ad3aab1b010fdadc_9366/NMD_R1_Shoes_White_FU9350_010_hover_standard.jpg',
    ];

    let colors = [
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg',
        'https://assets.adidas.com/images/w_100,h_100,f_auto,q_auto:sensitive,fl_lossy/3812a13b7e2d4cdebc75a97801224552_9366/NMD_R1_Shoes_Black_BD8026_01_standard.jpg'
    ]

    return(
        <div className="layout">
            <div className="shoes">
            <VerticalGallery images={miniImages} />
            </div>
            <div className="bigshoes">
                <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/b0be3a0d8ad54df59ad2ab2200f61552_9366/NMD_R1_Shoes_White_FU9350_01_standard.jpg" alt="Image" />
            </div>
            <div className="detailshoes">
                <Available colors={colors} />
            </div>
            <div className="infoshoes">
                <Info />
            </div>
            <div className="configproduct">
                <ItemCart />
            </div>
            <div className="look">
                <h2>Look</h2>
            </div>
        </div>
    );
}

export default Product;
