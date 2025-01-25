"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { client } from '@/sanity/lib/client';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`*[_type == "product"]{
        _id,
        productName,
        category,
        price,
        image,
        description,
      }`);
      setProducts(data);
      setFilteredProducts(data); // Initialize with all products
    };

    fetchProducts();
  }, []);

  // Handle search query change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter products based on search query
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      {/* Top Header Section */}
      <header className="bg-gray-100 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left - Logo */}
          <Image
            src="/assets/Vector.png"
            width={24}
            height={24}
            alt="Icon"
            className="w-6 h-6"
          />

          {/* Right - Navigation Links */}
          <nav className="hidden md:flex space-x-4 text-sm">
            <Link href={"/store"} className="hover:text-gray-800">Find a Store</Link>
            <div className="hidden md:block w-px h-4 bg-black"></div>
            <Link href={"/Help"} className="hover:text-gray-800">Help</Link>
            <div className="hidden md:block w-px h-4 bg-black"></div>
            <Link href={"/joinus"} className="hover:text-gray-800">Join Us</Link>
            <div className="hidden md:block w-px h-4 bg-black"></div>
            <Link href={"/signin"} className="hover:text-gray-800">Sign In</Link>
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
              <Link href={"/store"} className="hover:text-gray-700 block">Find a Store</Link>
              <Link href={"/Help"} className="hover:text-gray-700 block">Help</Link>
              <Link href={"/joinus"} className="hover:text-gray-700 block">Join Us</Link>
              <Link href={"/signin"} className="hover:text-gray-700 block">Sign In</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Header Section */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Left - Logo */}
          <Link href="/">
            <Image
              src={"/assets/Nike.png"}
              width={50}
              height={50}
              alt="Nike Logo"
              className="w-12 h-12"
            />
          </Link>

          {/* Middle - Navigation Links */}
          <nav className="hidden lg:flex space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-gray-600">New & Featured</Link>
            <Link href="/mens" className="hover:text-gray-600">Men</Link>
            <Link href="/womens" className="hover:text-gray-600">Women</Link>
            <Link href="/kids" className="hover:text-gray-600">Kids</Link>
            <Link href="/sale" className="hover:text-gray-600">Sale</Link>
            <Link href="/SNKRS" className="hover:text-gray-600">SNKRS</Link>
          </nav>

          {/* Right - Search, Wishlist, Bag */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="outline-none text-sm w-32 md:w-64"
                />
                <IoSearch className="text-gray-500" />
              </div>

              {/* Dropdown */}
              {searchQuery && filteredProducts.length > 0 && (
                <div className="absolute bg-white w-full border border-gray-300 rounded-md shadow-lg mt-1 z-10">
                  <ul>
                    {filteredProducts.map((product: any) => (
                      <li
                        key={product._id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        <Link href={`/Products/${product._id}`}>
                          {product.productName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Wishlist and Bag */}
            <div className="flex space-x-4">
              <Link href={"/WishList"}>
                <Image
                  src={"/assets/Heart.png"}
                  width={36}
                  height={36}
                  alt="Wishlist"
                />
              </Link>
              <Link href={"/Bag"}>
                <Image
                  src={"/assets/Bag.png"}
                  width={36}
                  height={36}
                  alt="Bag"
                />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <span className="text-2xl">✖</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="bg-white shadow-md lg:hidden">
            <nav className="flex flex-col space-y-2 p-4">
              <Link href="/" className="hover:text-gray-600">New & Featured</Link>
              <Link href="/mens" className="hover:text-gray-600">Men</Link>
              <Link href="/womens" className="hover:text-gray-600">Women</Link>
              <Link href="/kids" className="hover:text-gray-600">Kids</Link>
              <Link href="/sale" className="hover:text-gray-600">Sale</Link>
              <Link href="/SNKRS" className="hover:text-gray-600">SNKRS</Link>

              {/* Mobile Search */}
              <div className="relative mt-4">
                <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="outline-none text-sm w-full"
                  />
                  <IoSearch className="text-gray-500" />
                </div>

                {searchQuery && filteredProducts.length > 0 && (
                  <div className="absolute bg-white w-full border border-gray-300 rounded-md shadow-lg mt-1 z-10">
                    <ul>
                      {filteredProducts.map((product: any) => (
                        <li
                          key={product._id}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        >
                          <Link href={`/Products/${product._id}`}>
                            {product.productName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
