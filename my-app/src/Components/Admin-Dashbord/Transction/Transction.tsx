import React from 'react'
import Image from 'next/image';

const Transction = () => {
  return (
    <div className="flex flex-col justify-between w-[723px] gap-5 ">
      <div className="flex flex-row justify-between  px-9 h-[40px] border-b border-[#D1D1D1]">
        <div>
          <h1>user</h1>
        </div>
        <div className="flex flex-row justify-around gap-[70px]">
          <h1>Type</h1>
          <h1 className="">Amount</h1>
          <h1 className="mr-5">Date</h1>
          <h1>Status</h1>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center bg-[#EFF1F5] h-[50px]  p-5 dark:bg-[#1C1B1B]">
        <div className="flex  items-center gap-3">
          <Image
            src="/admin-dashbord/profile.png"
            width={20}
            height={20}
            alt="profile-logo"
          />
          <h1>James Stive</h1>
        </div>
        <div className="flex flex-row justify-around gap-14 items-center">
          <h1 className="text-[#0243EA] text-sm">Buy</h1>
          <h1 className="text-sm">$ 321.65</h1>
          <h1 className="text-sm">2023.05.22</h1>
          <div className="flex items-center gap-5">
            <div className="w-2 h-2 rounded-full bg-[#28A745] " />
            <h1 className="text-sm font-medium  text-[#28A745]">Complete</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center bg-[#EFF1F5] h-[50px]  p-5">
        <div className="flex  items-center gap-3">
          <Image
            src="/admin-dashbord/profile.png"
            width={20}
            height={20}
            alt="profile-logo"
          />
          <h1>James Stive</h1>
        </div>
        <div className="flex flex-row justify-around gap-14 items-center">
          <h1 className="text-[#E80000] text-sm">Buy</h1>
          <h1 className="text-sm">$ 321.65</h1>
          <h1 className="text-sm">2023.05.22</h1>
          <div className="flex items-center gap-8">
            <div className="w-2 h-2 rounded-full bg-[#28A745] " />
            <h1 className="text-sm font-medium  text-[#28A745]">Pending</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center bg-[#EFF1F5] h-[50px]  p-5">
        <div className="flex  items-center gap-3">
          <Image
            src="/admin-dashbord/profile.png"
            width={20}
            height={20}
            alt="profile-logo"
          />
          <h1>James Stive</h1>
        </div>
        <div className="flex flex-row justify-around gap-14 items-center">
          <h1 className="text-[#E80000] text-sm">Buy</h1>
          <h1 className="text-sm">$ 321.65</h1>
          <h1 className="text-sm">2023.05.22</h1>
          <div className="flex items-center gap-5">
            <div className="w-2 h-2 rounded-full bg-[#28A745] " />
            <h1 className="text-sm font-medium  text-[#28A745]">Complete</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center bg-[#EFF1F5] h-[50px]  p-5">
        <div className="flex  items-center gap-3">
          <Image
            src="/admin-dashbord/profile.png"
            width={20}
            height={20}
            alt="profile-logo"
          />
          <h1>James Stive</h1>
        </div>
        <div className="flex flex-row justify-around gap-14 items-center">
          <h1 className="text-[#E80000] text-sm">Buy</h1>
          <h1 className="text-sm">$ 321.65</h1>
          <h1 className="text-sm">2023.05.22</h1>
          <div className="flex items-center gap-5">
            <div className="w-2 h-2 rounded-full bg-[#28A745] " />
            <h1 className="text-sm font-medium  text-[#28A745]">Complete</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transction