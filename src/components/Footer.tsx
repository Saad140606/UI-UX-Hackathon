import React from 'react'
import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {/* Column 1 */}
    <div>
      <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="#" className="hover:underline">Become a Member</Link></li>
        <li><Link href="#" className="hover:underline">Sign Up for Email</Link></li>
        <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
      </ul>
    </div>

    {/* Column 2 */}
    <div>
      <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="#" className="hover:underline text-[#6E7E7E]">Order Status</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E]">Delivery</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E]">Returns</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E]">Payment Options</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E]">Contact Us on Nike.com</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E]">Contact Us on All Other Inquiries</Link></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="#" className="hover:underline text-[#6E7E7E]">News</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E]">Careers</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E]">Investors</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E]">Sustainability</Link></li>
      </ul>
    </div>

    {/* Column 4 (Social Media Icons) */}
    <div className="flex justify-end gap-4">
      <FaTwitter className="text-lg cursor-pointer text-[#6E7E7E]" />
      <FaFacebook className="text-lg cursor-pointer text-[#6E7E7E]" />
      <FaYoutube className="text-lg cursor-pointer text-[#6E7E7E]" />
      <FaInstagram className="text-lg cursor-pointer text-[#6E7E7E]" />
    </div>
  </div>

  {/* Bottom Section */}
  <div className="mt-8 border-t border-gray-700 pt-4">
    <div className="container mx-auto flex flex-wrap justify-between items-center text-xs text-gray-400">
      {/* Country and Copyright */}
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <IoLocationOutline  className='text-white'/>
        <p className='text-white'>India</p>
        <p>© 2023 Nike, Inc. All Rights Reserved</p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        <Link href="#" className="hover:underline">Guides</Link>
        <Link href="#" className="hover:underline">Terms of Sale</Link>
        <Link href="#" className="hover:underline">Terms of Use</Link>
        <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer