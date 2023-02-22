import React from "react";
import "../App.css";
import HeroSection from "../components/HeroSection";
import Destinations from "../components/Destinations";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Offers from "../components/Offers";

function Home() {
  return (
    <>
      <HeroSection />
      <Destinations />
      <Experience />
      <Offers />
      <Footer />
    </>
  );
}

export default Home;
