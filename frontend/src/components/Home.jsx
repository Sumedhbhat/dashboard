import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ProjectChart from "./ProjectChart";
import DeptCount from "./DeptCount";
import CountryCount from "./CountryCount";
import Salary from "./salary";
import AgeCount from "./AgeCount";

const Home = () => {
  return (
    <>
      <div className='flex'>
        <Navbar />
        <div className='flex flex-col bg-white rounded-tl-xl w-[100%] mt-6 ml-6 p-6'>
          <label className='text-[50px] font-semibold font-[Roboto] mb-5 py-2 px-1 '>
            Statistics
          </label>
          <div className='grid grid-cols-3 items-center gap-[60px] justify-around'>
            <ProjectChart />
            <DeptCount />
            <CountryCount />
          </div>
          <div className=''>
            <AgeCount />
          </div>
          <div className=''>
            <Salary />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
