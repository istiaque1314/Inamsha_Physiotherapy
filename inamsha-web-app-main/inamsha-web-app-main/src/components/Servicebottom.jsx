import React from "react";

const Servicebottom = () => {
  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="flex-auto py-14">
        <div className="container px-7">
          <div className="flex justify-center">
            <div className="bg-gray-200 py-8 px-6 max-w-lg">
              <div className="col-span-2 space-y-3 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-black/80">
                  <span className="text-orange-400">Consult now, shine later.</span>{" "}
                  Your body is a reflection of your lifestyle choices.
                </h1>
              </div>
              <div className="grid place-items-center">
              <div className="text-center">
                <button
                  onClick={() => handleContact("916289213173")}
                  className="primary-btn mt-4 group-hover:scale-105 px-6 py-3 rounded-md duration-200 bg-slate-900 hover:bg-orange-500 text-white dark:text-black"
                >
                  Contact Us
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicebottom;
