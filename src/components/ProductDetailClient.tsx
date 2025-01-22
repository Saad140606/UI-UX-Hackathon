"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "@/components/CartContext";

interface Product {
  _id: string;
  productName: string;
  imageUrl: string;
  colors: string[];
  price: number;
  description: string;
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.productName,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    });
    toast.success(`${product.productName} added to your bag!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-5 sm:p-10">
      
        <div className="w-full sm:w-1/2 flex justify-center items-center mb-5 sm:mb-0">
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="w-full sm:w-auto h-auto max-w-full max-h-[650px] object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-start">
        <div className="flex flex-col gap-3 p-5 sm:p-10">
        <h1 className="text-2xl sm:text-4xl font-bold uppercase text-left">{product.productName}</h1>
          <p className="text-sm sm:text-base leading-6 sm:leading-7 w-full sm:w-[90%] pt-3 pb-2 text-left">{product.description}</p>
          <p className="text-xl sm:text-2xl font-bold text-left pt-3 pb-2">
            Price: ₹ {product.price}
          </p>
        
         
          {product.colors && (
            <div className="mb-4">
              <h3 className="font-medium mb-2">Available Colors:</h3>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="block w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          )}
          <button
            className="bg-black text-white py-2 px-4 rounded mt-6 hover:bg-gray-800"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* Toastify container */}
      <ToastContainer />
    </div>
    
  );
}
