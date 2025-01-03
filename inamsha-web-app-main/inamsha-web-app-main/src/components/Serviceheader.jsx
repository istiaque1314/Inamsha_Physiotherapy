import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Serviceheader = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
       <div className="text-center my-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
           SERVICES WE OFFER
          </h1>
        </div>
    </div>
  );
};

export default Serviceheader;

