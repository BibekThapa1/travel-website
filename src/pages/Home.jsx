import React from "react";
import Slider from "../components/Slider";
import img1 from "../images/slider1.jpg";
import img2 from "../images/slider2.jpg";
import cardImg1 from "../images/iilam.jpeg";
import cardImg2 from "../images/iilam2.jpeg";

const Home = () => {
  const images = [img1, img2];

  const cards = [
    {
      img: cardImg1,
      name: "Iilam View",
      description:
        "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
    },
    {
      img: cardImg2,
      name: "Iilam2 View",
      description:
        "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
    },
    {
      img: cardImg1,
      name: "Iilam1 View",
      description:
        "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
    },
    {
      img: cardImg1,
      name: "Iilam1 View",
      description:
        "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
    },
    {
      img: cardImg1,
      name: "Iilam1 View",
      description:
        "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
    },
    {
      img: cardImg1,
      name: "Iilam1 View",
      description:
        "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
    },
    {
      img: cardImg1,
      name: "Iilam1 View",
      description:
        "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
    },
  ];

  return (
    <>
      <Slider images={images} />
      <div className="container pt-3 text-center">
        <h1>Explore the Featured Destinations</h1>
        <div className="card-container container">
          <div className="row">
            {cards.map((card) => (
              <div
                className="card col-xs-12 col-md-3 col-xl-4 m-sm-2 m-xl-3 my-2"
                style={{ width: "18rem" }}
              >
                <img src={card.img} className="card-img-top mt-1" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>

                <div className="card-body">
                  <a href="/" className="card-link">
                    Card link
                  </a>
                  <a href="/" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
