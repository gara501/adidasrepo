import React from 'react';


const Search = ({options}) => {
    return(
        <div className="search-module">
        <div className="search-module__input">
          <i className="material-icons">search</i>
          <input type="text" name="search" placeholder="Search"></input>
        </div>
          
          <div className="shopping">
            <i className="material-icons">
            work
            </i>
          </div>
        </div>
    );
}

export default Search;
