import React from 'react';


const Search = ({options}) => {
    return(
        <div className="search-module">
        <div className="search-module__input">
          <i class="material-icons">search</i>
          <input type="text" name="search" placeholder="Search"></input>
        </div>
          
          <div className="shopping">
            <i class="material-icons">
            work
            </i>
          </div>
        </div>
    );
}

export default Search;
