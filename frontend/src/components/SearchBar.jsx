import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addSearchList } from "../store/placeSlice";
import { Link } from "react-router-dom";
import apiCall from "../api";

const SearchBar = ({ className }) => {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const searchData = useSelector((state) => state.place.searchData);

  const dispatch = useDispatch();

  const divRef = useRef(null);

  // while clicked outside the searchbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setResults([]);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    searchResult();
  }, [text]);

  function searchResult() {
    setResults([]);
    if (text != "") {
      let filteredData = searchData.filter((place) => {
        let title = place.title;
        if (title.toLowerCase().includes(text.toLowerCase())) return place;
      });
      filteredData = filteredData.slice(0, 6);
      setResults(filteredData);
    }
  }

  const fetchSearchList = async () => {
    if (searchData.length > 0) return;
    apiCall
      .fetchData("/place/getAllPlaceNameAndSlug")
      .then((data) => dispatch(addSearchList(data)))
      .catch((error) => console.log(error));
  };

  return (
    <div
      id="search-bar"
      onMouseEnter={fetchSearchList}
      className={`search-div ${className}`}
    >
      <form className={``} role="search">
        <div className="d-flex">
          <input
            className="form-control me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            onClick={searchResult}
          />
          <button className="btn btn-outline-success" type="submit">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/search-results/${text}`}
            >
              {" "}
              <FaSearch />
            </Link>
          </button>
        </div>
      </form>
      <div ref={divRef} className="search-result">
        {results.map((result, index) => (
          <Link
            key={index}
            to={`/place/${result.slug}`}
            onClick={() => setResults([])}
            className="nav-link"
          >
            <p>{result.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
