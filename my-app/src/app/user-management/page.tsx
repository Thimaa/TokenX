"use client";
import React, { useState } from "react";
import AdminDashbordSideBar from "@/Components/AdminDashbordSideBar/AdminDashbordSideBar";
import NavBar from "@/Components/NavBar/NavBar";
import OverrallProjects from "@/Components/Project-Approval/OverallProjects/OverrallProjects";
import PendingProjects from "@/Components/Project-Approval/PendingProjects/PendingProjects";
import Card from "@/Components/Admin-Dashbord/Card/Card";
import Transction from "@/Components/Admin-Dashbord/Transction/Transction";

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
          <Card />
        </div>
        <div className="mt-10 px-10">
          <h1 className="text-[20px] mb-5 font-medium">User List</h1>
         <Transction /> 
        </div>
      </div>
    </div>
  );
};

export default AdminDashbord;
