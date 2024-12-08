import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const products = [
    { id: 1, name: "Nike Air Max", image: "/images/image1.jpg", colors: "1 Color", price: "₹ 12,500" },
    { id: 2, name: "Nike Air Force 1", image: "/images/image2.jpg", colors: "1 Color", price: "₹ 10,500" },
    { id: 3, name: "Nike Court Vision", image: "/images/image3.jpg", colors: "2 Colors", price: "₹ 9,000" },
    { id: 4, name: "Nike Air Max", image: "/images/image4.jpg", colors: "1 Color", price: "₹ 12,500" },
    { id: 5, name: "Nike Air Force 1", image: "/images/image5.png", colors: "1 Color", price: "₹ 10,500" },
    { id: 6, name: "Nike Court Vision", image: "/images/image6.png", colors: "2 Colors", price: "₹ 9,000" },
    { id: 7, name: "Nike Air Max", image: "/images/image7.png", colors: "1 Color", price: "₹ 12,500" },
    { id: 8, name: "Nike Air Force 1", image: "/images/image8.png", colors: "1 Color", price: "₹ 10,500" },
    { id: 9, name: "Nike Court Vision", image: "/images/image6.png", colors: "2 Colors", price: "₹ 9,000" },
    { id: 10, name: "Nike Air Force 1", image: "/images/image7.png", colors: "1 Color", price: "₹ 10,500" },
    { id: 11, name: "Nike Court Vision", image: "/images/image8.png", colors: "2 Colors", price: "₹ 9,000" },
    { id: 12, name: "Nike Court Vision", image: "/images/image5.png", colors: "2 Colors", price: "₹ 9,000" },
  ];

  return (
    <div className="flex">
      <aside className="w-1/4 bg-white p-4">
        {/* Sidebar Content */}
        <h2 className="text-lg font-semibold mb-4">New (500)</h2>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700">Shoes</a></li>
            <li><a href="#" className="text-gray-700">Sports Bras</a></li>
            <li><a href="#" className="text-gray-700">Tops & T-Shirts</a></li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Gender</h3>
          <ul className="space-y-2">
            <li><label><input type="checkbox" className="mr-2 accent-black" />Men</label></li>
            <li><label><input type="checkbox" className="mr-2 accent-black" />Women</label></li>
            <li><label><input type="checkbox" className="mr-2 accent-black" />Unisex</label></li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Kids</h3>
          <ul className="space-y-2">
            <li><label><input type="checkbox" className="mr-2 accent-black" />Boys</label></li>
            <li><label><input type="checkbox" className="mr-2 accent-black" />Girls</label></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Shop By Price</h3>
          <ul className="space-y-2">
            <li><label><input type="radio" name="price" className="mr-2 accent-black" />Under ₹ 7,500</label></li>
            <li><label><input type="radio" name="price" className="mr-2 accent-black" />₹ 7,500 - ₹ 15,000</label></li>
          </ul>
        </div>
      </aside>

      <main className="w-3/4 p-6">
        {/* Main Content */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Sort By</h2>
          <button className="text-gray-600">Hide Filters</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link href="/productdetail" key={product.id}>
              <div className="border p-4 cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200} // Adjust width as needed
                  height={200} // Adjust height as needed
                  className="w-full mb-4"
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-500">{product.colors}</p>
                <p className="text-gray-900">MRP: {product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
