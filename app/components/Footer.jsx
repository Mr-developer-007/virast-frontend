'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaPinterestP,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 font-sans border-t-[8px] border-rose-900">
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4  py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* 1. Brand & Heritage Story */}
          <div className="space-y-6">
            {/* Logo Placeholder */}
            <div className="relative bg-white w-fit pe-5 ">
               {/* Ensure your logo-white.png is in the public folder */}
               <Image 
                src="/logo.png" 
                alt="Brand Logo" 
                width={260} 
                height={100} 
                className="" 
               />
            </div>
            
            <p className="text-stone-400 text-sm leading-relaxed font-light">
              Weaving stories of India's rich heritage into every thread. Our collection celebrates the timeless artistry of master craftsmen, bringing authentic tradition to your modern wardrobe.
            </p>

            {/* Social Icons - Minimal & Clean */}
            <div className="flex gap-4 pt-2">
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaPinterestP />} />
              <SocialIcon icon={<FaTwitter />} />
            </div>
          </div>

          {/* 2. Navigation Links (Grouped for Simplicity) */}
          <div className="flex gap-12 sm:gap-20">
            {/* Shop Links */}
            <div>
              <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Shop</h4>
              <ul className="space-y-3 text-sm">
                <FooterLink href="/sarees">Sarees</FooterLink>
                <FooterLink href="/lehengas">Lehengas</FooterLink>
                <FooterLink href="/suits">Salwar Suits</FooterLink>
                <FooterLink href="/jewelry">Jewelry</FooterLink>
                <FooterLink href="/new">New Arrivals</FooterLink>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Help</h4>
              <ul className="space-y-3 text-sm">
                <FooterLink href="/track">Track Order</FooterLink>
                <FooterLink href="/shipping">Shipping</FooterLink>
                <FooterLink href="/returns">Returns</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
                <FooterLink href="/about">Our Story</FooterLink>
              </ul>
            </div>
          </div>

          {/* 3. Newsletter & Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4 tracking-wide">Stay Connected</h4>
            <p className="text-stone-400 text-sm mb-4">
              Join our family for exclusive updates and cultural stories.
            </p>
            
            {/* Simple Form */}
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded focus:outline-none focus:border-rose-700 text-white placeholder-stone-500 transition-colors"
              />
              <button className="w-full bg-rose-700 text-white px-6 py-3 rounded hover:bg-rose-800 transition-all duration-300 uppercase tracking-widest text-xs font-bold">
                Subscribe
              </button>
            </form>

            <div className="mt-8 text-sm text-stone-400">
              <p>123 Heritage Lane, New Delhi, India</p>
              <p className="hover:text-rose-400 cursor-pointer mt-1">hello@brandname.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Payment */}
      <div className="bg-black/30 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <p className="text-xs text-stone-500 font-light">
              &copy; {new Date().getFullYear()} Heritage Threads. All rights reserved.
            </p>

            <div className="flex gap-4 text-xl text-stone-600">
              <FaCcVisa className="hover:text-stone-400 transition-colors" />
              <FaCcMastercard className="hover:text-stone-400 transition-colors" />
              <FaCcPaypal className="hover:text-stone-400 transition-colors" />
              <FaCcApplePay className="hover:text-stone-400 transition-colors" />
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

// ==================== Simple Helper Components ====================

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} className="group flex items-center gap-2 hover:text-rose-400 transition-colors duration-300">
       <span className="h-px w-0 bg-rose-500 group-hover:w-2 transition-all duration-300"></span>
       {children}
    </Link>
  </li>
);

const SocialIcon = ({ icon }) => (
  <a 
    href="#" 
    className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-800 hover:bg-rose-700 text-stone-400 hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;