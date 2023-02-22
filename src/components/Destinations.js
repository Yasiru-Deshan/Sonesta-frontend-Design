import React,{useEffect} from "react";
import { Dropdown } from "semantic-ui-react";
import './Destinations.css';
import Image from "./../images/img-2.jpg";
import MapImage from "./../images/srilanka.png";
import Aos from "aos";
import "aos/dist/aos.css";

const hotelOptions = [
  {
    key: "Habarana Village By Cinnamon",
    text: "Habarana Village By Cinnamon",
    value: "Habarana Village By Cinnamon",
    
  },
  {
    key: "Cinnamon Velifushi Maldives",
    text: "Cinnamon Velifushi Maldives",
    value: "Cinnamon Velifushi Maldives",
    
  },
  {
    key: "Cinnamon Hakuraa Huraa Maldives",
    text: "Cinnamon Hakuraa Huraa Maldives",
    value: "Cinnamon Hakuraa Huraa Maldives",
    
  },
  {
    key: "Cinnamon Dhonveli maldives",
    text: "Cinnamon Dhonveli maldives",
    value: "Cinnamon Dhonveli maldives",
  },
  {
    key: "Ellaidhoo Maldives by Cinnamon",
    text: "Ellaidhoo Maldives by Cinnamon",
    value: "Ellaidhoo Maldives by Cinnamon",
   
  },
  
];

const Destinations=()=>{

    useEffect(() => {
      Aos.init({ duration: 500 });
    }, []);

    return (
      <div>
        <div className="destinationsContainer">
          <h1 className="destTitle">Our Destinations</h1>
          <Dropdown
            placeholder="Select Hotel"
            fluid
            selection
            options={hotelOptions}
          />
        </div>
        <div className="imageContainer">
          <img data-aos="fade-up" className="destImage" src={Image} alt="" />
          <img
            data-aos="fade-right"
            className="mapImage"
            src={MapImage}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          className="destCard"
          style={{ marginTop: "-550px", marginRight: "150px", float: "right" }}
        >
          <h2 className="destTitle">Cinnamon Dhonveli Maldives</h2>
          <p className="destDesc">
            Feel an irrepressible wave of excitement as you have the best
            surfing experience, set to the backdrop of serenity, and pristine
            blue waters.
          </p>
          <button className="destButton">Discover More</button>
        </div>
      </div>
    );
}

export default Destinations;

 