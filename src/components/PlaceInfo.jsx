import React from 'react';
import { placeDescription } from '../data/data';
import {useParams} from "react-router-dom";
import "./Component.css"
import Slider from './Slider';
import Eletter from './Eletter';
import "../App.css"
import cardImg1 from "../images/iilam.jpeg";
import cardImg2 from "../images/iilam2.jpeg";
import Carousel from './Carousel';
import { placesCardData } from '../data/data';

const PlaceInfo = () => {

    const {slug} = useParams(); 

    const placeData = placeDescription.filter((place)=>place.name === slug)
    
  return (
    <div className='place-info'>
     <div className="container-fluid heading px-md-4 px-lg-5">
      <h1 className='heading text-center'>Betana Wetland</h1>
      <Carousel data={placesCardData} />
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum repudiandae hic vel reprehenderit pariatur, exercitationem expedita placeat ducimus molestiae voluptatum nisi neque libero cupiditate culpa iusto a odio eius ipsum quos, ipsam nulla recusandae sed. Eius ipsum fuga molestias itaque reprehenderit quisquam quas consequuntur vero magnam tempore eaque in ipsa nostrum illum laboriosam voluptatem, odio repellendus mollitia. Ducimus, quia.</p>
     </div> 
  
     <div className="map container-fluid px-md-4 px-lg-5">
        <div className="location">
        <h2 className='heading text-center'>Location</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum nihil quisquam tempora dolorem. Id autem saepe ex iste eos, repellat soluta aperiam velit corporis, rem quaerat totam amet. Nobis, tenetur.</p>
        </div>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.662811087514!2d87.4294928754733!3d26.65927647679917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6439b6f79a19%3A0xfdabfe8a847dfe7e!2sBetana%20Wetland!5e0!3m2!1sen!2snp!4v1719993574359!5m2!1sen!2snp"  style={{border:""}} allowFullScreen="" loading="lazy" ></iframe>
     </div>
     <div className="destination-section pt-3 text-center mb-3">
        <h2>Explore More</h2>
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
                <button className="mb-2">Read More</button>
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
     <Eletter/>
    </div>

  )
}

export default PlaceInfo