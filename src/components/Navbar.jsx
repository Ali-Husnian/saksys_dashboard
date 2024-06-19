import { useState } from "react";
import {
  FaBell,
  FaEnvelope,
  FaSearch,
  FaAngleRight,
  FaAngleDown,
  // FaAngleLeft,
} from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white px-4 shadow-md fixed w-full">
      <div className="flex items-center justify-evenly gap-5">
        <a href="#" className="flex items-center">
          <img src="./logo-black.png" alt="Logo" className="h-full" />
        </a>
        <FaAngleRight className=" md:ml-20 sm:ml-5 lg:ml:40 text-gray-600 text-2xl h-10" />
        {/*<FaAngleLeft className=" md:ml-20 sm:ml-5 lg:ml:40 text-gray-600 text-2xl h-10" /> */}

        <div className="relative lg:block md:block sm:hidden xs:hidden">
          <input
            type="text"
            placeholder="Search here"
            className="w-64 px-4 py-2 rounded-sm border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>
      </div>

      <div className="flex items-center">
        <div className="ml-4 flex items-center space-x-5">
          <div className="relative">
            <FaBell className="text-gray-600" />
            <span className="absolute bottom-3 rounded-full bg-blue-500 text-white font-bold text-xs px-1">
              5
            </span>
          </div>
          <div className="relative">
            <FaEnvelope className="text-gray-600" />
            <span className="absolute bottom-3 rounded-full bg-red-500 text-white font-bold text-xs px-1">
              8
            </span>
          </div>
          <div className="relative">
            <img
              src="./user-5.jpg"
              width="35px"
              className="rounded-full"
              alt="user-image"
            />
            {isDropdownOpen && (
              <div className="absolute top-10 right-0 bg-white rounded-md shadow-md z-10">
                <ul className="px-4 py-2">
                  <li className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                  </li>
                  <li className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="ml-4 flex items-center space-x-2">
            <span
              onClick={toggleDropdown}
              className="text-gray-600 cursor-pointer"
            >
              Robert Kane
            </span>
            {isDropdownOpen ? (
              <FaAngleDown className="text-gray-600" />
            ) : (
              <FaAngleRight className="text-gray-600" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
