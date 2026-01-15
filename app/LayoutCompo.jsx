"use client"
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { usePathname } from 'next/navigation'

const LayoutCompo = ({ children }) => {
    const pathname = usePathname()
  return (
    <>
    
      {!pathname.includes("/admin") && <Navbar />}
        {children}
     {!pathname.includes("/admin") &&    <Footer /> }
    </>
  )
}

export default LayoutCompo