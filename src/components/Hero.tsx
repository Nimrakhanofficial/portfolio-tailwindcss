import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile1.jpg)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "35%"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'> 
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">I am </p>
            <p data-aos="zoom-in-up">Nimra</p>
            <p data-aos="zoom-in-up">Khan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
