import React from 'react';
import { HiOutlineShieldCheck, HiOutlineTruck, HiOutlineSparkles, HiOutlineRefresh } from "react-icons/hi";

const FeaturesStrip = () => {
  const features = [
    {
      id: 1,
      icon: <HiOutlineSparkles className="text-3xl text-rose-700" />,
      title: "Authentic Quality",
      desc: "Handpicked directly from artisans"
    },
    {
      id: 2,
      icon: <HiOutlineTruck className="text-3xl text-rose-700" />,
      title: "Express Shipping",
      desc: "Free shipping on orders over ₹1999"
    },
    {
      id: 3,
      icon: <HiOutlineShieldCheck className="text-3xl text-rose-700" />,
      title: "Secure Payment",
      desc: "100% safe & encrypted checkout"
    },
    {
      id: 4,
      icon: <HiOutlineRefresh className="text-3xl text-rose-700" />,
      title: "Easy Returns",
      desc: "Hassle-free 7 day return policy"
    }
  ];

  return (
    <div className="bg-stone-50 border-y border-stone-200 my-20">
      <div className="container mx-auto px-4  py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
          
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center gap-4 px-4 pt-4 sm:pt-0 justify-center sm:justify-start hover:transform hover:translate-x-1 transition-transform duration-300">
              <div className="p-3 bg-white rounded-full shadow-sm border border-stone-100">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-serif text-stone-900 font-medium text-lg">
                  {feature.title}
                </h4>
                <p className="text-sm text-stone-500">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default FeaturesStrip;