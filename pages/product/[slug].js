import React from 'react'
import Wrapper from '@/components/Wrapper'
import ProductDetailCarousal from '@/components/ProductDetailCarousal'
import ReleatedProducts from '@/components/ReleatedProducts'

const ProductDetail = () => {
    return (
        <div className='w-full md:py-10'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-'>
                        <ProductDetailCarousal />
                    </div>

                    <div className='flex-[1] py-3'>
                        <div className='text-[34px] font-semibold mb-2'>
                            Jordan Retro 6G
                        </div>

                        <div className='text-lg font-semibold mb-5'>
                            Men&apos;s Golf Shoes
                        </div>

                        <div className='text-lg font-semibold'>
                            MRP : ₹ 19 626.00
                        </div>

                        <div className='text-md font-medium text-black/[0.5] mb-20'>
                            incl. all taxes and duties
                        </div>

                        <div className='mb-10'>
                            <div className='flex justify-between mb-2'>
                                <div className='text-md font-semibold'>
                                    Select Size
                                </div>

                                <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                                    Select Guide
                                </div>
                            </div>

                            <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 06
                                </div>

                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 07
                                </div>

                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 08
                                </div>

                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 09
                                </div>

                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 10
                                </div>

                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 11
                                </div>

                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 12
                                </div>
                            </div>

                            <div className='text-red-500 mt-1 font-medium'>
                                Size selection is required
                            </div>

                            <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                                Add to Cart
                            </button>

                            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                                Whishlist
                            </button>

                            <div>
                                <div className='text-lg font-bold mb-5'>
                                    Product details 
                                </div>

                                <div className='text-md mb-5'>
                                It took me around one month to bring you this fully functional, fully responsive and beautiful looking full stack e-commerce project with the latest trending top notch technologies, I have covered all important topics of creating a ecommerce website such as product listing, product detail page, shopping cart, payment gateway and so on…
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div>
                    <ReleatedProducts/>
                </div>
            </Wrapper>
        </div>
    )
}

export default ProductDetail