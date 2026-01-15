'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaTrash, 
  FaShoppingCart, 
  FaRegHeart, 
  FaArrowLeft, 
  FaHeartBroken 
} from 'react-icons/fa';

const WishlistPage = () => {
  // Mock Data (simulating items from your specific categories)
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Phulkari Dupatta - Multi",
      category: "The Punjabi Edit",
      price: 2499,
      originalPrice: 3500,
      inStock: true,
      image: "https://images.unsplash.com/photo-1609357602146-5dd91c06886c?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      name: "Kundan & Pearl Earrings",
      category: "Jewelry",
      price: 1200,
      originalPrice: 1800,
      inStock: true,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      name: "Bandhani Silk Saree",
      category: "Royal Rajasthan",
      price: 8999,
      originalPrice: 12000,
      inStock: false, // Out of stock example
      image: "https://images.unsplash.com/photo-1610030469668-96536b12d596?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 4,
      name: "Hand-Embroidered Jutti",
      category: "Footwear",
      price: 1850,
      originalPrice: 2200,
      inStock: true,
      image: "https://images.unsplash.com/photo-1560769623-4674eb2d398d?auto=format&fit=crop&q=80&w=400"
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const moveToCart = (item) => {
    // Logic to add to cart context would go here
    alert(`Moved ${item.name} to cart!`);
    removeFromWishlist(item.id);
  };

  // Format Currency
  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // --- Empty State ---
  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4 text-center font-sans">
        <div className="w-20 h-20 bg-stone-200 rounded-full flex items-center justify-center mb-6 text-stone-400">
           <FaHeartBroken size={32} />
        </div>
        <h2 className="text-3xl font-serif text-rose-900 mb-2">Your wishlist is empty</h2>
        <p className="text-stone-600 mb-8 max-w-md">
          Save your favorite traditional styles here to revisit them later.
        </p>
        <Link href="/" className="bg-rose-900 text-white px-8 py-3 rounded hover:bg-rose-800 transition-colors flex items-center gap-2 shadow-lg shadow-rose-900/20">
          <FaArrowLeft /> Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-stone-200 pb-4">
          <h1 className="text-3xl font-serif text-rose-900">
            My Wishlist <span className="text-lg font-sans text-stone-500 font-normal">({wishlistItems.length})</span>
          </h1>
          <Link href="/" className="text-stone-500 hover:text-rose-900 text-sm flex items-center gap-1 mt-2 md:mt-0 transition-colors">
            <FaArrowLeft /> Back to Shop
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 group hover:shadow-lg transition-all duration-300 relative flex flex-col">
              
              {/* Remove Button (Absolute) */}
              <button 
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-400 hover:text-red-600 hover:bg-white transition-all shadow-sm"
                title="Remove from Wishlist"
              >
                <FaTrash size={12} />
              </button>

              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-stone-200">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {!item.inStock && (
                  <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                    <span className="bg-stone-800 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">Out of Stock</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs text-stone-500 mb-1">{item.category}</p>
                <h3 className="font-serif text-lg text-stone-800 truncate mb-2">{item.name}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold text-rose-900">{formatPrice(item.price)}</span>
                  <span className="text-xs text-stone-400 line-through">{formatPrice(item.originalPrice)}</span>
                  <span className="text-xs text-green-700 font-medium ml-auto">
                    {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                  </span>
                </div>

                {/* Action Button */}
                <div className="mt-auto">
                   {item.inStock ? (
                     <button 
                       onClick={() => moveToCart(item)}
                       className="w-full py-2 border border-rose-900 text-rose-900 rounded hover:bg-rose-900 hover:text-white transition-colors flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wide"
                     >
                       <FaShoppingCart size={14} /> Move to Cart
                     </button>
                   ) : (
                     <button 
                       disabled 
                       className="w-full py-2 border border-stone-300 text-stone-400 rounded cursor-not-allowed text-sm font-medium uppercase tracking-wide"
                     >
                       Notify Me
                     </button>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default WishlistPage