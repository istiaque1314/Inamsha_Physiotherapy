import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import physiotherapistImage from "../assets/physiotherapist.jpg";

function PhysioOne() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="relative grid lg:grid-cols-2 gap-4 overflow-hidden">
      <div
        className="flex flex-col items-center justify-center p-8 shadow-md rounded-lg bg-white lg:p-12"
        data-aos="fade-left"
      >
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
          Know Your Physiotherapist
        </h1>
        <div className="text-lg leading-relaxed">
          <h2 className="text-xl font-semibold mb-2">
            Meet Mushtaque Ali, Founder of Inamsha Physiotherapy and Rehabilitation Centre
          </h2>
          <p>
            Welcome to Inamsha Physiotherapy and Rehabilitation Centre, founded by Mushtaque Ali, an
            experienced physiotherapist dedicated to your recovery.
          </p>
          <p>
            With specialized expertise in orthopedic rehabilitation and sports
            injuries, Mushtaque is committed to helping you regain mobility and
            wellness.
          </p>
          <p>
            Whether you're recovering from a sports-related injury or seeking
            relief from musculoskeletal pain, Mushtaque offers personalized
            care tailored to your needs.
          </p>
          <p>
            Trust in Mushtaque Ali and the team at Inamsha Physiotherapy and Rehabilitation Centre
            to guide you towards a healthier, more active life.
          </p>
        </div>
      </div>
      <div className="lg:hidden">
        <img
          src={physiotherapistImage}
          alt="Physiotherapist"
          className="w-full h-auto rounded-full"
          data-aos="fade-right"
        />
      </div>
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
        <img
          src={physiotherapistImage}
          alt="Physiotherapist"
          className="w-full h-auto rounded-full"
          data-aos="fade-right"
        />
      </div>
    </div>
  );
}

export default PhysioOne;
