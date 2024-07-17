"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link component

interface MenuItem {
  name: string;
  icon: string;
  href?: string;
}

interface AdminDashbordSideBarProps {
  onMenuItemClick: (title: string) => void;
}

const AdminDashbordSideBar: React.FC<AdminDashbordSideBarProps> = ({
  onMenuItemClick,
}) => {
  const [activeItem, setActiveItem] = useState<string>("Admin Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    {
      name: "Admin Dashboard",
      icon: "/Dashbord-Icons/icon1.png",
      href: "/admin-dashbord",
    },
    {
      name: "Project Approval",
      icon: "/Dashbord-Icons/icon2.png",
      href: "/project-approval",
    },
    {
      name: "User Management",
      icon: "/Dashbord-Icons/icon2.png",
      href: "/user-management",
    },
    { name: "Content Moderation", icon: "/Dashbord-Icons/icon2.png" },
    { name: "Financial Overview", icon: "/Dashbord-Icons/icon2.png" },
    { name: "Marketplace Management", icon: "/Dashbord-Icons/icon3.png" },
    { name: "Analytics and Report", icon: "/Dashbord-Icons/icon4.png" },
    { name: "Setting and Configuration", icon: "/Dashbord-Icons/icon5.png" },
    { name: "Support and Help", icon: "/Dashbord-Icons/icon6.png" },
  ];

  return (
    <div>
      {/* Button to toggle sidebar */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-4 left-4 inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
      >
        <span className="sr-only">
          {sidebarOpen ? "Close sidebar" : "Open sidebar"}
        </span>
        {/* Icon for button */}
        {sidebarOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`h-full overflow-y-scroll z-20 fixed top-0 left-0  transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-200 ease-in-out bg-white border-r border-gray-200`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center mt-10">
            <Image
              src="/admin-dashbord/tokenx logo.png"
              width={150}
              height={80}
              alt="logo"
              className="m-5"
            />
          </div>

          <div className="my-4 border-b border-gray-100 pb-4">
            {menuItems.map((item) => (
              <Link href={item.href || "#"} key={item.name}>
                <div
                  onClick={() => {
                    setActiveItem(item.name);
                    onMenuItemClick(item.name);
                    if (window.innerWidth < 1024) setSidebarOpen(false); // Close sidebar on mobile after click
                  }}
                  className={`flex mb-2 justify-start items-center gap-5 pl-10 p-6 group cursor-pointer m-auto h-[52px] ${
                    activeItem === item.name
                      ? "bg-[#0243EA] text-white"
                      : "hover:bg-[#0243EA] hover:text-white text-[#909090]"
                  }`}
                >
                  <Image src={item.icon} width={20} height={20} alt="icons" />
                  <h3
                    className={`text-[14px] ${
                      activeItem === item.name
                        ? "text-white"
                        : "group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashbordSideBar;
