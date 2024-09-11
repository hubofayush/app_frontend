import React from "react";
import { FaYoutube, FaSearch, FaVideo, FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx"; // Import the hamburger menu icon

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md sticky top-0 z-50 flex items-center justify-between">
      {/* Left Section - Hamburger Menu and YouTube Logo */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Hamburger menu visible on small screens */}
        <button className=" p-2 hover:bg-gray-100 rounded-full">
          <RxHamburgerMenu className="text-2xl" />
        </button>
        {/* YouTube logo */}
        <div className="flex items-center">
          <FaYoutube className="text-red-600 text-2xl md:text-3xl" />
          <span className="text-lg md:text-xl font-bold">YouTweet</span>
        </div>
      </div>

      {/* Middle Section - Search Bar (hidden on small screens) */}
      <div className=" flex-grow max-w-xl mx-4">
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
          <input
            type="text"
            className="px-4 py-2 w-full focus:outline-none"
            placeholder="Search"
          />
          <button className="bg-gray-100 p-2 hover:bg-gray-200 rounded-full">
            <FaSearch className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center space-x-4">
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <FaVideo className="text-xl" />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <FaBell className="text-xl" />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <CgProfile className="text-xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
