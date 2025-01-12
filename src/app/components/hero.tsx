import React from 'react'

function Hero() {
  return (
    <main className='relative'>
        <img className='z-8 h-screen w-full object-cover object-center' src="https://static.vecteezy.com/system/resources/thumbnails/023/010/450/small_2x/the-cup-of-latte-coffee-with-heart-shaped-latte-art-and-ai-generated-free-photo.jpg" alt="" />
         <div className="absolute inset-0 flex flex-col justify-center items-end pr-10 bg-black bg-opacity-30 text-white">
          <h1 className="text-5xl font-bold mb-4 text-right">Welcome To Coffee Shop</h1>
          <p className="text-xl mb-8 text-right py-3 w-1/2">Start your day with the energy and warmth of our expertly brewed coffee. It's more than just a drink—it's an experience.</p>
          <button className="bg-yellow-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-500 mx-60">Order Now</button>
        </div>
      </main>   
  )
  }

export default Hero