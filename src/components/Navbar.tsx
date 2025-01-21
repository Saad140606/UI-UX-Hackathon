"use client";
import React, { useState } from "react";
import Image from "next/image";
import Firstimg from "../../public/assets/logo.png";
import Nike from "../../public/assets/navbar1.png";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main>
      {/* Top Navbar */}
      <header className="bg-[#F5F5F5] border-b font-[Helvetica Neue] px-4 md:px-10 py-2">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Image src={Firstimg} alt="Logo" className="w-[50px]" />

          {/* Links Section */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-3 text-black text-[11px] font-medium">
              <li>
                <Link href="/stores">Find a Store</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="contact">Help</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="joinus">Join Us</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="signin">Sign In</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black text-lg flex items-center"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            Menu <GiHamburgerMenu className="ml-2" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white px-4 py-2 shadow-md">
            <nav className="space-y-2 text-black text-[14px] font-medium">
              {/* Mobile Menu Links */}
              <Link href="/allproduct" className="hover:text-gray-700 block">Find a Store</Link>
              <Link href="/contact" className="hover:text-gray-700 block">Help</Link>
              <Link href="/joinus" className="hover:text-gray-700 block">Join Us</Link>
              <Link href="/signin" className="hover:text-gray-700 block">Sign In</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Navbar Section */}
      <header className="bg-white border-b shadow-sm">
        <div className="flex justify-between items-center px-4 md:px-8 py-2">
          {/* Logo */}
          <Image src={Nike} alt="Logo" className="w-[60px]" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-6 items-center font-medium">
            <Link href="/" className="text-black hover:underline">
              New & Featured
            </Link>
            <Link href="/cart" className="text-black hover:underline">
              Men
            </Link>
            <Link href="/allproduct" className="text-black hover:underline">
              Women
            </Link>
            <Link href="/allproduct" className="text-black hover:underline">
              Kids
            </Link>
            <Link href="/allproduct" className="text-black hover:underline">
              SNKRS
            </Link>
          </nav>

          {/* Search and Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="flex items-center bg-slate-100 rounded-full px-3 py-1">
              <CiSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm flex-grow pl-2"
              />
            </div>

            {/* Icons */}
            <FaRegHeart className="text-black text-lg cursor-pointer" />
            <Link href={"/cart"}>
              <MdOutlineShoppingCart className="w-6 h-6 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white px-4 py-3 shadow-md">
            <nav className="space-y-2">
              <Link href="/page" className="block text-black hover:underline">
                New & Featured
              </Link>
              <Link href="/cart" className="block text-black hover:underline">
                Men
              </Link>
              <Link href="/allproduct" className="block text-black hover:underline">
                Women
              </Link>
              <Link href="/allproduct" className="block text-black hover:underline">
                Kids
              </Link>
              <Link href="/allproduct" className="block text-black hover:underline">
                SNKRS
              </Link>
            </nav>

            {/* Mobile Search */}
            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
                />
                <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
              </div>
            </div>
          </div>
        )}
      </header>
    </main>
  );
};

export default Navbar;
