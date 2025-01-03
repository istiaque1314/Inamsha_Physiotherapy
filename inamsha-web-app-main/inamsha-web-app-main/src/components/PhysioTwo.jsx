import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import waqarAliImage from "../assets/physiotherapist2.jpg";

function PhysioTwo() {
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
            Bringing Healing Hands to You
          </h2>
          <p>
            Introducing Waqar Ali, a compassionate physiotherapist with a
            to improve your quality of life through effective rehabilitation.
          </p>
          <p>
            With years of experience in musculoskeletal therapy and a deep
            biomechanics, Waqar is dedicated to helping you
            recover from injuries, manage pain, and enhance your overall
            well-being.
          </p>
          <p>
            Whether you're an athlete aiming to optimize performance or an
            individual seeking relief from everyday discomfort, Waqar offers
            personalized treatment plans tailored to your unique needs.
          </p>
          <p>
            Trust in Waqar Ali's expertise and commitment to guide you on the
            path to recovery and a more active, pain-free lifestyle.
          </p>
        </div>
      </div>
      <div className="lg:hidden">
        <img
          src={waqarAliImage}
          alt="Waqar Ali, Physiotherapist"
          className="w-full h-auto rounded-full"
          data-aos="fade-right"
        />
      </div>
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
        <img
          src={waqarAliImage}
          alt="Waqar Ali, Physiotherapist"
          className="w-full h-auto rounded-full"
          data-aos="fade-right"
        />
      </div>
    </div>
  );
}

export default PhysioTwo;
