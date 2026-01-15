'use client';

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Pagination, Zoom } from 'swiper/modules';
import { 
  FaStar, 
  FaRegHeart, 
  FaHeart,
  FaShoppingCart, 
  FaShippingFast, 
  FaRulerHorizontal,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaShareAlt,
  FaCheck,
  FaTag,
  FaExpand,
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaLeaf
} from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdLocalOffer, MdOutlineSecurity } from 'react-icons/md';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import OurProducts from '@/app/components/OurProducts';

export default function SingleProductPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSize, setActiveSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Product Details');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedColor, setSelectedColor] = useState('crimson');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  
  const shareButtonRef = useRef(null);
  const sizeGuideRef = useRef(null);

  // Mock Data
  const product = {
    title: "Royal Banarasi Silk Saree",
    price: "₹12,999",
    originalPrice: "₹18,500",
    description: "Handwoven in the heart of Varanasi, this crimson red silk saree features intricate gold zari work inspired by Mughal architecture. Perfect for weddings and festive occasions.",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000"
    ],
    sizes: [
      { size: 'XS', status: 'available' },
      { size: 'S', status: 'available' },
      { size: 'M', status: 'available' },
      { size: 'L', status: 'available' },
      { size: 'XL', status: 'low-stock' },
      { size: 'XXL', status: 'out-of-stock' }
    ],
    colors: [
      { name: 'Crimson Red', value: 'crimson', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800' },
      { name: 'Royal Blue', value: 'royalblue', image: 'https://images.unsplash.com/photo-1583391733958-e026b134633d?auto=format&fit=crop&q=80&w=800' },
      { name: 'Emerald Green', value: 'emerald', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800' },
      { name: 'Gold', value: 'gold', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800' }
    ],
    reviews: 128,
    rating: 4.8,
    inStock: true,
    deliveryTime: '5-7 days',
    sku: 'BAN-2024-SILK',
    tags: ['Premium', 'Handwoven', 'Eco-Friendly', 'Made in India']
  };

  // Benefits Data
  const benefits = [
    { icon: <FaTruck />, title: 'Free Shipping', desc: 'On orders above ₹2000' },
    { icon: <FaUndo />, title: 'Easy Returns', desc: '15 days return policy' },
    { icon: <FaShieldAlt />, title: 'Authentic', desc: '100% Genuine Product' },
    { icon: <FaLeaf />, title: 'Eco-Friendly', desc: 'Sustainable Packaging' }
  ];

  // Reviews Data
  const reviews = [
    { name: 'Priya Sharma', rating: 5, date: '2 days ago', comment: 'Absolutely stunning! The zari work is beyond beautiful. Perfect for my wedding.' },
    { name: 'Anjali Patel', rating: 4, date: '1 week ago', comment: 'Great quality fabric. The color is exactly as shown. Highly recommended!' },
    { name: 'Rohit Verma', rating: 5, date: '2 weeks ago', comment: 'Bought this for my wife. She loved it! The craftsmanship is excellent.' }
  ];

  // Handle quantity change
  const handleQuantityChange = (value) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  // Copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-stone-50 font-serif text-stone-800">
      
      {/* --- Breadcrumbs --- */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-stone-500">
            <a href="/" className="hover:text-rose-900 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/collections/ethnic" className="hover:text-rose-900 transition-colors">Ethnic Wear</a>
            <span className="mx-2">/</span>
            <a href="/collections/sarees" className="hover:text-rose-900 transition-colors">Sarees</a>
            <span className="mx-2">/</span>
            <span className="text-rose-900 font-medium truncate">{product.title}</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* --- LEFT: Image Gallery --- */}
          <div className="space-y-4">
            {/* Main Image with Zoom */}
            <div className="relative group">
              <Swiper
                style={{
                  '--swiper-navigation-color': '#9f1239',
                  '--swiper-pagination-color': '#9f1239',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                zoom={true}
                modules={[FreeMode, Navigation, Thumbs, Zoom]}
                className="h-[500px] w-full rounded-xl shadow-lg overflow-hidden border border-stone-200"
              >
                {product.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-zoom-container">
                      <img 
                        src={img} 
                        alt={`View ${index}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Zoom Indicator */}
              <div className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-sans flex items-center gap-1 text-stone-700">
                <FaExpand size={12} /> Click to zoom
              </div>
              
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 z-10 bg-rose-900 text-white px-3 py-1.5 rounded-lg font-bold text-sm uppercase tracking-wider">
                30% OFF
              </div>
            </div>

            {/* Thumbnail Slider */}
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={8}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
              className="thumbs-slider h-28 w-full"
            >
              {product.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative rounded-lg overflow-hidden border-2 border-transparent hover:border-rose-900 transition-all duration-300 cursor-pointer group h-full">
                    <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Color Variants */}
            <div className="pt-4">
              <h4 className="font-semibold text-stone-800 mb-3">Color Options</h4>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`group relative flex flex-col items-center ${
                      selectedColor === color.value ? 'ring-2 ring-rose-900 ring-offset-2' : ''
                    }`}
                  >
                    <div 
                      className="w-12 h-12 rounded-full border-2 border-stone-200 overflow-hidden shadow-sm"
                      style={{ backgroundColor: color.value === 'crimson' ? '#dc143c' : color.value }}
                    >
                      <img 
                        src={color.image} 
                        alt={color.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="text-xs mt-1 text-stone-600">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: Product Details --- */}
          <div className="flex flex-col h-full">
            {/* Title & Tags */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                {product.tags.map((tag) => (
                  <span key={tag} className="bg-rose-50 text-rose-900 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                    <FaTag size={10} /> {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">{product.title}</h1>
              <div className="text-sm text-stone-500 mt-1 font-sans">SKU: {product.sku}</div>
            </div>
            
            {/* Rating & Reviews */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1 bg-stone-100 px-3 py-1.5 rounded-full">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? 'fill-current' : 'fill-yellow-200'} />
                  ))}
                </div>
                <span className="text-stone-700 font-bold ml-1">{product.rating}</span>
              </div>
              <a href="#reviews" className="text-sm text-stone-500 hover:text-rose-900 transition-colors font-sans">
                ({product.reviews} Reviews)
              </a>
              <div className={`px-3 py-1.5 rounded-full text-sm font-sans ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </div>
            </div>

            {/* Price Section */}
            <div className="mb-6 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="flex items-end gap-4">
                <span className="text-3xl font-bold text-rose-900">{product.price}</span>
                <span className="text-lg text-stone-400 line-through">{product.originalPrice}</span>
                <span className="text-sm text-green-800 bg-green-100 px-3 py-1 rounded-full font-bold">
                  Save ₹5,501
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-stone-600 text-sm font-sans">
                <MdLocalOffer className="text-rose-900" />
                <span>EMI available starting from ₹1,299/month</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-stone-600 leading-relaxed mb-6 font-sans text-base">
              {product.description}
            </p>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent my-6"></div>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-800 text-lg">Select Size</span>
                  <span className="text-xs text-stone-500 font-sans">(In inches)</span>
                </div>
                <button 
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="flex items-center gap-1 text-sm text-rose-900 hover:text-rose-700 font-sans font-medium"
                >
                  <FaRulerHorizontal /> Size Guide
                </button>
              </div>
              
              {/* Size Guide Modal */}
              {showSizeGuide && (
                <div ref={sizeGuideRef} className="mb-4 p-4 bg-white border border-stone-200 rounded-xl shadow-lg">
                  <h4 className="font-bold text-stone-800 mb-2">Size Guide</h4>
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <div className="font-bold text-stone-700">Size</div>
                    <div className="font-bold text-stone-700">Bust</div>
                    <div className="font-bold text-stone-700">Waist</div>
                    <div className="font-bold text-stone-700">Hips</div>
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                      <>
                        <div className="font-medium">{size}</div>
                        <div>32-34"</div>
                        <div>26-28"</div>
                        <div>36-38"</div>
                      </>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.size}
                    onClick={() => size.status !== 'out-of-stock' && setActiveSize(size.size)}
                    disabled={size.status === 'out-of-stock'}
                    className={`px-5 py-3 rounded-lg border font-medium transition-all duration-300 relative
                      ${activeSize === size.size 
                        ? 'bg-rose-900 text-white border-rose-900 shadow-lg shadow-rose-900/20' 
                        : 'border-stone-300 text-stone-700 hover:border-rose-900 hover:text-rose-900 hover:bg-rose-50'
                      }
                      ${size.status === 'out-of-stock' ? 'opacity-40 cursor-not-allowed' : ''}
                      ${size.status === 'low-stock' ? 'ring-1 ring-yellow-500' : ''}
                    `}
                  >
                    {size.size}
                    {size.status === 'low-stock' && (
                      <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-[10px] px-1 rounded-full">Low</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Quantity Selector */}
              <div className="flex items-center border border-stone-300 rounded-xl w-fit overflow-hidden shadow-sm">
                <button 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-4 py-3.5 hover:bg-stone-100 text-stone-600 transition-colors font-bold text-lg"
                  disabled={quantity <= 1}
                >-</button>
                <span className="px-4 font-bold w-12 text-center text-lg">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-4 py-3.5 hover:bg-stone-100 text-stone-600 transition-colors font-bold text-lg"
                  disabled={quantity >= 10}
                >+</button>
              </div>

              {/* Action Buttons */}
              <div className="flex-1 flex gap-3">
                <button className="flex-1 bg-rose-900 text-white px-8 py-3.5 rounded-xl hover:bg-rose-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-rose-900/30 hover:shadow-xl hover:shadow-rose-900/40 font-sans uppercase tracking-wide font-bold text-base group">
                  <FaShoppingCart className="group-hover:scale-110 transition-transform" /> 
                  Add to Cart
                </button>
                
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`px-6 py-3.5 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2 font-sans font-medium
                    ${isWishlisted 
                      ? 'bg-rose-50 border-rose-900 text-rose-900' 
                      : 'border-stone-300 text-stone-600 hover:border-rose-900 hover:text-rose-900 hover:bg-rose-50'
                    }`}
                >
                  {isWishlisted ? <FaHeart className="text-rose-900" /> : <FaRegHeart />}
                  {isWishlisted ? 'Saved' : 'Wishlist'}
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="mb-6">
              <div className="bg-gradient-to-r from-stone-50 to-white p-5 rounded-xl border border-stone-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-rose-100 p-2.5 rounded-lg">
                    <FaShippingFast className="text-rose-900" size={24} />
                  </div>
                  <div className="font-sans">
                    <p className="font-bold text-stone-800 text-lg">Free Shipping & Returns</p>
                    <p className="text-stone-600">Estimated delivery: {product.deliveryTime}</p>
                    <p className="text-sm text-stone-500 mt-1">Free shipping on all pre-paid orders. 15-day easy returns.</p>
                  </div>
                </div>
                
                {/* Pin Code Checker */}
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Enter PIN code"
                    className="flex-1 border border-stone-300 rounded-lg px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    maxLength={6}
                  />
                  <button className="bg-stone-800 text-white px-6 py-3 rounded-lg hover:bg-stone-900 transition-colors font-sans font-medium">
                    Check
                  </button>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-200">
                  <div className="text-rose-900">{benefit.icon}</div>
                  <div>
                    <p className="font-bold text-stone-800 text-sm">{benefit.title}</p>
                    <p className="text-xs text-stone-500">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Share */}
            <div className="flex items-center justify-between pt-6 border-t border-stone-200">
              <div className="flex items-center gap-4">
                <span className="text-sm text-stone-600 font-sans">Share:</span>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <FaFacebookF />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                    <FaInstagram />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                    <FaWhatsapp />
                  </button>
                  <button 
                    ref={shareButtonRef}
                    onClick={() => setShowShareModal(!showShareModal)}
                    className="w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center hover:bg-stone-600 hover:text-white transition-colors relative"
                  >
                    <FaShareAlt />
                  </button>
                </div>
              </div>
              
              {/* Share Modal */}
              {showShareModal && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-stone-200 z-50 p-4">
                  <p className="font-bold text-stone-800 mb-3">Share this product</p>
                  <input 
                    type="text" 
                    value={window.location.href}
                    readOnly
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm mb-3"
                  />
                  <button 
                    onClick={copyToClipboard}
                    className="w-full bg-rose-900 text-white py-2.5 rounded-lg hover:bg-rose-800 transition-colors font-sans"
                  >
                    Copy Link
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* --- Tabs Section --- */}
        <div className="mt-16">
          <div className="flex overflow-x-auto scrollbar-hide border-b border-stone-200 mb-8">
            {['Product Details', 'Material & Care', 'Reviews', 'Shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-8 text-lg font-medium whitespace-nowrap transition-all relative
                  ${activeTab === tab 
                    ? 'text-rose-900' 
                    : 'text-stone-400 hover:text-stone-600'
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rose-900 to-rose-700 rounded-t-full"></span>
                )}
              </button>
            ))}
          </div>
          
          <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm">
            {activeTab === 'Product Details' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-xl text-stone-800 mb-3">Product Specifications</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p><strong className="text-stone-700">Fabric:</strong> Pure Silk with Zari weaving</p>
                      <p><strong className="text-stone-700">Occasion:</strong> Wedding, Reception, Festivals</p>
                      <p><strong className="text-stone-700">Pattern:</strong> Floral & Mughal Motifs</p>
                    </div>
                    <div className="space-y-2">
                      <p><strong className="text-stone-700">Origin:</strong> Varanasi, India</p>
                      <p><strong className="text-stone-700">Blouse Piece:</strong> Included</p>
                      <p><strong className="text-stone-700">Length:</strong> 5.5 meters</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-xl text-stone-800 mb-3">Handwoven Craftsmanship</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Each thread in this saree is woven by master artisans with over 20 years of experience. 
                    The intricate zari work uses real gold and silver threads, making each piece unique.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'Material & Care' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-xl text-stone-800 mb-3">Care Instructions</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-green-600 mt-1" />
                      <span>Dry Clean Only - Do not machine wash</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-green-600 mt-1" />
                      <span>Store in a muslin cloth to maintain the shine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-green-600 mt-1" />
                      <span>Avoid direct sunlight when drying</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-green-600 mt-1" />
                      <span>Use mild detergent for stains</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'Reviews' && (
              <div id="reviews">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h4 className="font-bold text-2xl text-stone-800">Customer Reviews</h4>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                      </div>
                      <span className="text-stone-600">({product.reviews} reviews)</span>
                    </div>
                  </div>
                  <button className="bg-rose-900 text-white px-6 py-3 rounded-lg hover:bg-rose-800 transition-colors font-sans">
                    Write a Review
                  </button>
                </div>
                
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="p-6 border border-stone-200 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center font-bold text-stone-700">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-stone-800">{review.name}</p>
                            <div className="flex items-center gap-2">
                              <div className="flex text-yellow-500 text-sm">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar key={i} className={i < review.rating ? 'fill-current' : 'fill-yellow-200'} />
                                ))}
                              </div>
                              <span className="text-stone-500 text-sm">{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-stone-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'Shipping' && (
              <div className="space-y-6">
                <h4 className="font-bold text-xl text-stone-800">Shipping & Returns</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-stone-50 rounded-xl">
                    <TbTruckDelivery className="text-rose-900 text-3xl mb-3" />
                    <h5 className="font-bold text-lg mb-2">Shipping Policy</h5>
                    <ul className="space-y-2 text-stone-600">
                      <li>• Free shipping on all orders above ₹2000</li>
                      <li>• Standard delivery: 5-7 business days</li>
                      <li>• Express delivery available at extra cost</li>
                      <li>• Cash on delivery available</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-xl">
                    <MdOutlineSecurity className="text-rose-900 text-3xl mb-3" />
                    <h5 className="font-bold text-lg mb-2">Return Policy</h5>
                    <ul className="space-y-2 text-stone-600">
                      <li>• 15-day easy return policy</li>
                      <li>• Items must be unused with tags attached</li>
                      <li>• Free returns on prepaid orders</li>
                      <li>• Refund processed within 7 business days</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- Related Products --- */}
        {/* <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-stone-800 mb-2">You May Also Like</h2>
            <p className="text-stone-600">Complete your traditional look with these matching pieces</p>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-900 to-rose-700 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Navigation]}
            className="pb-12 px-2"
          >
            {[1,2,3,4,5,6].map((item) => (
              <SwiperSlide key={item}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <div className="aspect-square bg-stone-100 relative">
                      <img 
                        src={`https://source.unsplash.com/random/400x500?ethnic,fashion&sig=${item}`} 
                        alt="Related" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-11/12 bg-rose-900 text-white py-3 text-sm font-bold uppercase tracking-wider hover:bg-rose-800 transition-colors rounded-lg shadow-xl">
                        Add to Cart
                      </button>
                    </div>
                    {item % 3 === 0 && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                        NEW
                      </div>
                    )}
                  </div>
                  <div className="p-2">
                    <h3 className="font-bold text-stone-800 group-hover:text-rose-900 transition-colors">Traditional Suit Set</h3>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-rose-900">₹4,500</span>
                        <span className="text-stone-400 line-through text-sm">₹6,000</span>
                      </div>
                      <div className="flex text-yellow-500 text-sm">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
        <OurProducts />

      </div>
    </div>
  );
}