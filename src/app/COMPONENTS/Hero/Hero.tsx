import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-red-800'>
        <h1 className='text-center text-xl  h-10  underline hover:text-blue-500 cursor-pointer'>THIS IS Hero SECTION OF MY WEBSITE.</h1>
    <p className='text-yellow-500'>A low-price online supermarket that allows you to order products across categories like grocery, vegetables, beauty & wellness, household care, ....</p>
        <div className='bg-white border-2 border-red-500 rounded-lg p-4 w-[150px] text-center transition-transform duration-300 havor:scale-105'>
        <section >
           <Image 
           src="/shopping-cart-with-red-blue-plastic-lid_853677-210543.avif"
           alt='trolly'
           className='rounded-md'
           width={150}
           height={150}
           />
        </section>
       </div>
    </div>
  )
}

export default Hero