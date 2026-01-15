import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from "react-icons/hi";

const HeritageStory = () => {
  return (
    <section className="relative py-20 bg-stone-900 overflow-hidden">
      
      {/* Background Decorative Element (Optional Pattern) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-900/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* 1. The Image Grid (Collage Style) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[500px] w-full">
              {/* Main Image */}
              <div className="absolute top-0 left-0 w-4/5 h-4/5 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=1888&auto=format&fit=crop" 
                  alt="Artisan working on loom"
                  fill
                  className="object-cover rounded-sm shadow-2xl"
                />
              </div>
              
              {/* Secondary Image (Offset) */}
              <div className="absolute bottom-0 right-0 w-3/5 h-3/5 z-20 border-8 border-stone-900">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVwU7xyyzJ7EfifxUo0Kz0hpuf_1LbvWe3Q&s" 
                  alt="Close up of fabric"
                  fill
                  className=" h-full"
                />
              </div>

              {/* Decorative Border Box */}
              <div className="absolute top-8 left-8 w-full h-full border border-stone-700 z-0 rounded-sm"></div>
            </div>
          </div>

          {/* 2. The Story Content */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-900/30 border border-rose-800 text-rose-400 text-xs font-medium tracking-widest uppercase mb-6">
              Since 1985
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
              Preserving the <span className="text-rose-600 italic">Art</span> of Handloom
            </h2>

            <p className="text-stone-400 text-lg leading-relaxed mb-6 font-light">
              Every thread tells a story. Our garments are not mass-produced; they are handcrafted by third-generation artisans in the heart of Varanasi and Jaipur.
            </p>
            
            <p className="text-stone-500 mb-8 leading-relaxed">
              We believe in sustainable fashion that honors the environment and the weaver. When you wear our collection, you carry a piece of India's rich heritage with you.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link href="/about" className="inline-flex items-center gap-2 bg-rose-700 text-white px-8 py-3 rounded-sm hover:bg-rose-600 transition-all duration-300">
                Read Our Story <HiArrowRight />
              </Link>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-serif text-white">500+</p>
                  <p className="text-xs text-stone-500 uppercase">Artisans</p>
                </div>
                <div className="w-px h-8 bg-stone-700"></div>
                <div className="text-center">
                  <p className="text-2xl font-serif text-white">100%</p>
                  <p className="text-xs text-stone-500 uppercase">Handmade</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default HeritageStory;