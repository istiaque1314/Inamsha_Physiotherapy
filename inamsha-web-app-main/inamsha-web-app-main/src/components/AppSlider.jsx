import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';

import { RxArrowTopRight } from 'react-icons/rx';
import { ServiceData } from '../constants/index';

const AppSlider = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Services</h1>

      {/* Swiper Slider */}
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-full md:max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col justify-center items-center gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[400px] w-[300px] md:w-[350px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col items-center justify-center h-full">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl text-center">{item.title}</h1>
                <p className="lg:text-[18px] text-center">{item.content}</p>
                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AppSlider;
