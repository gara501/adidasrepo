import React from 'react';
import Logo from '../Images/logo_black.svg';

const Breadcrumb = () => {
    return(
        <div className="container-full">
            <div className="breadcrumb">
            <ul>
                <li>
                <div className="back">
                    <i className="material-icons arrow-left">
                        subdirectory_arrow_right
                    </i>
                    <a href="#">Back</a>
                </div>
                </li>
                <li><a href="#">Home</a><span>/</span></li>
                <li><a href="#">Original</a><span>/</span></li>
                <li><a href="#">Shoes</a></li>
            </ul>
            </div>
        </div>
    );
}

export default Breadcrumb;
