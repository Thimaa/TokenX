"use client";
import Image from "next/image";
import React, { useState } from "react";
import Hero from "./Hero";
import FeatureProduct from "./FeatureProduct";
import Work from "./Work";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} `}>
      <div className="w-full flex justify-between h-40 px-20 py-8 bg-white dark:bg-black">
        <div>
          <Image width={80} height={80} alt="logo" src="/icon/logo.svg" />
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={toggleDarkMode}
            className={`text-${
              darkMode ? "white" : "black"
            } bg-slate-600 px-5 py-2 rounded-[16px] mr-10`}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
          <button className="bg-[#010511] text-white w-[127px] h-[54px] rounded-[16px]">
            Login
          </button>
        </div>
      </div>
      <Hero />

      <div className="p-8 bg-white dark:bg-black text-${darkMode ? 'white' : 'black'}">

        <FeatureProduct />
        <Work />
      </div>
    </div>
  );
}
