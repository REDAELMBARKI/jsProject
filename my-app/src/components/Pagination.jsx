import React from 'react'
import {  ChevronLeft } from 'lucide-react';


function Pagination() {
  return (
    <div className=" my-4 flex !justify-between px-4 w-full">
    <button className=" py-6 flex-col gap-0 btn ">
      <ChevronLeft />
      <p className=''>Exersice</p>
    </button>
    
    <button className="join-item btn">next</button>
  </div>
  )
}

export default Pagination