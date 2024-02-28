import React, { useState } from "react";
import { FaBars, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { TbHomeCheck } from "react-icons/tb";
import { IoPersonCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { navbarOpen, setNavbarOpen } = useState(false);
  return (
    <nav className="sticky top-0 z-50">
      <div className="lg:block hidden bg-indigo-500 text-white py-2">
        <div className="container mx-auto lg:flex hidden items-center justify-between px-3">
          <span className="flex items-center gap-x-1">
            <GoLocation />
            <p className="text-sm">Based in Mexico City</p>
          </span>
          <div className="flex items-center gap-x-4">
            <span className="flex items-center gap-x-1">
              <FaPhone />
              <p>+54 444 123 123</p>
            </span>
            <span className="flex items-center gap-x-1">
              <FaRegEnvelope />
              <p>support@realstatefinder.com</p>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="container mx-auto flex flex-wrap items-center  justify-between px-3">
          <div>
            <ul className="lg:flex hidden items-center gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%] lg:gap-y-0 gap-y-8">
              <div className="lg:hidden flex flex-col gap-y-8 items-center">
                <li className="py-2 flex font:medium items-center leading-snug ">
                  <button className="bg-indigo-500 rounded-full px-4 py-1 hoverBtn">
                    Home
                  </button>
                </li>
                <li className="py-2 flex font:medium items-center leading-snug ">
                  <a href="/" to="/">
                    Home
                  </a>
                </li>
                <li className="py-2 flex font:medium items-center leading-snug ">
                  <a href="/" to="/">
                    Listings
                  </a>
                </li>
                <li className="py-2 flex font:medium items-center leading-snug ">
                  <a href="/" to="/">
                    Services
                  </a>
                </li>
                <li className="py-2 flex font:medium items-center leading-snug ">
                  <a href="/" to="/">
                    Blog
                  </a>
                </li>
              </div>
            </ul>
          </div>

          <div className="w-full sticky top-0 flex justify-between lg:w-auto lg:static">
            <span className="flex items-center gap-x-2">
              <button>
                <TbHomeCheck className='w-1/2 h-1/2 m-auto'/>
              </button>
              <p className="font-medium text-xl">RealStateFinder</p>
            </span>
            <div className="flex items-center">
              <button 
                className="cursor-pointer text-xl leading-none px-3 py-1"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {
                  navbarOpen ? <AiOutlineClose /> : <FaBars />
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
