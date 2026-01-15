import React, { Suspense } from 'react'
import FilterCompo from './FilterCompo'
import OurProducts from '../components/OurProducts'

const page = () => {

  return (
    <div className='flex '>
        <Suspense fallback={null} >
        <FilterCompo />
    </Suspense>
        
        <div className='w-full min-h-screen'>
      <OurProducts />




        </div>
        
        </div>
  )
}

export default page