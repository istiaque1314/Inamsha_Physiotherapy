import React from "react";

function Aaya() {
  return (
    <div className="container mx-auto py-8 px-4 bg-blue-100">
      <h3 className="text-3xl font-bold text-center mb-6 text-blue-900">Hire An Aya With Ease</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <img
            className="w-full h-auto rounded-lg"
            src="https://www.shutterstock.com/shutterstock/videos/1081629458/thumb/1.jpg?ip=x480"
            alt="Aya Service"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900 text-center sm:text-left">
            Quality Care for Your Loved Ones
          </h1>
          <p className="text-gray-800 text-lg leading-8 mb-4 text-center sm:text-left font-roboto">
            At Aaya Services, we understand the importance of providing compassionate care
            for those who matter most to you. Our dedicated caregivers are trained to
            provide personalized support, ensuring comfort and peace of mind for your family.
            Whether it's assistance with daily activities or companionship, we're here to help.
          </p>
          <div className="text-center">
            <a
              href="https://wa.me/916289213173?text=Hi! I need an Aya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-md bg-slate-900 hover:bg-orange-400 text-white font-medium"
            >
              Request Aya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aaya;
