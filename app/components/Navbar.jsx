"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { HiOutlineShoppingBag, HiOutlineHeart, HiOutlineUser, HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' }, 
    { name: 'Top Wear', path: '/top-wear' },
    { name: 'Bottom Wear', path: '/bottom-wear' },
    { name: 'Contact us', path: '/contact' }, 
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 font-sans">
      
    
      <div className="bg-rose-900 text-white text-xs py-1.5 text-center tracking-widest uppercase">
        Free Shipping on all pre-paid orders
      </div>

      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center h-20">

         
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-stone-800 hover:text-rose-700 text-2xl focus:outline-none"
            >
              {isMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>

          {/* 2. Logo Section */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start  ">
            <Link href="/">
              {/* Replace src with your actual logo path */}
              <img 
                src="/logo.png" 
                alt="Brand Logo" 
                className="h-16  object-contain cursor-pointer" 
              />
            </Link>
          </div>

         
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.path} 
                className="text-stone-600 hover:text-rose-800 font-medium text-sm uppercase tracking-wide transition duration-300 relative group"
              >
                {link.name}
             
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* 4. User Actions (Icons) */}
          <div className="hidden md:flex items-center space-x-6 text-stone-700">
            <button className="hover:text-rose-700 transition duration-300">
              <HiOutlineSearch size={22} />
            </button>
            <Link href="/wishlist" className="hover:text-rose-700 transition duration-300">
              <HiOutlineHeart size={22} />
            </Link>
            <Link href="/cart" className="relative hover:text-rose-700 transition duration-300">
              <HiOutlineShoppingBag size={22} />
            
              <span className="absolute -top-1 -right-1 bg-rose-700 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </Link>
            <Link href="/login" className="hover:text-rose-700 transition duration-300">
              <HiOutlineUser size={22} />
            </Link>
          </div>

    
          <div className="flex md:hidden text-stone-800">
            <HiOutlineShoppingBag size={24} />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full left-0 shadow-lg animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-stone-700 hover:text-rose-800 hover:bg-rose-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-stone-200 mt-4 pt-4 flex justify-around">
               <span className="flex flex-col items-center text-xs text-stone-500">
                 <HiOutlineUser size={20} className="mb-1"/> Account
               </span>
               <span className="flex flex-col items-center text-xs text-stone-500">
                 <HiOutlineHeart size={20} className="mb-1"/> Wishlist
               </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;