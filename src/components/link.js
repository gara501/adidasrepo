import React from 'react';

const Link = ({href, text, icon, extraclass}) => {
    return(
        <>
            {icon && <div className="link--icon">
                <i className="material-icons">
                    {icon}
                </i>
                <a href={href} className={extraclass + " link--base"}>{text}</a>
            </div>}

            {!icon && <a href={href} className={extraclass + " link--base"}>{text}</a>}
        </>
    );
}

export default Link;
