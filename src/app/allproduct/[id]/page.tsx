import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Button from '@/components/Button';
import Image from 'next/image';

type Product = {
  _id: string;
  productName: string;
  imageUrl: string;
  colors?: string[];
  price: number;
  description: string;
};

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const query = `
     *[_type == "product" && _id == "${params.id}"][0] {
      _id,
      productName,
      "imageUrl": image.asset->url,
      colors,
      price,
      description
    }
  `;

  const product: Product = await client.fetch(query);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-5 sm:p-10">
        <div className="w-full sm:w-1/2 flex justify-center items-center mb-5 sm:mb-0">
          <Image src={product.imageUrl} alt={product.productName} className="w-full sm:w-auto h-auto max-w-full max-h-[650px] object-cover" />
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-start">
        
            <div className='flex flex-col gap-3 p-5 sm:p-10'>
            <h2 className="text-2xl sm:text-4xl font-bold uppercase text-left">{product.productName}</h2>
          <p className="text-sm sm:text-base leading-6 sm:leading-7 w-full sm:w-[90%] pt-3 pb-2 text-left">{product.description}</p>
          <p className="text-xl sm:text-2xl font-bold text-left pt-3 pb-2">Price: ₹ {product.price}</p>
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
         <Link href="/cart">
            <Button
              text="Add To Cart"
              classNames="flex items-center gap-2 w-full sm:w-[150px] bg-black text-white py-2 rounded-md"
            />
          </Link>
        </div>
        </div></div>
    
  );
}
