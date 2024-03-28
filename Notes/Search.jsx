import React from "react";
import {MdSearch} from "react-icons/md"

const Search = ({handleSearch}) => {
    return <div className= "search">
    <MdSearch className="md-search" size= "16"/> 
    <input onChange= {(event) => handleSearch(event.target.value)} style={{backgroundColor:'#64b5f6'}} type="text" placeholder="Search" /> 
      </div>
}

export default Search;