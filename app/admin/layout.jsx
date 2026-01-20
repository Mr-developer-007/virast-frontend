"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Sidebar from './Componentsadmin/Slidebar'

const layout = ({ children }) => {
  const pathname = usePathname()

  return (
   <html lang="en">
      <body
 
      >
<Sidebar />

        {children}
   
      </body>
    </html>
  )
}

export default layout