import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiCall from "../api";
import Loader from "./Loader";
const Places = () => {
  const [placesCardData, setplacesCardData] = useState([]);
  const [loading,setLoading] = useState(true)
  
  // Fetching Data
  useEffect(() => {
   apiCall.fetchData("/place/getExploreMoreCardData")
   .then((data)=> setplacesCardData(data))
   .catch((error)=> console.log(error))
   .finally(()=> setLoading(false))
  }, []);

  // Return Loading
  if(loading){
    return <Loader/>
  }

  // Return page
  return (
    <>
      <div className="destination-section pt-3 text-center mb-3">
        <h1>Explore Featured Destinations Of Eastern Nepal</h1>
        <div className="card-container container-fluid">
          <div className="row">
            {placesCardData.map((card) => (
              <div
                className="card col-xs-12 col-md-3 col-xl-4 m-sm-2 m-xl-3 my-2"
                style={{ width: "18rem" }}
                key={card._id}
              >
                <img
                  src={card.cardImg}
                  className="card-img-top mt-1"
                  alt="..."
                />
                <div className="card-body py-2 px-2">
                  <h5 className="card-title mb-0 pb-1">{card.title}</h5>
                  <p className="card-text">{card.shortInfo}</p>
                </div>
                <button className="mb-2">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/place/${card.slug}`}
                  >
                    Read More
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Places;
