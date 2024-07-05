import React from 'react'

const Card = () => {
  return (
    <div className="flex xl:flex-row flex-col xl:justify-normal justify-center xl:items-normal items-center gap-10">
      <div className="flex flex-col justify-center w-[300px] h-[173px] bg-[#EFF1F5] rounded-lg px-5">
        <h1 className="text-xl mb-2">Overall Projects</h1>
        <h1 className="text-3xl font-bold">3321</h1>
      </div>
      <div className="flex flex-col justify-center w-[300px] h-[173px] bg-[#EFF1F5] rounded-lg px-5">
        <h1 className="text-xl mb-2">pending Projects</h1>
        <h1 className="text-3xl font-bold">21</h1>
      </div>
      <div className="flex flex-col justify-center w-[300px] h-[173px] bg-[#EFF1F5] rounded-lg px-5">
        <h1 className="text-xl mb-2">Active Users</h1>
        <h1 className="text-3xl font-bold">22341</h1>
      </div>
      <div className="flex flex-col justify-center w-[300px] h-[173px] bg-[#EFF1F5] rounded-lg px-5">
        <h1 className="text-xl mb-2">Overall Investment</h1>
        <h1 className="text-3xl font-bold">$ 522, 341</h1>
      </div>
    </div>
  );
}

export default Card