import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { places } from "../data/data";

const SearchBar = ({className}) => {

  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  function searchResult(){
    setResults([])
 
    if(text != ""){
      let filteredData = places.filter((place)=>{
       return place.toLowerCase().includes(text.toLowerCase())
      });
     filteredData = filteredData.slice(0,6)     
      setResults(filteredData)
    }
  }

  return (
    <div className={`search-div ${className}`}>
    <form className={``} role="search">
      <div className="d-flex">
        <input
          className="form-control me-2 "
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          onKeyUp={(e)=>{searchResult(e)}}
          onClick={(e)=>{searchResult(e)}}
        />
        <button className="btn btn-outline-success" type="submit">
          <FaSearch />
        </button>
      </div>
    </form> 
    <div className="search-result">
        {
            results.map((result,index)=>(
                <p key={index}>{result}</p>
            ))
        }
      </div>
    </div>
  );
};

export default SearchBar;
