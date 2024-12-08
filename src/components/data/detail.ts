import { StaticImageData } from "next/image";
import best1 from "../../../public/images/image1.jpg";
import best2 from "../../../public/images/image2.jpg";
import best3 from "../../../public/images/image3.jpg";
import G1 from "../../../public/images/image5.png";
import G2 from "../../../public/images/image6.png";
import G3 from "../../../public/images/image7.png";
import G4 from "../../../public/images/image6.png";

export interface ProductDetail {
  id: string | number; // Flexible ID type
  name: string;
  description: string;
  price: string | number; // Flexible price type
  slug: string;
  imageUrl: string | StaticImageData; // Supports both static and dynamic images
  category?: "men" | "women"; // Optional category for categorization
}

export const products: ProductDetail[] = [
  // Reordered Products with Best Images
  {
    id: 1,
    name: "Nike Air Max Pulse",
    description: "Women's Shoe",
    price: "$13.99",
    slug: "shirt1",
    imageUrl: best1,
    category: "women",
  },
  {
    id: 2,
    name: "Nike Air Max Pulse",
    description: "Men's Shoe",
    price: "$13.99",
    slug: "shirt2",
    imageUrl: best2,
    category: "men",
  },
  {
    id: 3,
    name: "Nike Air 97 SE",
    description: "Men's Shoe",
    price: "$16.95",
    slug: "shirt3",
    imageUrl: best3,
    category: "men",
  },

  // Remaining Products
  {
    id: 4,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    description: "Men's Short Sleeve",
    price: "₹3895",
    slug: "shirt4",
    imageUrl: G1,
    category: "men",
  },
  {
    id: 5,
    name: "Nike Dri-FIT ADV Challenger",
    description: "Men's 18cm (approx.)",
    price: "₹2495",
    slug: "shirt5",
    imageUrl: G2,
    category: "men",
  },
  {
    id: 6,
    name: "Nike Dri-FIT ADV Run Division",
    description: "Women's Long Sleeve",
    price: "₹5295",
    slug: "shirt6",
    imageUrl: G3,
    category: "women",
  },
  {
    id: 7,
    name: "Nike Fast",
    description: "Women's Mid-Rise 7/8 Running",
    price: "₹3795",
    slug: "shirt7",
    imageUrl: G4,
    category: "women",
  },
];
