import React from 'react'

const TagLineCompo = ({ tag, heading }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center animate-fade-in-up">
      
      {/* 1. The Tagline (Small upper text) */}
      <div className="flex items-center gap-2 mb-3">
        {/* Left decorative line */}
        <span className="w-8 h-[1px] bg-rose-400"></span>
        
        <span className="text-rose-700 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
          {tag}
        </span>
        
        {/* Right decorative line */}
        <span className="w-8 h-[1px] bg-rose-400"></span>
      </div>

      {/* 2. The Main Heading (Big Serif text) */}
      {heading && (
        <h2 className="text-3xl md:text-5xl font-serif text-stone-900 capitalize leading-tight">
          {heading}
        </h2>
      )}

      {/* 3. Bottom Decorative Diamond Symbol (Royal Touch) */}
      <div className="mt-4 text-rose-800 opacity-60">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      </div>

    </div>
  )
}

export default TagLineCompo