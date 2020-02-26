import React from 'react';
import LinkCmp from './link';

const Breadcrumb = ({items}) => {
    return(
        <div className="container-xl">
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
                <li><LinkCmp text='Home' href='/' /> <span>/</span></li>
                { items.map((item, index) => (
                    <li key={index}><LinkCmp text={item.text} href={item.link} /> {index === items.length-1 ? '':  <span>/</span>} </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default Breadcrumb;
