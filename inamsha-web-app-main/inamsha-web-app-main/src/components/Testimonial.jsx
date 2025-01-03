import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Samantha (32)",
    text: "Rehab & Revive is where I found my path to recovery after a sports injury. The team's expertise, combined with their warm approach, made all the difference. Highly recommended!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "PRajesh (45)",
    text: "At 45, I've had my fair share of physio experiences. None compare to the care I received at Rehab & Revive. They tailored a program just for me, and I've never felt better",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Maria (28)",
    text: "I can't thank Rehab & Revive enough for their dedication. After a car accident, I struggled with mobility. Now, at 28, I feel stronger and more flexible than ever. Grateful!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Kartik (37)",
    text: "Rehab & Revive came highly recommended, and for good reason! Their holistic approach to physiotherapy helped me recover from a long-standing back issue",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 my-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in" className="mx-auto max-w-[800px]">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6 px-2" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl dark:bg-dark bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20 mx-auto"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-primary text-center">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-primary/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
