'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import TagLineCompo from './TagLineCompo';
import { HiPlay, HiShoppingBag, HiVolumeUp, HiVolumeOff } from "react-icons/hi";

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoReviews = () => {

  // Mock Data
  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1610189012906-4783382c6702?q=80&w=1740&auto=format&fit=crop", // Saree styling
      user: "Aisha Sharma",
      product: "Banarasi Silk Saree",
      price: "₹12,999",
      videoUrl: "#" // Replace with actual video path
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1583391733958-e026b134633d?q=80&w=1740&auto=format&fit=crop", // Suit twirl
      user: "Meera Reddy",
      product: "Anarkali Suit Set",
      price: "₹4,500",
      videoUrl: "#"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1746&auto=format&fit=crop", // Jewelry close up
      user: "Kavita Das",
      product: "Kundan Necklace",
      price: "₹2,100",
      videoUrl: "#"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1740&auto=format&fit=crop", // Phulkari
      user: "Simran Kaur",
      product: "Phulkari Dupatta",
      price: "₹3,200",
      videoUrl: "#"
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1594636916565-5c1a17951a84?q=80&w=1887&auto=format&fit=crop", // Lehenga
      user: "Pooja Verma",
      product: "Bridal Lehenga",
      price: "₹25,000",
      videoUrl: "#"
    }
  ];

  return (
    <div className=" bg-stone-50 border-b border-stone-200">
      
      <TagLineCompo 
        tag="Watch & Shop"
        heading="Real Styles, Real People"
      />

      <div className="container mx-auto px-4  ">
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1.2} // Show part of the next slide on mobile to encourage scrolling
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4 },
          }}
          style={{
            "--swiper-navigation-color": "#be123c", // Rose-700
            "--swiper-pagination-color": "#be123c",
            paddingBottom: "50px", // Space for pagination dots
            paddingLeft: "4px", // Prevent box-shadow cut off
            paddingRight: "4px"
          }}
        >
          {videos.map((item) => (
            <SwiperSlide key={item.id}>
              <VideoCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  )
}

// Separate Component for the Logic inside each slide
const VideoCard = ({ item }) => {
  return (
    <div className="relative group w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-black">
      
      {/* 1. Thumbnail Image */}
      <img 
        src={item.thumbnail} 
        alt={item.user} 
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-70"
      />

      {/* 2. Play Button (Centered) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="w-10 h-10 bg-rose-700 rounded-full flex items-center justify-center text-white shadow-lg pl-1">
            <HiPlay size={20} />
          </div>
        </div>
      </div>

      {/* 3. Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/60 to-transparent p-4 z-10">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-full border border-white/50 overflow-hidden">
             <img src={item.thumbnail} alt="user" width={32} height={32} className="object-cover" />
           </div>
           <span className="text-white text-xs font-medium tracking-wide drop-shadow-md">
             @{item.user.replace(' ', '').toLowerCase()}
           </span>
        </div>
      </div>

      {/* 4. Bottom Product Card overlay */}
      <div className="absolute bottom-0 left-0 w-full p-4 z-20">
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-between gap-3">
            
            <div className="flex-1 min-w-0">
              <h4 className="text-stone-900 font-serif text-sm font-medium truncate">
                {item.product}
              </h4>
              <p className="text-rose-700 text-xs font-bold">
                {item.price}
              </p>
            </div>

            <button className="flex-shrink-0 bg-stone-900 text-white p-2.5 rounded-lg hover:bg-rose-700 transition-colors shadow-md">
              <HiShoppingBag size={16} />
            </button>
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default VideoReviews;