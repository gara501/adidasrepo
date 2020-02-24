import React from 'react';
import Logo from '../Images/logo_black.svg';

const UspHeader = () => {
    return(
        <div className="uspheader">
            <div>
                <i className="material-icons">
                    airport_shuttle
                </i>
                <a href="#">Free shipping over $49 and free returns</a>
            </div>
            <div>
                <img src={Logo} className="logo" alt="Logo Adidas" />
                <a href="#">Join the adidas creator club</a>
            </div>
        </div>
    );
}

export default UspHeader;
