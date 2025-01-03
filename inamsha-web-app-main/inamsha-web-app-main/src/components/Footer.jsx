import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImage from "../assets/Inamsha-logo.png";
import "../index.css";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className="relative orange-400">
      <div className="absolute bg-color top-0 left-0 w-[100%] overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block h-[600px] fill-white"
          ></path>
        </svg>
        <div className="grid lg:grid-cols-4 gap-10 sm:grid-cols-1 p-10">
          <div className="flex flex-col m-auto gap-5 w-40">
            <span>
              <Link to="/">
                <img src={logoImage} alt="logo" /> {/* Use imported logoImage */}
              </Link>
              <h5 className="text-center mt-1 text-2xl text-orange-400">INAMSHA</h5>
              <p className="text-center text-sm text-gray-500">Physiotherapy and Rehabilitation Centre</p>
            </span>
          </div>

          <div>
            <li className="text-[22px] list-none font-semibold text-orange-400 py-2 uppercase">
              Location
            </li>
            <li className="my-4 list-none text-white">41A/1A KARL MARX SARANI</li>
            <li className="my-4 list-none text-white">BABU BAZAR</li>
            <li className="my-4 list-none text-white">ROYAL DOCTOR CHAMBER</li>
          </div>

          <div>
            <li className="text-[22px] list-none font-semibold text-orange-400 py-2 uppercase">
              OFFICE HOURS
            </li>
            <li className="my-4 list-none text-white">Monday to Saturday</li>
            <li className="my-4 list-none text-white">4:00 PM TO 10:00 PM</li>
            <li className="my-4 list-none text-white">SUNDAY CLOSED</li>
          </div>

          <div className="mb-4 md:mb-0">
            <h2 className="text-[22px] font-semibold text-orange-400 py-2 uppercase">
              Contact
            </h2>
            <p className="text-[16px] my-4 text-white">Email: info@inamsha.com</p>
            <p className="text-[16px] my-4 text-white">Phone: +91 62 8921 3173 </p>
            <div className="flex space-x-4 text-white">
              <a
                className="orange-400 hover:text-orange-400 transform hover:scale-150 
                            transition-all duration-150 ease-in-out"
                href=""
              >
                <FaGithub />
              </a>
              <a
                className="orange-400 hover:text-orange-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                href=""
              >
                <FaLinkedinIn />
              </a>
              <a
                className="orange-400 hover:text-orange-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                href=""
              >
                <FaTwitter />
              </a>
              <a
                className="orange-400 hover:text-orange-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                href=""
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <div className="h-full flex items-center justify-center mb-5">
            <form className="w-96 relative">
              <input
                type="email"
                placeholder="Enter Email..."
                className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none 
                            focus:border border-pink-800"
              />
              <button
                type="Submit"
                className="bg-orange-400 px-8 py-2 rounded-full orange-400
                                 absolute top-0 right-0"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <h6 className="text-center text-white my-5">&copy; right Inamsha {Year}</h6>
      </div>
    </footer>
  );
};

export default Footer;
