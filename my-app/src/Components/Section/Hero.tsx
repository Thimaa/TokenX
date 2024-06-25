import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div className="flex w-full flex-col xl:flex-row items-center justify-center gap-32 px-10 dark:bg-black">
      <div className=" flex-col items-center ">
        <h1 className="text-[px] sm:text-[36px] xl:text-[96px] font-semibold   text-center xl:text-left dark:text-white">
          Tokenx
        </h1>
        <h4 className="text-[24px] font-light max-w-[700px] dark:text-white">
          TokenX is the premier platform for investors and enthusiasts to buy,
          sell, and create ERC20 tokens.
        </h4>
        <button className="w-[200px] h-[50px] font-bold bg-[#0243EA] rounded-[11px] mt-10 dark:text-white">Marketplace</button>
      </div>

      <div className="flex items-center justify-center  z-10 order-1 xl:order-2">
        <Image
          src="/Hero/Hero.png"
          alt="logo"
          width={1000}
          height={1000}
          className="max-w-[400px] w-full h-100vh"
        />
      </div>
    </div>
  );
}

export default Hero