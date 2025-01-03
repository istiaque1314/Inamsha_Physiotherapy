import React from 'react';
import anime from '../assets/anime.json';
import Lottie from 'lottie-react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative grid lg:grid-cols-2 font-sans text-gray-800">
      <div className="flex flex-col items-center justify-center space-y-4 font-sans lg:px-8 lg:py-12">

        <h1 className="text-4xl lg:text-7xl font-bold shadow-md font-sans lg:text-5xl" style={{ fontSize: '4rem' }}>INAMSHA</h1>
        <div>

          <TypeAnimation
            sequence={[
              'The Name of CURE',
              1000,
              'The Name of WELLNESS',
              1000,
              'The Name of HAPPINESS',
              1000,
              'The Name of TRANSFORMATION',
              1000,
              'The Name of PURITY',
              1000,
              'The Name of HEALTHY LIFESTYLE',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.5em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <div className="text-center sm:text-left md:text-center lg:text-left">

          <h5 className="text-sm lg:text-lg leading-relaxed" style={{ fontSize: '0.875rem' }}>
            Consult us for personalized physiotherapy sessions tailored to your needs, promoting mobility, strength, pain relief, physical wellness and a healthy lifestyle.
          </h5>

          {/* <div className="text-center py-10">
            <a
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-md bg-slate-900 hover:bg-orange-400 text-white font-medium"
            >
              Book Now
            </a>
          </div> */}

          <div className="text-center py-10">
            <Link
              to="/book"
              className="inline-block px-6 py-3 rounded-md bg-slate-900 hover:bg-orange-400 text-white font-medium"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Lottie animationData={anime} />
      </div>
    </div>
  );
}

export default Banner;
