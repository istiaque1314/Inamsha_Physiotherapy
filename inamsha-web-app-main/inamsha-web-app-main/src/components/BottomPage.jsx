import React from "react";

const BottomPage = () => {
  return (
    <div className="relative p-8 shadow-md rounded-lg bg-white">
      <div className="flex flex-col items-center justify-center gap-4 text-center" data-aos="fade-left">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold shadow-md text-gray-800 items-center justify-center">
          Not Sure If Physiotherapy Is Right for You?
        </h1>
        <div className="sm:text-left md:text-center lg:text-left">
          <h2 className="text-sm md:text-base lg:text-lg font-semibold leading-relaxed text-gray-700">
            Experience the Benefits of Our Free Physiotherapy Session Today! <br />
            Book Your Free Session with Our Experts. Discover how our personalized approach to physiotherapy can help you:
            
            <p className="text-xs md:text-sm lg:text-base">
              Don't let uncertainty hold you back. Take the first step towards a healthier, happier you!
            </p>
          </h2>
        </div>
      </div>
      <div className="text-center py-10">
            <a
              href="https://wa.me/916289213173?text=Hi!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-md bg-slate-900 hover:bg-orange-400 text-white font-medium"
            >
              Request Session
            </a>
          </div> 
    </div>
  );
};

export default BottomPage;
