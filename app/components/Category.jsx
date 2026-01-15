'use client'; // Required for Swiper interactions

import React from 'react';
import TagLineCompo from './TagLineCompo';
import Link from 'next/link';
import Image from 'next/image';

// 1. Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Category = () => {

  // Mock Data
  const categories = [
    { id: 1, name: "Sarees", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55POOU_bbMxoMB4d6OjlgRQWDu1_w1glrJA&s" },
    { id: 2, name: "Kurtas", image: "https://www.houseofayuda.com/cdn/shop/products/Untitled-5_88355265-1eaf-4c9a-b2e4-84fb1bfc21a2.jpg?v=1753371417&width=500" },
    { id: 3, name: "Lehengas", image: "https://cdn.shopify.com/s/files/1/0573/5733/6749/files/image1_d53bc89a-062d-489b-b6d8-f76138c9939a_480x480.png?v=1724410965" },
    { id: 4, name: "Sherwanis", image: "https://cdn.exoticindia.com/images/products/original/textiles-2019/gaf604.jpg" },
   
    { id: 6, name: "Footwear", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop" },
    { id: 7, name: "Shawls", image: "https://d13676iop780hb.cloudfront.net/products/KCS-1414-A-530_1__1500x2000.jpg" },
    { id: 8, name: "Handbags", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop" },
  ];

  return (
    <div className="py-16 bg-white border-b border-stone-100">
      
      <TagLineCompo 
        tag="Browse by Category"
        heading="Shop Essentials"
      />

      <div className="container mx-auto px-4  mt-10">
        
        {/* 2. Swiper Container */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          speed={1000} // Smooth transition speed
          autoplay={{
            delay: 2500,
            disableOnInteraction: false, // Keeps sliding even after user swipes
            pauseOnMouseEnter: true, // Stops when user hovers to click
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 }, // Mobile
            640: { slidesPerView: 3, spaceBetween: 20 }, // Small Tablet
            768: { slidesPerView: 4, spaceBetween: 30 }, // Tablet
            1024: { slidesPerView: 6, spaceBetween: 40 }, // Desktop
          }}
          className="py-8" // Add padding to swiper to allow shadow to show
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              
              <Link href={`/category/${cat.name.toLowerCase()}`} className="group flex flex-col items-center cursor-pointer">
                
                {/* Image Container with Ring Effect */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 p-1 rounded-full border-2 border-stone-200 group-hover:border-amber-600 transition-colors duration-300">
                  
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={cat.image} 
                      alt={cat.name}
                      
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      sizes="(max-width: 768px) 100px, 160px"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>

                </div>

                {/* Category Name */}
                <h3 className="mt-4 text-base font-serif font-medium text-stone-700 group-hover:text-amber-700 transition-colors">
                  {cat.name}
                </h3>

              </Link>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Category;