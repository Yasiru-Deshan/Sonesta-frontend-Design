import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const OfferCards = (props) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div>
      <div data-aos="fade-left" className="offerCard">
        <img className="offerImg" alt="" src={props.image}></img>
        <p>{props.type}</p>
        <h3 className="offerTitle">{props.title}</h3>
        <p className="offerDescription">{props.description}</p>
        <p className="offerPrice">{props.price}</p>
        <button className="offerButton">View Details</button>
      </div>
    </div>
  );
};

export default OfferCards;
