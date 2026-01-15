"use client"

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const HeroSlider = () => {
  
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1732511405757-5a908c8d158a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      title: "Royal Bridal Collection",
      subtitle: "Handcrafted lehengas with intricate embroidery",
      cta: "Shop Now",
      price: "From ₹25,999"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1964&auto=format&fit=crop", 
      title: "Heritage Silk Sarees",
      subtitle: "Authentic Banarasi & Kanjivaram collections",
      cta: "Explore",
      price: "Traditional Weaves"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1630457497120-609b2a74578c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Festive Edition",
      subtitle: "Elegant anarkalis for the festive season",
      cta: "View Collection",
      price: "Festive Special"
    }
  ];

  return (
    <div className="w-full h-[80vh] min-h-[500px] max-h-[700px] relative overflow-hidden">
      <Swiper
        spaceBetween={0}
     
        loop={true}
      
        autoplay={{
          delay: 4000,
        //   disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
        
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-20">
              <div className="max-w-2xl">
                {/* Price Tag */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm border border-white/30">
                    {slide.price}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 leading-tight">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
                  {slide.subtitle}
                </p>

                {/* CTA Button */}
                <Link href="/shop">
                  <button className="group flex items-center gap-3 px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
                    <span className="font-medium text-lg">{slide.cta}</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #e11d48;
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
        
        .swiper-pagination {
          bottom: 20px !important;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;