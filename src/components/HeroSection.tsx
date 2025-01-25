import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div>
        

        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
  <Image
    src={`/assets/image.png`}
    alt="Stylish sneaker placed against a vibrant background"
    objectFit="cover" 
    objectPosition="center" 
    layout="fill"
    priority 
    quality={85} 
   
  />
  </div>

  <div className="relative flex flex-col items-center text-center bg-white py-8 px-4 md:py-12">
        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest mb-2">
          First Look
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-gray-600 text-sm sm:text-lg max-w-md sm:max-w-2xl mx-auto mb-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse—designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Notify Me
          </button>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop Air Max
          </button>
        </div>
      </div>


    </div>
  )
}

export default HeroSection