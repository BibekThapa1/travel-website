import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import "./Component.css";
import Eletter from "./Eletter";
import "../App.css";
import Carousel from "./Carousel";
import apiCall from "../api";
import Loader from "./Loader";

const PlaceInfo = () => {
  const [placeData, setPlaceData] = useState({});
  const [exploreMore, setexploreMore] = useState([]);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  // Fetch Data
  useEffect(() => {
    setLoading(true)
    //Place info
    apiCall
      .fetchData(`/place/getplaceInfo/${slug}`)
      .then((data) => setPlaceData(data))
      .catch((error) => console.log(error));

    // Random Places
    apiCall
      .fetchData("/place/getExploreMoreCardData")
      .then((data) => setexploreMore(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [slug]);

  // Return loader
  if (loading) {
    return <Loader />;
  }

  //  Return page
  return (
    <div className="place-info">
      <div className="container-fluid heading px-md-4 px-lg-5">
        <h1 className="heading text-center text-capitalize">
          {placeData.title}
        </h1>
        {placeData.images ? <Carousel data={placeData.images} /> : null}
        <p className="text-center">{placeData.description}</p>
      </div>

      <div className="map container-fluid px-md-4 px-lg-5">
        <div className="location">
          <h2 className="heading text-center">Location</h2>
          <p>{placeData.mapDescription}</p>
        </div>
        {placeData.mapTag ? parse(placeData.mapTag) : null}
      </div>
      <div className="destination-section pt-3 text-center mb-3">
        <h2>Explore More</h2>
        <div className="card-container container-fluid">
          <div className="row">
            {exploreMore.map((card) => (
              <div
                className="card col-xs-12 col-md-3 col-xl-4 m-sm-2 m-xl-3 my-2"
                style={{ width: "18rem" }}
                key={card.name}
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
                  {" "}
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
        <div className="buttons">
          <button className="">
            {" "}
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/places"}
            >
              Explore More...
            </Link>
          </button>
        </div>
      </div>
      <Eletter />
    </div>
  );
};

export default PlaceInfo;
