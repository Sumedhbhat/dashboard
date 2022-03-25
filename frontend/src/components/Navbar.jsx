import React from "react";
import logo from "./assets/logo.png";

import { useNavigate } from "react-router-dom";

import { RiHomeFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='bg-black h-screen w-screen fixed top-0 left-0 -z-10 ' />
      <div className=' min-h-screen w-80 bg-opacity-90  px-5 font-[Roboto] '>
        <div className='flex fixed text-white flex-col py-5 px-2 items-start space-y-7'>
          <label className='appIcon cursor-pointer'>
            <img src={logo} alt='' className='w-48 mb-2 py-5' />
          </label>
          <label className='flex item items-center justify-center cursor-pointer'>
            <div className='icon px-2'>
              <RiHomeFill size={26} />
            </div>
            <div
              className='text flex-1 text-white text-xl cursor-pointer'
              onClick={() => navigate("/")}
            >
              Dashboard
            </div>
          </label>

          <label className='flex item items-center justify-center'>
            <div className='icon px-2'>
              <BsPeopleFill size={26} />
            </div>
            <div
              className='text flex-1 text-white text-xl cursor-pointer'
              onClick={() => navigate("/employee")}
            >
              Employees
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
