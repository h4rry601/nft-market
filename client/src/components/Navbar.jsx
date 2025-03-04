import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
const navLinks = [
  "Trang chủ",
  "Market",
  "Khám phá",
  "Trưng bày",
  "Các nghệ sĩ và bộ sưu tập",
];
function Navbar() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <nav className="p-4 bg-slate-900">
        <div className="container mx-auto max-w-screen-xl relative">
          {/* Flex Container */}

          <div className="flex justify-between items-center text-white">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400">
              <span className="">NFT</span> Market.
            </a>
            {/* Menu Items */}
            <div className="hidden lg:flex space-x-6 text-sm items-center">
              {navLinks.map((link, idx) => {
                return (
                  <a
                    key={idx}
                    href={link}
                    className="hover:text-indigo-600 duration-200 ease-in-out"
                  >
                    {link}
                  </a>
                );
              })}

              <button className="px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700">
                Kết nối tới ví thanh toán
              </button>
            </div>
            {/* Hamburger Menu */}
            <div className="lg:hidden" onClick={toggleNav}>
              {nav ? (
                <IoClose size={28} className="text-white" />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </div>
            {/* Mobile Menu */}
            {nav && (
                <div className="absolute top-14 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 z-50 w-full px-28 py-8 rounded-lg">
                  <div className="flex flex-col items-center space-y-6 ">
                    {navLinks.map((link, idx) => {
                      return (
                        <a
                          key={idx}
                          href="#"
                          className="hover:text-indigo-600 duration-200 ease-in-out border-b border-white  text-center"
                        >
                          {link}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
