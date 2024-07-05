"use client";
import React, { useState } from "react";
import AdminDashbordSideBar from "@/Components/AdminDashbordSideBar/AdminDashbordSideBar";
import NavBar from "@/Components/NavBar/NavBar";
import Image from "next/image";

import Card from "@/Components/Admin-Dashbord/Card/Card";
import Chart from "@/Components/Admin-Dashbord/Chart/Chart";
import Report from "@/Components/Admin-Dashbord/Report/Report";
import Transction from "@/Components/Admin-Dashbord/Transction/Transction";
import Pending from "@/Components/Admin-Dashbord/Pending/Pending";

const AdminDashbord: React.FC = () => {
  const [navTitle, setNavTitle] = useState<string>("Admin Dashboard");

  const handleMenuItemClick = (title: string) => {
    setNavTitle(title);
  };

  return (
    <div className=" dark:bg-black">
      <AdminDashbordSideBar onMenuItemClick={handleMenuItemClick} />
      <div className="xl:ml-70 ml-10 mb-5 ">
        <NavBar title={navTitle} />
      </div>
      <div className="xl:ml-70 ml-10 px-5">
        <div className="flex flex-row justify-between items-center w-full h-[102px] bg-[#EBEFFD]  px-10 p-10 rounded-[12px] mb-5">
          <div className="flex flex-col ">
            <h1 className="text-[20px] font-medium ">Overview</h1>
            <p className="text-[14px]">
              Comprehensive Control Center for Managing Users, Projects, and
              Finances
            </p>
          </div>
          <div>
            <button className="flex flex-row justify-center gap-5 items-center w-[141px] h-[40px] bg-white rounded-lg text-base">
              <Image
                src="/admin-dashbord/filter.svg"
                width={15}
                height={15}
                alt="filter-logo"
              />
              <span>Filter</span>
            </button>
          </div>
        </div>
        <div className=" mb-5">
          <Card />
        </div>

        <div className="flex xl:flex-row  flex-col gap-10 mb-10">
          <div className="w-full h-[337px] border border-black gap-10">
            <h1 className="text-xl font-medium">Analytics and Reporting </h1>
            <Chart />
          </div>
          <div className="">
            <h1 className="text-xl font-medium mb-4 ">Report and Flag</h1>
            <Report />
          </div>
        </div>
        <div className="flex xl:flex-row flex-col gap-10 mb-10">
          <div className="mt-">
            <h1 className="font-medium text-[20px] mb-10">Pending Project</h1>
            <Pending />
          </div>
          <div>
            <h1 className="font-medium text-[20px] mb-4">Transaction</h1>
            <Transction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashbord;
