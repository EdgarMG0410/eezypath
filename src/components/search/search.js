import React from "react";
import './search.css';

function Search (/* {searchValue, setSearchValue} */) {

   /*  const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }; */
    return(
        <input 
        className="Search"
        /* value={searchValue}
        onChange={onSearchValueChange} */
        />
    );
}

export {Search};