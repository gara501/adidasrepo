import React from 'react';

const List = ({options}) => {
    return(
        <select>
            {options.map(item => (
                <option value={item.value}>{item.text}</option>
            ))}
        </select>
    );
}

export default List;
