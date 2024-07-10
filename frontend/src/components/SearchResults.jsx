import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import apiCall from "../api";
import Loader from "./Loader";

const SearchResults = () => {
  const [searchCards, setSearchCards] = useState([])
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();
console.log(slug);

  useEffect(() => {
    setLoading(true)
    apiCall.fetchData(`/place/getSearchPlaces/${slug}`)
    .then((data)=> setSearchCards(data))
    .catch((error)=> console.log(error))
    .finally(()=>setLoading(false))
  }, [slug]);
 
  // Return loader
  if (loading) {
    return <Loader />;
  }

  // Return page
  return (
    <div className="container-fluid">
      <h4 className="text-center pt-4">Results for: {slug}</h4>
      <div className="destination-section pt-3 text-center mb-3">
        <div className="card-container container-fluid">
          <div className="row">
            {searchCards.map((card) => (
              <div
                className="card col-xs-12 col-md-3 col-xl-4 m-sm-2 m-xl-3 my-2"
                style={{ width: "18rem" }}
                key={card.title}
              >
                <img src={card.cardImg} className="card-img-top mt-1" alt="..." />
                <div className="card-body py-2 px-2">
                  <h5 className="card-title mb-0 pb-1">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
                <button className="mb-2">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={card.slug}
                  >
                    Read More
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
