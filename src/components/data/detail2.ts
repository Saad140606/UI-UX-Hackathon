import { StaticImageData } from "next/image";
import best1 from "../../../public/images/image1.jpg";
import best2 from "../../../public/images/image2.jpg";
import best3 from "../../../public/images/image3.jpg";
import G1 from "../../../public/images/image5.png";
import G2 from "../../../public/images/image6.png";
import G3 from "../../../public/images/image7.png";
import G4 from "../../../public/images/image8.png";

export interface ProductDetail {
  id: string; // Alphanumeric ID
  name: string;
  description: string;
  price: string | number; // Flexible price type
  slug: string;
  imageUrl: string | StaticImageData; // Supports both static and dynamic images
  category?: "men" | "women"; // Optional category for categorization
  deal: string; // Deal information (color orange can be handled in UI)
}

export const products: ProductDetail[] = [
  {
    id: "P001",
    name: "Nike Air Max hyhy",
    description: "Women's Shoe",
    price: "$13.99",
    slug: "shirt1",
    imageUrl: best1,
    category: "women",
    deal: "20% OFF",
  },
  {
    id: "P002",
    name: "Nike Air Max Pulse",
    description: "Men's Shoe",
    price: "$13.99",
    slug: "shirt2",
    imageUrl: best2,
    category: "men",
    deal: "Buy 1 Get 1 Free",
  },
  {
    id: "P003",
    name: "Nike Air 97 SE",
    description: "Men's Shoe",
    price: "$16.95",
    slug: "shirt3",
    imageUrl: best3,
    category: "men",
    deal: "15% OFF",
  },
  {
    id: "P004",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    description: "Men's Short Sleeve",
    price: "₹3895",
    slug: "shirt4",
    imageUrl: G1,
    category: "men",
    deal: "Limited Stock",
  },
  {
    id: "P005",
    name: "Nike Dri-FIT ADV Challenger",
    description: "Men's 18cm (approx.)",
    price: "₹2495",
    slug: "shirt5",
    imageUrl: G2,
    category: "men",
    deal: "Exclusive Deal",
  },
  {
    id: "P006",
    name: "Nike Dri-FIT ADV Run Division",
    description: "Women's Long Sleeve",
    price: "₹5295",
    slug: "shirt5",
    imageUrl: G3,
    category: "women",
    deal: "Flash Sale",
  },
  {
    id: "P007",
    name: "Nike Fast",
    description: "Women's Mid-Rise 7/8 Running",
    price: "₹3795",
    slug: "shirt6",
    imageUrl: G4,
    category: "women",
    deal: "10% OFF",
  },
]