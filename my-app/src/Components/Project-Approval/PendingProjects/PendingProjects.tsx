import React from "react";
import Image from "next/image";
const OverrallProjects = () => {
  return (
    <div className="flex xl:flex-row flex-col xl:gap-5 gap-5   items-center">
      <div className="max-w-[352px] h-[432px] bg-[#EFF1F5] rounded-[16px]">
        <div className="p-2">
          <Image
            src="/Product/3.png"
            width={352}
            height={500}
            alt="card-image"
          />
        </div>
        <div className="flex flex-row justify-between items-center px-5">
          <h1 className="text-[16px] font-medium">Glass Block Verse #01</h1>
          <h1 className="text-[20px] font-bold text-[#0243EA]">$250.87</h1>
        </div>
        <p className="text-xs px-3 mt-1">
          Creating doesn't have to follow certain rules or just stick inside the
          borders of one technique; it can flow between man
        </p>
        <hr className="mt-2 m-2" />

        <div className="flex flex-row justify-between items-center px-5 ">
          <div className="flex flex-row gap-2">
            <Image
              src="/admin-dashbord/profile.png"
              width={20}
              height={20}
              alt="profile-image"
            />
            <h1 className="text-[12px] text-[#474747]">James Stive</h1>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="admin-dashbord/calender.svg"
              width={15}
              height={15}
              alt="calender"
            />
            <p className="text-[12px] text-[#474747]">2024.05.14</p>
          </div>
        </div>
      </div>
      <div className="max-w-[352px] h-[432px] bg-[#EFF1F5] rounded-[16px]">
        <div className="p-2">
          <Image
            src="/Product/2.png"
            width={352}
            height={500}
            alt="card-image"
          />
        </div>
        <div className="flex flex-row justify-between items-center px-5">
          <h1 className="text-[16px] font-medium">Glass Block Verse #01</h1>
          <h1 className="text-[20px] font-bold text-[#0243EA]">$250.87</h1>
        </div>
        <p className="text-xs px-3 mt-1">
          Creating doesn't have to follow certain rules or just stick inside the
          borders of one technique; it can flow between man
        </p>
        <hr className="mt-2 m-2" />

        <div className="flex flex-row justify-between items-center px-5 ">
          <div className="flex flex-row gap-2">
            <Image
              src="/admin-dashbord/profile.png"
              width={20}
              height={20}
              alt="profile-image"
            />
            <h1 className="text-[12px] text-[#474747]">James Stive</h1>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="admin-dashbord/calender.svg"
              width={15}
              height={15}
              alt="calender"
            />
            <p className="text-[12px] text-[#474747]">2024.05.14</p>
          </div>
        </div>
      </div>
      <div className="max-w-[352px] h-[432px] bg-[#EFF1F5] rounded-[16px]">
        <div className="p-2">
          <Image
            src="/Product/1.png"
            width={352}
            height={500}
            alt="card-image"
          />
        </div>
        <div className="flex flex-row justify-between items-center px-5">
          <h1 className="text-[16px] font-medium">Glass Block Verse #01</h1>
          <h1 className="text-[20px] font-bold text-[#0243EA]">$250.87</h1>
        </div>
        <p className="text-xs px-3 mt-1">
          Creating doesn't have to follow certain rules or just stick inside the
          borders of one technique; it can flow between man
        </p>
        <hr className="mt-2 m-2" />

        <div className="flex flex-row justify-between items-center px-5 ">
          <div className="flex flex-row gap-2">
            <Image
              src="/admin-dashbord/profile.png"
              width={20}
              height={20}
              alt="profile-image"
            />
            <h1 className="text-[12px] text-[#474747]">James Stive</h1>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="admin-dashbord/calender.svg"
              width={15}
              height={15}
              alt="calender"
            />
            <p className="text-[12px] text-[#474747]">2024.05.14</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverrallProjects;
