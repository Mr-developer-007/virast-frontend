'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // Assuming you are using Next.js App Router
import { 
  FaTrash, 
  FaMinus, 
  FaPlus, 
  FaArrowRight, 
  FaLock, 
  FaGift, 
  FaArrowLeft 
} from 'react-icons/fa';

const CartPage = () => {
  // Mock Initial Cart Data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Royal Banarasi Silk Saree",
      variant: "Crimson Red",
      size: "Free Size",
      price: 12999,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=200",
      quantity: 1,
    },
    {
      id: 2,
      name: "Kundan Gold Plated Necklace",
      variant: "Gold/Pearl",
      size: "Standard",
      price: 4500,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=200",
      quantity: 2,
    }
  ]);

  // Handle Quantity Change
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  // Handle Remove Item
  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Calculate Totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 ? 0 : 250; // Free shipping logic
  const tax = subtotal * 0.12; // 12% GST example
  const total = subtotal + shipping + tax;

  // Format Currency
  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4 text-center">
        <div className="w-24 h-24 bg-stone-200 rounded-full flex items-center justify-center mb-6 text-stone-400">
           <FaGift size={40} />
        </div>
        <h2 className="text-3xl font-serif text-rose-900 mb-2">Your cart is empty</h2>
        <p className="text-stone-600 mb-8 max-w-md">
          It looks like you haven't added any traditional wear to your bag yet.
        </p>
        <Link href="/" className="bg-rose-900 text-white px-8 py-3 rounded hover:bg-rose-800 transition-colors flex items-center gap-2">
          <FaArrowLeft /> Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl md:text-4xl font-serif text-rose-900 mb-8 border-b border-stone-200 pb-4">
          Shopping Cart <span className="text-lg font-sans text-stone-500 font-normal">({cartItems.length} items)</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- LEFT COLUMN: Cart Items --- */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex flex-col sm:flex-row gap-6 transition-all hover:shadow-md">
                
                {/* Product Image */}
                <div className="w-full sm:w-32 h-32 bg-stone-100 rounded-lg overflow-hidden shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-stone-800 font-serif">{item.name}</h3>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-stone-400 hover:text-rose-900 transition-colors p-1"
                      >
                        <FaTrash />
                      </button>
                    </div>
                    <p className="text-sm text-stone-500 mt-1">{item.variant} | {item.size}</p>
                  </div>

                  <div className="flex justify-between items-end mt-4 sm:mt-0">
                    {/* Quantity Control */}
                    <div className="flex items-center border border-stone-200 rounded-md bg-stone-50">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-stone-200 text-stone-600 transition-colors"
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="px-3 font-medium text-sm w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-stone-200 text-stone-600 transition-colors"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                       <p className="font-bold text-lg text-rose-900">{formatPrice(item.price * item.quantity)}</p>
                       {item.quantity > 1 && (
                         <p className="text-xs text-stone-400">{formatPrice(item.price)} each</p>
                       )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link href="/" className="inline-flex items-center text-rose-900 hover:text-rose-700 font-medium mt-4">
              <FaArrowLeft className="mr-2" size={12} /> Continue Shopping
            </Link>
          </div>

          {/* --- RIGHT COLUMN: Order Summary --- */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-stone-100 sticky top-4">
              <h2 className="text-xl font-bold font-serif text-stone-800 mb-6">Order Summary</h2>

              <div className="space-y-3 text-stone-600 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-stone-800">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Estimate</span>
                  {shipping === 0 ? (
                    <span className="text-green-700 font-medium">Free</span>
                  ) : (
                    <span>{formatPrice(shipping)}</span>
                  )}
                </div>
                <div className="flex justify-between">
                  <span>GST (12%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
              </div>

              {/* Gift Wrap Option */}
              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200 mb-6">
                <FaGift className="text-rose-900" />
                <div className="text-sm">
                  <p className="font-medium text-stone-800">Is this a gift?</p>
                  <p className="text-stone-500 text-xs">Add a personalized message at checkout.</p>
                </div>
                <input type="checkbox" className="ml-auto accent-rose-900 h-4 w-4" />
              </div>

              <div className="border-t border-stone-200 pt-4 mb-6">
                <div className="flex justify-between items-center text-lg font-bold text-stone-900">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <p className="text-xs text-stone-400 mt-1 text-right">Inclusive of all taxes</p>
              </div>

              <button className="w-full bg-rose-900 text-white py-4 rounded-lg hover:bg-rose-800 transition-colors flex items-center justify-center gap-2 font-semibold shadow-lg shadow-rose-900/20">
                Proceed to Checkout <FaArrowRight />
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-stone-500">
                <FaLock /> Secure Checkout
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartPage