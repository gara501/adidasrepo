import React, { useState, useRef, useEffect } from 'react';

const ListSizes = ({options, size, quantity, title, category, dispatch}) => {

    const [open, setOpen] = useState('closed');
    const [data, setData] = useState([]);

    useEffect(() => {
        filterData();
    }, []);

    
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
        e.preventDefault();
        
        setOpen('closed');
        
        const buttons = buttonsRef.current.querySelectorAll('button');
        buttons.forEach(item => {
            item.classList.remove('selected-size');
        })
        
        e.target.classList.add('selected-size');

        if (category === 'complex') {
            dispatch({type: 'SET_ELEMENTS', payload: e.target.dataset.total})
            dispatch({type: 'SET_SIZE', payload: e.target.innerText})
        } else {
            dispatch({type: 'SET_QUANTITY', payload: e.target.innerText})
        }
        
    }

    const filterData = () => {
        let localData = [];

        if (category === 'complex') {
            localData = options.map(item => {
                return { id: item.sku, text: item.size, total: item.availability, available: item.availability_status };
            });
        } else {
            const tempData = Array.from({length: options}, (v, k) => k+1);
            localData = tempData.map(item => {
                return { id: item, text: item, total: '', available: '' };
            });
        }
        
        setData(localData);
    }

    

    return(
        <div className="listsizes">
            <div className={open + " list--item"}>
                <a href="#" className="select--action" onClick={toggleList}>
                {category === 'complex' ? size : quantity }
                <i className="material-icons">expand_more</i></a>
            </div>
            <div className={category + " list--options"}>
                {title ? <p>{title}</p>: ''}
                
                <div ref={buttonsRef} className={category + " list--options-items"}>

                    {data.map((item, index) => (
                        <button key={index} data-total={item.total} data-available={item.available} value={item.id} onClick={selectValue}>{item.text}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListSizes;
