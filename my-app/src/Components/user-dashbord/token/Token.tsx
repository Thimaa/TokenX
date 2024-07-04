import React from 'react'
import Image from 'next/image';

const Token = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div className="w-[320px] h-[56px] bg-[#EFF1F5] rounded-[8px] px-2">
          <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-5">
                  <div className="flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full mt-2">
                      <Image
                          src="/Dashbord-Icons/base1.jpg"
                          width={20}
                          height={20}
                          alt="coins" />
                  </div>
                  <h1 className="font-light text-[14px] mt-2">Base</h1>
              </div>
              <div className="flex justify-center items-center">
                  <h1 className="flex font-bold text-[16px] text-center justify-center items-center mt-2 ">
                      3514.65 ETH
                  </h1>
              </div>
          </div>
      </div><div className="w-[320px] h-[56px] bg-[#EFF1F5] rounded-[8px] px-2">
              <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-5">
                      <div className="flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full mt-2">
                          <Image
                              src="/Dashbord-Icons/m2.png"
                              width={20}
                              height={20}
                              alt="coins" />
                      </div>
                      <h1 className="font-light text-[14px] mt-2">ETH</h1>
                  </div>
                  <div className="flex justify-center items-center">
                      <h1 className="flex font-bold text-[16px] text-center justify-center items-center mt-2 ">
                          3514.65 ETH
                      </h1>
                  </div>
              </div>
          </div><div className="w-[320px] h-[56px] bg-[#EFF1F5] rounded-[8px] px-2">
              <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-5">
                      <div className="flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full mt-2">
                          <Image
                              src="/Dashbord-Icons/base1.jpg"
                              width={20}
                              height={20}
                              alt="coins" />
                      </div>
                      <h1 className="font-light text-[14px] mt-2">USDT</h1>
                  </div>
                  <div className="flex justify-center items-center">
                      <h1 className="flex font-bold text-[16px] text-center justify-center items-center mt-2 ">
                          3514.65 ETH
                      </h1>
                  </div>
              </div>
          </div><div className="w-[320px] h-[56px] bg-[#EFF1F5] rounded-[8px] px-2">
              <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-5">
                      <div className="flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full mt-2">
                          <Image
                              src="/Dashbord-Icons/base1.jpg"
                              width={20}
                              height={20}
                              alt="coins" />
                      </div>
                      <h1 className="font-light text-[14px] mt-2">MATIC</h1>
                  </div>
                  <div className="flex justify-center items-center">
                      <h1 className="flex font-bold text-[16px] text-center justify-center items-center mt-2 ">
                          3514.65 ETH
                      </h1>
                  </div>
              </div>
          </div><div className="w-[320px] h-[56px] bg-[#EFF1F5] rounded-[8px] px-2">
              <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-5">
                      <div className="flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full mt-2">
                          <Image
                              src="/Dashbord-Icons/base1.jpg"
                              width={20}
                              height={20}
                              alt="coins" />
                      </div>
                      <h1 className="font-light text-[14px] mt-2">MATIC</h1>
                  </div>
                  <div className="flex justify-center items-center">
                      <h1 className="flex font-bold text-[16px] text-center justify-center items-center mt-2 ">
                          3514.65 ETH
                      </h1>
                  </div>
              </div>
          </div>
          </div>
    
  );
}

export default Token