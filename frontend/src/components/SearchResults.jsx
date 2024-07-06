import React from 'react'
import {Link} from 'react-router-dom'
import cardImg1 from "../images/iilam.jpeg"
import cardImg2 from "../images/iilam2.jpeg"

const SearchResults = () => {


    const cards = [
      {
        img: cardImg1,
        name: "Iilam View",
        description:
          "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
          slug:"/places/betana"
      },
      {
        img: cardImg2,
        name: "Iilam2 View",
        description:
          "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
      },
      {
        img: cardImg1,
        name: "Iilam3 View",
        description:
          "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
      },
      {
        img: cardImg1,
        name: "Iilam4 View",
        description:
          "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
      },
      {
        img: cardImg1,
        name: "Iilam5 View",
        description:
          "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
      },
      {
        img: cardImg1,
        name: "Iilam6 View",
        description:
          "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
      },
      {
        img: cardImg1,
        name: "Iilam7 View",
        description:
          "This is Iilam. It is located in eastern hilly region of nepal. The nature here is very special and give a heartwarming vibe.",
      },
    ];
  

  return (
    <div className='container-fluid'>
 <h4 className='text-center pt-4'>Results for: </h4>
 <div className="destination-section pt-3 text-center mb-3">
        <div className="card-container container-fluid">
          <div className="row">
            {cards.map((card) => (
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
        </div>
    </div>
  )
}

export default SearchResults