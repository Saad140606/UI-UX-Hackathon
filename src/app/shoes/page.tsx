"use client"

import { allProducts, four } from "@/sanity/lib/queries"
import { Product } from "../../../types/products"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { urlFor } from "@/sanity/lib/image"
import { client } from "@/sanity/lib/client"

const SHOES = () => {
const [product, setProduct] = useState<Product[]>([])

useEffect(() => {
    async function fetchproduct() {
        const fetchedproduct : Product[] = await client.fetch(four)
        setProduct(fetchedproduct) 
    }
    fetchproduct()
},[])

return (
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

    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4">
        
        
        {product.map((product) => (
            <div key={product._id}
            className="border border-gray-100 rounded-md p-4 flex flex-col items-center"
            >
                {product.productName}
                {product.image && (
                    <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    width={200}
                    height={200}
                    className="w-full h-auto"/>
                    
                )}
                <div className="mt-4 text-center">
                <h2 className="font-medium text-lg">{product.productName}</h2>
                <p className="font-bold mt-1">
                    {product.price ? `$${product.price}`: "Price not available"}
                
                </p>
                </div>
               
                </div>
    
        
    ))}
        
    </div>
    </div>
)
};

export default SHOES;