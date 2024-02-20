import React, { useState } from "react";
import { FaBars, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { TbHomeCheck } from "react-icons/tb";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const { navbarOpen, setNavbarOpen } = useState(false);
  return (
    <nav>
      <div>
        <div className="flex justify-between">
          <span>
            <GoLocation />
            <p>Based in Mexico City</p>
          </span>
          <div className="flex">
            <span>
              <FaPhone />
              <p>+54 444 123 123</p>
            </span>
            <span>
              <FaRegEnvelope />
              <p>support@realstatefinder.com</p>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
