import React from 'react'
import Image from 'next/image'

function FeaturedProducts() {
  return (
    <>
    <div className='flex flex-col'>
        <h1 className='line-height-[50px] text-[42px] font-bold'>Featured Products</h1>
        <div className='flex gap-[29px] m-[70px] '>
          <Image src="/product1.png" alt="hero" width={270} height={361}></Image>
          <Image src="/product2.png" alt="hero" width={270} height={361}></Image>
          <Image src="/product3.png" alt="hero" width={270} height={361}></Image>
          <Image src="/product4.png" alt="hero" width={270} height={361}></Image>
          </div>
          
      
        <div className='flex justify-center'>
        <Image src="/group.png" alt="hero" width={91} height={4}></Image>
        </div>
    </div>
    </>
  )
}

export default FeaturedProducts 