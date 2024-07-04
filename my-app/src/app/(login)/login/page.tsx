import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-row w-full h-screen">
        <div className="relative bg-white w-[825px] border border-black">
          <Image
            src="/login/login.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className=" flex justify-center items-center  w-[615px] bg-white p-6 rounded-lg shadow-md border border-black">
          <div className="flex flex-col justify-center items-baseline">
            <Image src="/Icon/logo.svg" width={100} height={100} alt="" />
            <h2 className="text-center text-xl font-bold mb-4">Welcome Back</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page