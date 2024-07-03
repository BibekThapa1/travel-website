import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import img1 from "../images/slider1.jpg";
import img2 from "../images/slider2.jpg";
import cardImg1 from "../images/iilam.jpeg";
import cardImg2 from "../images/iilam2.jpeg";
import Eletter from "../components/Eletter";
import { placesCardData } from "../data/data";

const Home = () => {
  const images = [img1, img2];


  return (
    <>
      <Slider images={images} />
      <div className="info-section mt-4">
        <h1 className="text-center ">Welcome to Purbi Nepal</h1>
        <p className="container px-1 px-lg-5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Perspiciatis, repellat! Magni repudiandae fuga consectetur sunt ex
          asperiores, aliquam numquam atque. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Aut dolorum in iste et. Esse repudiandae
          repellendus distinctio at reprehenderit non, soluta ea sapiente
          incidunt cumque totam rem praesentium ratione ad.
        </p>
      </div>
      <div className="destination-section pt-3 text-center mb-3">
        <h1>Explore the Featured Destinations</h1>
        <div className="card-container container-fluid">
          <div className="row">
            {placesCardData.map((card) => (
              <div
                className="card col-xs-12 col-md-3 col-xl-4 m-sm-2 m-xl-3 my-2"
                style={{ width: "18rem" }}
                key={card.name}
              >
                <img src={card.img} className="card-img-top mt-1" alt="..." />
                <div className="card-body py-2 px-2">
                  <h5 className="card-title mb-0 pb-1">{card.name}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
                <button className="mb-2"><Link style={{textDecoration:"none",color:"inherit"}} to={card.slug}>Read More</Link></button>
              </div>
            ))}
          </div>
        </div>
        <div className="buttons">
          <button className="">
            Explore More...
          </button>
        </div>
      </div>
      <Eletter />
    </>
  );
};

export default Home;
