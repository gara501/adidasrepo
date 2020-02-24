import React from 'react';

const Rating = ({stars}) => {

    const maxRate = 5;
    let starsArray = [];

    console.log(stars);

    for (let i=0; i<= maxRate-1; i++) {
        if (i < stars) {
            starsArray.push(1);
        } else {
            starsArray.push(0);
        }
    }
    

    return(
        <div className="rating">
        {starsArray.map((item, index) => (
            item === 0 ? <i key={index} className="material-icons">
            star_border
            </i> : <i key={index} className="material-icons">
            star
            </i>
        ))}
        </div>
    );
}

export default Rating;
