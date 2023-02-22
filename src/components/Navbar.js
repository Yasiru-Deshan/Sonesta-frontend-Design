import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Image from "../images/images.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="headerContainer">
        <div className="hotelName">
          <img className="hotelIcon" src={Image} alt="" />
          <h2 className="hotelTitle">SONESTA</h2>
        </div>

        <div className="headerButtonsContainer">
          <p className="headerButtons">Sign In |</p>
          <p className="headerButtons">Join Now |</p>
          <p className="headerButtons">Find Reservations |</p>
          <p className="headerButtons">English |</p>
          <p className="headerButtons">LKR |</p>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                ROOMS & SUITES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                DINING
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                EXPERIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                EVENTS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                OFFERS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                MORE
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">FIND A HOTEL</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
