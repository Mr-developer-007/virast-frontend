"use client"
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { FiFilter, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const FilterCompo = () => {
  const searchParams = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [openSections, setOpenSections] = useState([])

  // Sample filter categories
  const filterCategories = [
    {
      id: 'category',
      title: 'Categories',
      options: ['Electronics', 'Clothing', 'Books', 'Home & Garden']
    },
    {
      id: 'price',
      title: 'Price Range',
      options: ['Under $25', '$25 - $50', '$50 - $100', 'Over $100']
    },
    {
      id: 'rating',
      title: 'Rating',
      options: ['4+ Stars', '3+ Stars', '2+ Stars', '1+ Stars']
    },
    {
      id: 'brand',
      title: 'Brand',
      options: ['Brand A', 'Brand B', 'Brand C', 'Brand D']
    }
  ]

  const toggleSection = (sectionId) => {
    setOpenSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-rose-900 text-white p-3 rounded-full shadow-lg hover:bg-rose-800 transition-colors"
        aria-label="Toggle filters"
      >
        {isFilterOpen ? <FiX size={24} /> : <FiFilter size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isFilterOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      {/* Filter Sidebar */}
      <div className={`
        fixed top-14 lg:top-0 lg:sticky  left-0 h-full lg:h-auto
        w-80 lg:w-64
        bg-white shadow-xl lg:shadow-none
        transform transition-transform duration-300 ease-in-out
        z-40 lg:z-auto
        ${isFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full overflow-y-auto p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-stone-600">Filters</h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="lg:hidden text-stone-600 hover:text-rose-800"
              aria-label="Close filters"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Filter Sections */}
          <div className="space-y-6">
            {filterCategories.map(category => {
              const isOpen = openSections.includes(category.id)
              return (
                <div key={category.id} className="border-b border-stone-200 pb-6">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(category.id)}
                    className="flex items-center justify-between w-full text-left mb-4"
                  >
                    <h3 className="text-lg font-semibold text-stone-600 hover:text-rose-800 transition-colors">
                      {category.title}
                    </h3>
                    {isOpen ? (
                      <FiChevronUp className="text-stone-600" />
                    ) : (
                      <FiChevronDown className="text-stone-600" />
                    )}
                  </button>

                  {/* Section Content */}
                  <div className={`space-y-3 ${isOpen ? 'block' : 'hidden lg:block'}`}>
                    {category.options.map((option, index) => {
                      const optionId = `${category.id}-${index}`
                      return (
                        <div key={optionId} className="flex items-center">
                          <input
                            type="checkbox"
                            id={optionId}
                            className="w-4 h-4 text-rose-800 bg-stone-100 border-stone-300 rounded focus:ring-rose-800 focus:ring-2"
                          />
                          <label
                            htmlFor={optionId}
                            className="ml-3 text-stone-600 hover:text-rose-800 cursor-pointer transition-colors"
                          >
                            {option}
                          </label>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-4">
            <button className="w-full bg-rose-900 text-white py-3 rounded-lg hover:bg-rose-800 transition-colors font-medium">
              Apply Filters
            </button>
            <button className="w-full border border-stone-300 text-stone-600 py-3 rounded-lg hover:text-rose-800 hover:border-rose-800 transition-colors font-medium">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterCompo