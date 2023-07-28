import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi'

const HeroBanner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            
            >

            <div>
                <img src="/slide-1.png" />
                <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-semibold bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] uppercase'> Shop Now </div>
            </div>
            <div>
                <img src="/slide-2.png" />
                <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-semibold bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] uppercase'> Shop Now </div>
            </div>
            <div>
                <img src="/slide-3.png" />
                <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-semibold bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] uppercase'> Shop Now </div>
            </div>
        </Carousel>
    )
}

export default HeroBanner