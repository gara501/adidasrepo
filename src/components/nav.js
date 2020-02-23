import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../Images/logo.svg';
import Search from './search';
import Login from './login';


const Nav = () => {
    return(
        <nav>
            <div className="container-full bg-gradient">
                <div className="container-short container-nav nav1">
                    <ul>
                        <li>
                            <a href="#">ALSO VISIT REBOOK</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                        <li>
                            <a href="#">Order tracker and returns</a>
                        </li>
                        <li>
                            <a href="#" className="bold">join creators club</a>
                        </li>
                        <li>
                            <a href="#">creators club</a>
                        </li>
                    </ul>
                    <Login />
                </div>
            </div>
            <div className="container-full bg-black">
                <div className="container-short container-nav nav2">
                
                    <img src={Logo} className="logo" alt="Logo Adidas" />
                    <ul>
                        <li>
                            <a href="#">Men women kids</a>
                        </li>
                        <li>
                            <a href="#">sports brands</a>
                        </li>
                        <li>
                            <Link to="/checkout">Checkout</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                    <Search />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
