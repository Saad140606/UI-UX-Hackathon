import Button from "../../components/Button"; // Assuming you have a Button component
import Link from "next/link";
import Image from 'next/image';

export default function NewPage() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-5 sm:p-10">
      {/* Left Section with Image */}
      <div className="w-full sm:w-1/2 flex justify-center items-center mb-5 sm:mb-0">
        <Image
          src="/images/image1.jpg"
          alt="Product"
          className="w-full sm:w-auto h-auto max-w-full max-h-[650px] object-cover"
        />
      </div>

      {/* Right Section with Text and Button */}
      <div className="w-full sm:w-1/2 flex justify-center items-start">
        <div className="flex flex-col gap-3 p-5 sm:p-10">
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-left">
            Nike Air Force 1 <br />
            PLT.AF.ORM
          </h2>
          <p className="text-sm sm:text-base leading-6 sm:leading-7 w-full sm:w-[90%] pt-3 pb-2 text-left">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its
            "inside out"-inspired construction, including unique layering and exposed foam
            accents, ups the ante on this timeless Jordan Brand silhouette. Details like the
            deco stitching on the Swoosh add coveted appeal, while the unexpected shading,
            rich mixture of materials and aged midsole aesthetic give this release an
            artisan finish.
          </p>
          {/* Price Text Above Button */}
          <p className="text-xl sm:text-2xl font-bold text-left pt-3 pb-2">
            ₹ 8,695.00
          </p>
          <Link href="/cart">
            <Button
              text="Add To Cart"
              classNames="flex items-center gap-2 w-full sm:w-[150px] bg-black text-white py-2 rounded-md"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
