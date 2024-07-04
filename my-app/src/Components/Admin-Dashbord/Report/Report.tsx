import React from 'react'
import Image from 'next/image';

const Report = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className=" justify-between w-[352px] h-[132px] bg-[#F1F1F1] p-4 gap-5 rounded-lg">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-2 mb-2">
            <Image
              src="/admin-dashbord/profile.png"
              width={20}
              height={20}
              alt=""
            />
            <h1 className="text-[13px] text-center">James Stive</h1>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <div></div>
            <h1 className="text-[11px]">@jamesstive</h1>
            <div className="flex flex-row justify-center items-center gap-1">
              <div className="w-[6px] h-[6px] rounded-full bg-[#5E5E5E]" />
              <p className="text-[11px]">10h</p>
            </div>
          </div>
        </div>
        <p className="text-[12px]">
          The project promised a guaranteed return on investment, but no funds
          have been disbursed as claimed.
        </p>
        <div className="flex flex-row justify-end items-center gap-2">
          <Image
            src="/admin-dashbord/profile.png"
            width={20}
            height={20}
            alt="profile"
          />
          <h1 className="text-xs">Glass Block Verse #01</h1>
        </div>
      </div>
      <div className=" justify-between w-[352px] h-[132px] bg-[#F1F1F1] p-4 gap-5 rounded-lg">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-2 mb-2">
            <Image
              src="/admin-dashbord/profile.png"
              width={20}
              height={20}
              alt=""
            />
            <h1 className="text-[13px]  ">James Stive</h1>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
         
            <h1 className="text-[11px]">@jamesstive</h1>
            <div className="flex flex-row justify-center items-center gap-1">
              <div className="w-[6px] h-[6px] rounded-full bg-[#5E5E5E]" />
              <p className="text-[11px]">10h</p>
            </div>
          </div>
        </div>
        <p className="text-[12px]">
          The project promised a guaranteed return on investment, but no funds
          have been disbursed as claimed.
        </p>
        <div className="flex flex-row justify-end items-center gap-2">
          <Image
            src="/admin-dashbord/profile.png"
            width={20}
            height={20}
            alt="profile"
          />
          <h1 className="text-xs">Glass Block Verse #01</h1>
        </div>
      </div>
    </div>
  );
}

export default Report