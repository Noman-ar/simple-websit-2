import React from 'react'
import Header from './COMPONENTS/Header/Header'
import Footer from './COMPONENTS/Footer/Footer'
import Hero from './COMPONENTS/Hero/Hero'
import Image from 'next/image'
const Home = () => {
  return (
    <div className='bg-orange-500 '>
      <h1 className='text-xl text-center underline '> ONLINE GROCERY STORE</h1>
      <p className='text-xl text-center ' >THIS IS MY HOME PAGE.</p>
      <div>
       <Header/>
       <Hero />
       <Footer/>
      </div>
      
    </div>
  )
}

export default Home