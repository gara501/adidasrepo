import React, { useState, useRef } from 'react';

const ListSizes = ({options, title, category}) => {

    const [open, setOpen] = useState('closed');
    const [label, setLabel] = useState(category === 'simple'? 1 : 'Select size');
    const buttonsRef = useRef();
    
    const toggleList = (e) => {
        e.preventDefault();
        if (open === 'closed') {
            setOpen('open');
        } else {
            setOpen('closed');
        }
    }

    const selectValue = (e) => {
        const buttons = buttonsRef.current.querySelectorAll('button');
        setLabel(e.target.value)
        setOpen('closed');
        buttons.forEach(item => {
            item.classList.remove('selected-size');
        })
        //buttons.classList.remove('selected-size');
        e.target.classList.add('selected-size');
    }

    return(
        <div className="listsizes">
            <div className={open + " list--item"}>
                <a href="#" className="select--action" onClick={toggleList}>{label}<i className="material-icons">expand_more</i></a>
            </div>
            <div className={category + " list--options"}>
                {title ? <p>{title}</p>: ''}
                
                <div ref={buttonsRef} className={category + " list--options-items"}>
                    {options.map((item, index) => (
                        <button key={index} value={item} onClick={selectValue}>{item}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListSizes;
