import React from "react";
import TopPage from "./TopPage";
import Aaya from "./Aaya";
import Banner from "./Banner";
import AppSlider from "./AppSlider";
import GoogleMap from "./GoolgeMap";
import BottomPage from "./BottomPage";
import Product from "./Product";
import Testimonials from "./Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  return (
    <>
      <div className="bg-slate-900">
        <TopPage />
      </div>
      <div className="bg-slate-600">
        <Aaya />
      </div>
      <div className="bg-white">
        <Banner />
      </div>
      <div className="bg-slate-600">
        <AppSlider />
      </div>
      <div className="bg-white">
        <GoogleMap />
      </div>
      <div className="bg-slate-300">
        <Product />
      </div>
      <div className="bg-white overflow-hidden">
        <BottomPage />
      </div>
      <div className="overflow-hidden">
        <Testimonials />
      </div>
    </>
  );
}

export default Home;
