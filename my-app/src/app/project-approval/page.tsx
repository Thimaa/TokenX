"use client";
import React, { useState } from "react";
import AdminDashbordSideBar from "@/Components/AdminDashbordSideBar/AdminDashbordSideBar";
import NavBar from "@/Components/NavBar/NavBar";
import OverrallProjects from "@/Components/Project-Approval/OverallProjects/OverrallProjects";
import PendingProjects from "@/Components/Project-Approval/PendingProjects/PendingProjects";

const AdminDashbord: React.FC = () => {
  const [navTitle, setNavTitle] = useState<string>("Admin Dashboard");

  const handleMenuItemClick = (title: string) => {
    setNavTitle(title);
  };

  return (
    <div>
      <AdminDashbordSideBar onMenuItemClick={handleMenuItemClick} />
      <div className="xl:ml-70 ml-0">
        <NavBar title={navTitle} />
        <div className="mt-10 px-10">
          <h1 className="text-[20px] mb-5">Pending Projects</h1>
          <PendingProjects />
        </div>
        <div className="mt-10 px-10">
          <h1 className="text-[20px] mb-5 font-medium">Overall Projects</h1>
          <OverrallProjects />
        </div>
      </div>
    </div>
  );
};

export default AdminDashbord;
