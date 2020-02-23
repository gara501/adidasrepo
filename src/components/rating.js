import React from 'react';

const Rating = ({stars}) => {
    return(
        <div>
        {stars.map(item => (
            <div className="star"></div>
        ))}
        </div>
    );
}

export default Rating;
