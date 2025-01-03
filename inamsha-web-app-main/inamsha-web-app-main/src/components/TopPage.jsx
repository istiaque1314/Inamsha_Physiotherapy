import React from "react";
import videoBg from "../assets/videoBg.mp4";
import { TypeAnimation } from "react-type-animation";

const TopPage = () => {
  return (
    <div className="relative">
      <div className="overlay overflow-hidden">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline // Add playsInline attribute
          className="w-full h-full object-cover"
          style={{ minHeight: "100vh", minWidth: "100vw" }}
        ></video>
        <div
          className="absolute inset-0 flex justify-center items-center text-slate-900 overflow-hidden"
          style={{ whiteSpace: "nowrap" }}
        >
          <div className="flex flex-col items-center justify-center space-y-4 font-roboto text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-1000 ease-in-out">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 shadow-md relative z-1"
              style={{
                position: "relative",
              }}
            >
              <span className="inline-block relative">
                <span className="highlight-text px-4">
                  I
                </span>
                <span className="highlight-text px-4">
                  N
                </span>
                <span className="highlight-text px-4">
                  A
                </span>
                <span className="highlight-text px-4">
                  M
                </span>
                <span className="highlight-text px-4">
                  S
                </span>
                <span className="highlight-text px-4">
                  H
                </span>
                <span className="highlight-text px-4">
                  A
                </span>
              </span>
            </h1>
            <h2
              className="text-xl font-bold text-center text-white mt-4"
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
              }}
            >
              {/* Adjusted for Small Screens */}
              <span className="block md:inline">
                PHYSIOTHERAPY AND <br className="md:hidden" /> REHABILITATION CENTER
              </span>
            </h2>
            <TypeAnimation
              sequence={[
                "The Name of CURE",
                1000,
                "The Name of WELLNESS",
                1000,
                "The Name of HAPPINESS",
                1000,
                "The Name of TRANSFORMATION",
                1000,
                "The Name of PURITY",
                1000,
                "The Name of HEALTHY LIFESTYLE",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1.5em",
                display: "inline-block",
                fontWeight: "bold",
                color: "white",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
              }}
              repeat={Infinity}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
