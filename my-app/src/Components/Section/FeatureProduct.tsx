import Image from 'next/image';
import React from 'react'

const FeatureProduct = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[32px] font-bold mt-10 dark:text-white"> Featured Projects</h1>
      <div className="flex flex-row gap-10 mt-10">
        <div className="flex flex-col  w-auto h-full  mt-5">
          <Image
            src="/product/1.png"
            width={500}
            height={500}
            alt="card"
            className="object-cover w-full h-full"
          />
          <div className="w-full h-auto  px-8 bg-[#EFF1F5] py-5 ">
            <h1 className="font-bold text-[24px]">Dark Wave</h1>
            <div className="flex justify-between mt-2 px-3">
              <p>Price</p>
              <p className="font-bold">$250.00</p>
            </div>
            <div>
              <div className="flex justify-between mt-2 px-3">
                <p>Owner</p>
                <div className="flex gap-2">
                  <Image
                    src="/Icon/profile.png"
                    width={25}
                    height="20"
                    alt=""
                    className="flex"
                  />
                  <p>
                    <span className="font-bold">James Stive</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="flex flex-col  w-auto h-full  mt-5">
          <Image
            src="/product/2.png"
            width={500}
            height={500}
            alt="card"
            className="object-cover w-full h-full"
          />
          <div className="w-full h-auto  px-8 bg-[#EFF1F5] py-5 ">
            <h1 className="font-bold text-[24px]">Dark Wave</h1>
            <div className="flex justify-between mt-2 px-3">
              <p>Price</p>
              <p className="font-bold">$250.00</p>
            </div>
            <div>
              <div className="flex justify-between mt-2 px-3">
                <p>Owner</p>
                <div className="flex gap-2">
                  <Image
                    src="/Icon/profile.png"
                    width={25}
                    height="20"
                    alt=""
                    className="flex"
                  />
                  <p>
                    <span className="font-bold">James Stive</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-auto h-full  mt-5">
          <Image
            src="/product/3.png"
            width={500}
            height={500}
            alt="card"
            className="object-cover w-full h-full"
          />
          <div className="w-full h-auto  px-8 bg-[#EFF1F5] py-5 ">
            <h1 className="font-bold text-[24px]">Dark Wave</h1>
            <div className="flex justify-between mt-2 px-3">
              <p>Price</p>
              <p className="font-bold">$250.00</p>
            </div>
            <div>
              <div className="flex justify-between mt-2 px-3">
                <p>Owner</p>
                <div className="flex gap-2">
                  <Image
                    src="/Icon/profile.png"
                    width={25}
                    height="20"
                    alt=""
                    className="flex"
                  />
                  <p>
                    <span className="font-bold">James Stive</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct