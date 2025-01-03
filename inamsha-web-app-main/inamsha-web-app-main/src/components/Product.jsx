import React from 'react';
import Slider from "react-slick";
import PhysioOne from './PhysioOne';
import PhysioTwo from './PhysioTwo';

const Product = () => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto play slides
    autoplaySpeed: 4000, // Auto play interval in milliseconds (change as needed)
  };

  return (
    <div className='container shadow-lg my-2 py-8 px-10 rounded-xl dark:bg-dark bg-primary/10 relative'>
      <Slider {...settings}>
        <div>
          <PhysioOne/>
        </div>
        <div>
          <PhysioTwo />
        </div>
      </Slider>
    </div>
  );
}

export default Product;
