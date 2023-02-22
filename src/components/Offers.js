import React from "react";
import './Offers.css';
import OfferCards from "./offerCards";

const offerCards = [
  {
    img: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/2/9/%7B32926B10-8EE8-4639-B2DD-AC55F70CB76D%7Dslcwithbreakfast.jpg?w=360&h=175&mode=crop&quality=100&scale=both",
    type: "Rooms & Suites",
    title: "Shangri-La Circle Exclusive Member Rate with Breakfast",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
  {
    img: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/8/B/%7BA8B2E679-6D4A-497F-95C4-A905821952F5%7Dslcmemberrate.jpg?w=360&h=175&mode=crop&quality=100&scale=both",
    type: "Rooms & Suites",
    title: "Shangri-La Circle Exclusive Member Rate with Breakfast",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
  {
    img: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/4/8/3/%7B4835D553-4207-4DFC-B256-52D227A8066B%7D201201_SLCB_APNewOffer.jpg?w=360&h=175&mode=crop&quality=100&scale=both",
    type: "Rooms & Suites",
    title: "Shangri-La Circle Exclusive Member Rate with Breakfast",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
];

const Offers = () => {
  return (
    <div style={{ margin: "auto", padding: "3rem" }}>
      <h2 className="destTitle">Offers</h2>
      <div
        className="offerCardContainer"
      >
        {offerCards.map((card) => {
          return (
            <OfferCards
             key={card.img}
             image={card.img}
             type={card.type} 
             title={card.title}
             description={card.description}
             price={card.price}   
             />
          );
        })}
      </div>
    </div>
  );
};

export default Offers;