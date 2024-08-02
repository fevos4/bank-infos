import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
   const handleSearchClick = () => {
    setSearchExpanded(!searchExpanded);
  };

  return (
    <div className="fixed flex justify-between items-center h-24 mx-auto px-4 sm:px-14 bg-white w-full  md:ml-0">
      <a href="#">
        <img src="/assets/logo.png" alt="Logo" className="w-24" />
      </a>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-7 text-sm">
        <li className="p-4  font-bold">
          <a href="#">Home</a>
        </li>
        <li className="p-4  font-bold">
          <a href="#">Bank Listing</a>
        </li>
        <li className="p-4  font-bold">
          <a href="#">Reviews</a>
        </li>
        <li className="p-4  font-bold">
          <a href="#">Blogs</a>
        </li>
      </ul>

      {/* Mobile menu toggle */}
      <div className="md:hidden flex flex-col items-end ">
        <button
          className="text-sm font-bold py-2 px-7 hover:duration-300 "
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        {nav && (
          <div className="w-full mt-2">
            <div className="flex items-center px-4 py-2 bg-white rounded-md shadow-md">
              <CiSearch className="h-6 w-6 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="ml-2 w-full text-sm focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={`${
          nav ? 'flex' : 'hidden'
        } flex-col bg-white w-full absolute top-24 left-0 p-4 shadow-md `}
      >
        <li className="p-4 text-sm font-bold">
          <a href="#">Home</a>
        </li>
        <li className="p-4 text-sm font-bold">
          <a href="#">Bank Listing</a>
        </li>
        <li className="p-4 text-sm font-bold">
          <a href="#">Reviews</a>
        </li>
        <li className="p-4 text-sm font-bold">
          <a href="#">Blogs</a>
        </li>
      </ul>

      <div className="hidden md:flex items-center px-4 py-2 bg-white rounded-sm shadow-sm">
              <CiSearch className="h-6 w-6 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="ml-2 w-full text-sm focus:outline-none"
              />
            </div>
    </div>
  );
};

export default Navbar;