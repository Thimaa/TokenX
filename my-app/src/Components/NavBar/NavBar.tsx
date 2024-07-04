import Image from "next/image";
import React from "react";

interface NavBarProps {
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  return (
    <div className="w-full text-center flex justify-between items-center h-[92px] border-b border-[#E6E6E6]">
      <div className="flex items-center">
        <h1 className="ml-4 xl:text-[32px]">{title}</h1>
      </div>
      <div className="flex items-center space-x-4 mr-4">
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
            className="h-[32px] max-w-[359px] p-2 pl-8 rounded-[8px] border"
            placeholder="Search"
          />
        </div>
        <div className="flex justify-center items-center w-[32px] h-[32px] rounded-full bg-[#E3E3E3]">
          <Image
            src="/admin-dashbord/bellicon.png"
            width={15}
            height={15}
            alt="icon"
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-5 px-5 h-[56px] bg-[#EFF1F5] rounded-[12px]">
          <div className="">
            <Image
              src="/admin-dashbord/profile.png"
              width={40}
              height={40}
              alt="profile picture"
            />
          </div>
          <div>
            <h1 className="text-[14px] font-medium text-black">James Stive</h1>
            <h1 className="text-[11px] text-black text-left">Admin</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
