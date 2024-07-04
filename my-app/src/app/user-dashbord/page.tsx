import DashbordNavBar from '@/Components/DashnordNavBar/DashbordNavBar'
import React from 'react'
import Image from 'next/image';
import FeatureProduct from '@/Components/Section/FeatureProduct';
import Token from '@/Components/user-dashbord/token/Token';

const page = () => {
  return (
    <div className="ml-[280px]">
      <DashbordNavBar />
      <div className="flex flex-col justify-between h-[108px]  w-full p-2 border border-black mb-10">
        <div className="flex flex-row justify-between text-center mt-10">
          <h1 className="text-center text-[32px] px-5">Dashboard</h1>

          <div className="flex flex-row items-center space-x-4">
            <div className="relative">
              <Image
                src="/Dashbord-Icons/search.png"
                width={15}
                height={20}
                alt="search"
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
              />
              <input
                type="text"
                className="p-2 pl-8 rounded border"
                placeholder="Search..."
              />
            </div>
            <div className="bg-black w-10 h-10"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between px-10 mb-5 gap-10">
        <div className="w-full h-[150px] bg-[#0243EA] bg-opacity-[10%] rounded-[16px] px-10 flex flex-col justify-end">
          <h2 className="text-[16px] ">Own Tokens</h2>
          <div>
            <h3 className="text-[24px] mb-10  mt-3 font-medium">4210</h3>
          </div>
        </div>
        <div className="w-full h-[150px] bg-[#0A91FF] bg-opacity-[10%] rounded-[16px] px-10 flex flex-col justify-end">
          <h2 className="text-[16px] ">Projects</h2>
          <div>
            <h3 className="text-[24px] mb-10  mt-3 font-medium">4210</h3>
          </div>
        </div>
        <div className="w-full h-[150px] bg-[#32C2FF] bg-opacity-[10%] rounded-[16px] px-10 flex flex-col justify-end">
          <h2 className="text-[16px] ">Totol Growth</h2>
          <div>
            <h3 className="text-[24px] mb-10  mt-3 font-medium">4210</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-10">
        <div className="flex flex-row justify-between ">
          <h1 className="font-medium text-[20px] mb-5">Project</h1>
          <h1 className="font-medium text-[20px] mb-5 mr-72">Tokens</h1>
        </div>

        <div className="">
          <div className="flex flex-row  gap-10">
            <div className="flex xl:flex-row flex-col gap-10 ">
              <div className="flex flex-col  w-auto h-full  mt-5 rounded-[16px]">
                <Image
                  src="/product/1.png"
                  width={500}
                  height={500}
                  alt="card"
                  className="object-cover w-full h-full "
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

            <div className="w-1/2 h-[388px] mt-5">
             <Token />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page