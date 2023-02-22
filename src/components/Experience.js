import React from "react";
import "./Destinations.css";
import "./Experience.css";
import Cards from "./Cards";

const experianceCards = [
  {
    img: "https://www.hilton.com/im/en/MBJRHHF/16722849/2021-lifestyle-shoot-at-hilton-rose-hall-resort-spa-an-all-inclusive-resort.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854",
    text: "Jumpstart Your Rewards With Up to 4,500 Points",
  },
  {
    img: "https://www.hilton.com/im/en/SJDLCHH/3254503/family-pool.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854",
    text: "Book Ahead & Save Up to 17%",
  },
  {
    img: "https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854",
    text: "Multiply Your Points",
  },
  {
    img: "https://www.hilton.com/im/en/NoHotel/13984175/cheers-5000x3333.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854",
    text: "Free Bonus Points at New Hotels",
  },
  {
    img: "https://www.hilton.com/im/en/NoHotel/16156655/shutterstock-673616299.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854",
    text: "Hit the Road This Summer",
  },
  {
    img: "https://www.hilton.com/im/en/NoHotel/14530273/f-por-157-heroimage-crop3-2.jpg?impolicy=crop&cw=1500&ch=1000&gravity=NorthWest&xposition=0&yposition=0&rw=1280&rh=854",
    text: "Make Your Stay Even Sweeter",
  },
];

const Experience = () => {

  return (
    <div style={{ margin: "auto", padding: "20px" }}>
      <h2 className="destTitle">Experience Something New</h2>
      <div className="cardContainer">
        {experianceCards.map((card) => {
          return <Cards key={card.img} image={card.img} text={card.text} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
