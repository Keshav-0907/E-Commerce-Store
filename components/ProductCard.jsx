import React from 'react'
import Link from 'next/link'

const ProductCard = () => {
  return (

    <Link href='/product/1'>
      <img className='w-full' src='/product-1.webp' alt='err' />

      <div className='p-3'>
        <h2> Product Name </h2>

        <div className='flex justify-between'>

          <div className='flex items-center gap-3'>
            <p> ₹ 500  </p>
            <p className='line-through text-sm text-gray-500'> ₹ 850 </p>
          </div>

          <div className='text-green-400 font-semibold'>
            <p>20% Off</p>
          </div>

        </div>
      </div>
    </Link>
  )
}

export default ProductCard