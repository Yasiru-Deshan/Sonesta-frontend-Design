import React, { useEffect, useState, useRef } from "react";
import "./Banner.css";
import FloatingWidget from "./FloatingWidget";

const images = [
  {
    url: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://explora.mu/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_XL.jpg?t=20220115_075350",
  },
  {
    url: "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    url: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
const delay = 4000;

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div>
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <img className="slide" key={index} src={image.url} alt=""></img>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    <div style={{width:"60%",margin:"auto",marginBottom:"200px"}}>
      <FloatingWidget/>
    </div>
    </div>
  );
};

export default HeroSection;
