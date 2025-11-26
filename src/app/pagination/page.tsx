"use client"
import products from '@/libs/Products'
import React, { useState } from 'react'

const Pagination = () => {
    const totalProducts = products.length;
    const productPerPage = 8;
    const totalPages = Math.ceil(totalProducts/productPerPage);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const skip = (currentPage -1) * productPerPage;

    const handleNext = () =>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1);
        }
    }
    const handlePrevious = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }

  return (
    <div className='flex justify-center flex-col min-h-screen items-center'>
      <div className='grid grid-cols-4 gap-5'>
        {
            products.slice(skip, skip + productPerPage).map(product =>
                <div className='bg-gray-100 rounded-lg p-5 space-y-2' key={product.id}>
                    <h2 className='text-amber-600 text-xl font-semibold'>{product.name}</h2>
                    <p className='text-lg font-medium text-gray-700'>{product.title}</p>
                    <p className='text-sm text-gray-600'>{product.description}</p>
                    <p className='text-sm text-green-500 font-bold'>price: {product.price}</p>
                    <p className='text-sm text-green-500 font-bold'>quantity: {product.quantity}</p>
                </div>
            )
        }
      </div>
      <div className='space-x-5 mt-5'> 
        <button onClick={handlePrevious} className='cursor-pointer border border-amber-400 px-4 py-2 rounded-lg bg-gray-100 hover:bg-white'>Previous</button>
        {
            Array(totalPages).fill(null).map((page, index) => 
                <button onClick={() => setCurrentPage(index + 1)} className={`cursor-pointer border border-amber-400 px-4 py-2 rounded-lg ${currentPage === index + 1 ? "bg-green-400" : "bg-gray-100"} hover:bg-white`} key={index}>
                    {index + 1}
                </button>
            )
        }
        <button onClick={handleNext} className='cursor-pointer border border-amber-400 px-4 py-2 rounded-lg bg-gray-100 hover:bg-white'>Next</button>
      </div>
    </div>
  )
}

export default Pagination
