import React, { useState } from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import "../App.css";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    height: "100%",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // borderRadius: "10px",
    backgroundImage: `url(${images[currentIndex]})`,
  };

  const sliderStyles = {
    position: "relative",
  };

  function setPrevious() {
    currentIndex == 0
      ? setCurrentIndex(images.length - 1)
      : setCurrentIndex(currentIndex - 1);
  }

  function setNext() {
    currentIndex == images.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className="slider-container">
      <div className="sliderStyles" style={sliderStyles}>
        <RiArrowDropLeftLine
          className="arrow left-arrow"
          onClick={setPrevious}
        />
        <div className="slideStyles" style={slideStyles}></div>
        <RiArrowDropRightLine className="arrow right-arrow" onClick={setNext} />
        
      </div>
    </div>
  );
};

export default Slider;
