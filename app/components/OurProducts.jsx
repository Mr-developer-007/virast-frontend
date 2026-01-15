"use client"
import React, { useState } from 'react';
import TagLineCompo from './TagLineCompo';
import { HiStar, HiOutlineHeart, HiOutlineEye, HiShoppingBag, HiArrowRight } from "react-icons/hi";

const OurProducts = () => {
const [activeTab, setActiveTab] = useState("New Products");


  const products = [
    {
      id: 1,
      name: "Crimson Phulkari Dupatta",
      category: "Dupattas",
      price: 2499,
      originalPrice: 3500, 
      rating: 4.8,
      reviews: 120,
      isNew: false,
      image: "https://craftmagic.in/wp-content/uploads/2019/10/STO152-2-phulkari-dupatta.jpg", 
    },
    {
      id: 2,
      name: "Jaipuri Block Print Suit",
      category: "Suit Sets",
      price: 1850,
      originalPrice: null,
      rating: 4.5,
      reviews: 85,
      isNew: true, // Shows "New" badge
      image: "https://bandhanijaipur.com/cdn/shop/files/328A4255.jpg?v=1730219135",
    },
    {
      id: 3,
      name: "Kashmiri Pashmina Shawl",
      category: "Winter Wear",
      price: 8999,
      originalPrice: 12000,
      rating: 5.0,
      reviews: 42,
      isNew: false,
      image: "https://pashmina.vtexassets.com/arquivos/ids/155850/eden-of-paisleys-kalamkari-pashmina-shawl1.jpg?v=638511407610830000",
    },
    {
      id: 4,
      name: "Handcrafted Juttis",
      category: "Footwear",
      price: 1299,
      originalPrice: 1599,
      rating: 4.7,
      reviews: 210,
      isNew: false,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop",
    },
     {
      id: 5,
      name: "Crimson Phulkari Dupatta",
      category: "Dupattas",
      price: 2499,
      originalPrice: 3500, 
      rating: 4.8,
      reviews: 120,
      isNew: false,
      image: "https://craftmagic.in/wp-content/uploads/2019/10/STO152-2-phulkari-dupatta.jpg", 
    },
    {
      id: 6,
      name: "Jaipuri Block Print Suit",
      category: "Suit Sets",
      price: 1850,
      originalPrice: null,
      rating: 4.5,
      reviews: 85,
      isNew: true, // Shows "New" badge
      image: "https://bandhanijaipur.com/cdn/shop/files/328A4255.jpg?v=1730219135",
    },
    {
      id: 7,
      name: "Kashmiri Pashmina Shawl",
      category: "Winter Wear",
      price: 8999,
      originalPrice: 12000,
      rating: 5.0,
      reviews: 42,
      isNew: false,
      image: "https://pashmina.vtexassets.com/arquivos/ids/155850/eden-of-paisleys-kalamkari-pashmina-shawl1.jpg?v=638511407610830000",
    },
    {
      id: 8,
      name: "Handcrafted Juttis",
      category: "Footwear",
      price: 1299,
      originalPrice: 1599,
      rating: 4.7,
      reviews: 210,
      isNew: false,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop",
    }
  ];

  return (
    <div className="py-20 bg-stone-50">
      
      {/* Header Section */}
      <TagLineCompo 
        tag="Explore Us"
        heading="Our Featured Products"
      />
      
      {/* Product Grid */}
      <div className="container mx-auto px-4">
       <div className="flex flex-wrap gap-4 mb-10">

{["New Products", "Best Sellers", "Featured Products"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            px-8 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border
            ${activeTab === tab 
              ? "bg-stone-900 text-white border-rose-600 shadow-lg transform scale-105" 
              : "bg-white text-stone-500 border-stone-200 hover:border-stone-400 hover:text-stone-800"
            }
          `}
        >
          {tab}
        </button>
      ))}
  
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {products.map((product) => (
            <div key={product.id} className="border-rose-600/50 group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ">
              
              {/* 1. Image Container */}
              <div className="relative h-[350px] overflow-hidden bg-gray-100">
                
                {/* Product Image with Zoom Effect */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Badges (New / Sale) */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-stone-900 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                      New
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                    </span>
                  )}
                </div>

                {/* Side Action Buttons (Wishlist/View) */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <button className="bg-white p-2.5 rounded-full text-stone-700 hover:bg-stone-900 hover:text-white transition-colors shadow-md" title="Add to Wishlist">
                    <HiOutlineHeart size={20} />
                  </button>
                  <button className="bg-white p-2.5 rounded-full text-stone-700 hover:bg-stone-900 hover:text-white transition-colors shadow-md" title="Quick View">
                    <HiOutlineEye size={20} />
                  </button>
                </div>

                {/* Add to Cart Button (Slides up) */}
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <button className="w-full bg-white text-stone-900 font-semibold py-3 rounded-lg shadow-lg hover:bg-stone-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                    <HiShoppingBag size={18} /> Add to Cart
                  </button>
                </div>
              </div>

              {/* 2. Content Details */}
              <div className="p-5">
                {/* Category */}
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">
                  {product.category}
                </p>

                {/* Title */}
                <h3 className="font-serif text-lg font-medium text-stone-900 mb-2 truncate group-hover:text-amber-700 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className={i < Math.floor(product.rating) ? "fill-current" : "text-stone-300"} size={14} />
                    ))}
                  </div>
                  <span className="text-xs text-stone-400">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className="text-xl font-bold text-stone-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-stone-400 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
            <a href="/products" className="inline-flex items-center gap-1 text-stone-900 font-medium hover:text-amber-700 hover:gap-3 transition-all">
                View All Products <HiArrowRight />
            </a>
        </div>

      </div>
    </div>
  )
}

export default OurProducts;