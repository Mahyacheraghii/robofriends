import React from "react";

const SearchBox=({searchChange}) =>{
    return(
        <div className="pa2">
            <input className="pa3 ba b--blue bg-light-gray" type='search' placeholder="search Robots" onChange={searchChange}/>
        </div>
        
    );
}

export default SearchBox;