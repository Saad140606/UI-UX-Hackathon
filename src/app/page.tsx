import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      
        <div className="w-full bg-gray-100">
     
      <div className="relative w-full h-screen">
        <Image
          src="/assets/hero.png" 
          alt="Sneaker"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      
      <div className="relative flex flex-col items-center text-center bg-white py-8 px-4 md:py-12">
        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest mb-2">
          First Look
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-gray-600 text-sm sm:text-lg max-w-md sm:max-w-2xl mx-auto mb-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse—designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Notify Me
          </button>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop Air Max
          </button>
        </div>
      </div>

      
      <div className="bg-white px-4 sm:px-6 py-8 relative">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
          <h2 className="text-lg sm:text-2xl font-bold">Best of Air Max</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-100 font-bold rounded-full hover:bg-gray-200">
              Shop
            </button>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                ←
              </button>
              <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
                →
              </button>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { img: "/images/image1.jpg", title: "Nike Air Max Pulse", type: "Women's Shoes", price: "₹ 13,995"},
            { img: "/images/image2.jpg", title: "Nike Air Max Pulse", type: "Men's Shoes", price: "₹ 13,995" },
            { img: "/images/image3.jpg", title: "Nike Air Max 97 SE", type: "Men's Shoes", price: "₹ 16,995" },
          ].map((product, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-md p-4 flex flex-col items-center"
            >
              <Link href={"/productdetail"}>
              <Image
                src={product.img}
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-auto"
              /> <div className="mt-4 text-center">
              <h3 className="font-medium text-lg">{product.title}</h3>
              <p className="text-gray-500 text-sm">{product.type}</p>
              <p className="font-bold mt-1">{product.price}</p>
            </div></Link>
             
            </div>
          ))}
        </div>
      </div>

    
<div className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center">
    <Image
      src="/assets/featured.png" 
      alt="Running Man"
      width={1200}
      height={600}
      className="rounded-lg mx-auto"
    />
    <h1 className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
      STEP INTO WHAT FEELS GOOD
    </h1>
    <p className="mt-4 text-base sm:text-lg text-gray-700">
      Cause everyone should know the feeling of running in that perfect pair!
    </p>
    <button className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
      Find Your Shoe
    </button>
  </div>
</div>
</div>
<div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-left">Gear Up</h2>
    
    <div className="flex flex-col sm:flex-row justify-between mb-6 space-y-4 sm:space-y-0">
      <div className="flex items-center">
        <h2 className="text-base sm:text-lg font-bold text-gray-900">Shop Men</h2>
        <button className="p-2 bg-gray-100 rounded-full ml-2">
          ←
        </button>
        <button className="p-2 bg-gray-300 rounded-full ml-2">
          →
        </button>
      </div>
      <div className="flex items-center">
        <h2 className="text-base sm:text-lg font-bold text-gray-900">Shop Women</h2>
        <button className="p-2 bg-gray-100 rounded-full ml-2">
          ←
        </button>
        <button className="p-2 bg-gray-300 rounded-full ml-2">
          →
        </button>
      </div>
    </div>
    <div className="bg-white px-4 sm:px-6 py-8 relative">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
      
      </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { img: "/images/image5.png", title: "Nike Dri-FIT ADV TechKnit Ultra", type: "Men's Short-Sleeve Running Top", price: "₹ 3 895"},
            { img: "/images/image6.png", title: "Nike Dri-FIT Challenger", type: "Men's 18cm (approx.) 2-in-1 Versatile Shorts", price: "₹ 2 495" },
            { img: "/images/image7.png", title: "Nike Dri-FIT ADV Run Division", type: "Women's Long-Sleeve Running Top", price: "₹ 5 295"},
            { img: "/images/image8.png", title: "Nike Fast", type: "Women's Mid-Rise 7/8 Running Leggings with Pockets", price: "₹ 3 795"},
          ].map((product, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-md p-4 flex flex-col items-center"
            >
              <Link href={"/productdetail"}>
              <Image
                src={product.img}
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-auto"
              /> <div className="mt-4 text-center">
              <h3 className="font-medium text-lg">{product.title}</h3>
              <p className="text-gray-500 text-sm">{product.type}</p>
              <p className="font-bold mt-1">{product.price}</p>
            </div></Link>
             
            </div>
          ))}
        </div>
      </div></div></div>


<div className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-3xl sm:text-4xl font-bold underline">Flight Essentials</h1>
    <p className="mt-4 text-base sm:text-lg text-gray-700">
      Your built-to-last all-week wears—but with style only Jordan Brand can deliver.
    </p>
    <button className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
      Shop
    </button>
  </div>
</div>

<div className="relative w-full h-[50vh] sm:h-[75vh] bg-gray-100">
  <Image
    src="/images/frame.png" 
    alt="Sneaker"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
  />
</div>





<footer className="bg-white py-8 w-full">
 
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center pl-12 pr-12  ml-4">
    
    <div className="text-center">
      <h3 className="font-bold mb-4">Icons</h3>
      <ul className="space-y-2 text-sm">
        <li>Air Force 1</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 95</li>
      </ul>
    </div>
    
    <div className="text-center">
      <h3 className="font-bold mb-4">Shoes</h3>
      <ul className="space-y-2 text-sm">
        <li>All Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running Shoes</li>
      </ul>
    </div>
    
    <div className="text-center">
      <h3 className="font-bold mb-4">Clothing</h3>
      <ul className="space-y-2 text-sm">
        <li>All Clothing</li>
        <li>Modest Wear</li>
        <li>Hoodies & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
    </div>
    
    <div className="text-center">
      <h3 className="font-bold mb-4">Kids'</h3>
      <ul className="space-y-2 text-sm">
        <li>Infant & Toddler Shoes</li>
        <li>Kids' Shoes</li>
        <li>Kids' Jordan Shoes</li>
        <li>Kids' Basketball Shoes</li>
      </ul>
    </div>
  </div>

 
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center text-sm">

      {/* Social Icons */}
      <div className="flex space-x-4 text-lg">
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  
</footer>

    </main>
  );
}

